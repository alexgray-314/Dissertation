// This is not to be accessed directly from clients, they must go through the API to validate
class State {
    constructor (sourceCode, num_players) {

        this.program = this.#loadProgram(sourceCode);

        this.areas = {};
        this.actions = {};
        this.variables = {};
        this.num_players = num_players;
        this.turn = 0;
        this.latestAction;

        // The movement catches that prevent movement
        this.catches = []
        this.movementTracker = {
            source: undefined,
            destination: undefined,
            card: undefined,
            last_successful_move_player: undefined,
            player_moving: undefined, // the player currently trying to move
            cancelled: false // whether or not the card movement has been cancelled
        }

        // Set up the player hands
        for (let i = 0; i < num_players; i++) {

            this.define_area({
                id: i.toString(),
                args: {
                    min:1,
                    hand:"false",
                    text:"Player " + i + "'s hand",
                }
            });
        }

        const interpreter = new Interpreter(this);
        interpreter.interpret(this.program);

        console.log("areas", this.areas);
        console.log("actions", this.actions);

    }

    define_variable(data) {
      const type = data.valueType;
      const id = data.id;
      this.variables[id] = {
        type: type,
        value: undefined
      }
    }

    check_move(source, destination, player) {

        this.movementTracker.source = source;
        this.movementTracker.destination = destination;
        this.movementTracker.card = this.get_card(source)
        this.movementTracker.player_moving = player;
        this.movementTracker.cancelled = false;

        const interpreter = new Interpreter(this);

        for (const c of this.catches) {
            interpreter.interpret(c);
        }

        // If the movement has not been cancelled, then update the last successful move player...
        // And check to execute movement
        if (this.movementTracker.cancelled === false && new Interpreter(this).object_equals(this.get_card(source), this.movementTracker.card)) {
            this.movementTracker.last_successful_move_player = player;
            this.remove_card(source);
            this.add_card(this.movementTracker.card, destination);
        }

        this.movementTracker.source = undefined;
        this.movementTracker.destination = undefined;
        this.movementTracker.card = undefined;
        this.movementTracker.player_moving = undefined;
        this.movementTracker.cancelled = false;

    }

    trigger_action(data) {
        this.latestAction = data.player;
        new Interpreter(this).interpret(this.actions[data.id].subTree);
    }

    get_latest_action_player() {
        return this.latestAction;
    }

    next_turn() {
        this.turn++;
        if (this.turn >= this.num_players) {
            this.turn = 0;
        }
    }

    set_turn(turn) {
        if (turn >= this.num_players || turn < 0) {
            throw "Player id [" + turn + "] is out of bounds";
        }
        this.turn = turn;
    }

    get_turn() {
        return this.turn;
    }

    // This does not check for programmer-defined blocks on movement
    add_card(card, dest) {
        if (card === undefined) {
            return;
        }
        if (!this.areas.hasOwnProperty(dest.area)) {
            throw "Invalid area id " + dest.area;
        }

        const area = this.areas[dest.area]
        const stacks = area.stacks;

        // Create the stack if it does not exists
        if (dest.index.stack >= stacks.length) {
            // check the max is not too large
            if (dest.index.stack >= area.args.max) {
                console.log("Stack index exceeds maximum for area");
                return false;
            }
            // add new stacks if necessary so that the index is reachable
            for (let i = stacks.length; i <= dest.index.stack; i++) {
                // define a new stack
                stacks.push({
                    type: "STACK",
                    cards: [],
                    args: {}
                })
            }
        }

        // add the card to the deck
        stacks[dest.index.stack].cards.splice(dest.index.position, 0, card);
        return true;
    }

    remove_card(source) {

        if (!this.areas.hasOwnProperty(source.area)) {
            throw "Invalid area id " + source.area;
        }

        const area = this.areas[source.area];

        if (source.index.stack >= area.stacks.length) {
            return;
        }

        const stack = area.stacks[source.index.stack];

        stack.cards.splice(source.index.position, 1);

    }

    get_card(source) {

        // console.log("trying to get", source);

        if (!this.areas.hasOwnProperty(source.area)) {
            console.error("Invalid area id ", source.area);
            return undefined;
        }

        const area = this.areas[source.area];

        if (source.index.stack >= area.stacks.length) {
            return undefined;
        }

        const stack = area.stacks[source.index.stack];

        if (source.index.position >= stack.cards.length) {
            return undefined;
        }

        return stack.cards[source.index.position];

    }

    define_area(data) {

        this.areas[data.id] = [];
        // default parameters
        const defaultArgs = {
            "min": 1,
            "text": data.id,
        }
        Object.assign(defaultArgs, data.args)// merge defaults with set parameters

        this.areas[data.id] = {
            type: "AREA",
            id: data.id,
            args: defaultArgs,
            stacks: []
        };

    }

    define_action(data) {

        const defaultArgs = {
        text:"ACTION!"
        }
        Object.assign(defaultArgs, data.args)// merge defaults with set parameters

        this.actions[data.id] = {
            type: "ACTION",
            id: data.id,
            args: defaultArgs,
            subTree: []
        }

    }

    assign_action_subtree(data) {

        if (!this.actions.hasOwnProperty(data.id)) {
            throw "There is no such action " + data.id;
        }

        this.actions[data.id].subTree = data.subTree;

    }

    add_catch(subTree) {
        this.catches.push(subTree);
    }

    deal(data) {
        const defaultArgs = {
            jokers:"false",
            distribute:"all",
            shuffle:"true",
            hand_max:52
        }
        Object.assign(defaultArgs, data.args) // merge defaults with set parameters

        const deckArray = this.areas["deck"].stacks[0].cards;
        // ---- Shuffle the deck
        if (defaultArgs.shuffle === "true") {
            deckArray.sort(function (a, b) {
                return Math.random() - 0.5;
            });
        }

        // TODO actually consider the args

        // Deal out the cards until done
        let player = 0;
        for (let i= 0; deckArray.length > 0; i++) {
          this.add_card(deckArray[0], {
              type: "POSITION",
              area: player.toString(),
              index: {
                  stack: 0,
                  position: 0
              }
          });
          this.remove_card({
            type: "POSITION",
            area: "deck",
            index: {
              stack: 0,
              position: 0
            }
          });
          player++;
          if (player >= this.num_players) {
              player = 0;
          }
        }

  }

    // Load the program and all library files
    #loadProgram(sourceCode) {

        const lexer = new Lexer();
        const recogniser = new Recogniser();
        const parser = new Parser();
        const tokens = lexer.lex(sourceCode);

        // Check that the user code has valid syntax
        recogniser.recognise(tokens);
        console.log("Valid Syntax");

        // Load library files
        const asts = parser.parse(lexer.lex(lib));

        const programASTS = parser.parse(tokens);
        asts.push(...programASTS);
        console.log("asts", programASTS);

        return asts;

    }

}
