let state; // this is initialised in the file handler, once a file is selected

// This is not to be accessed directly from clients, they must go through the API to validate
class State {
    constructor (sourceCode, num_players) {

        this.program = this.#loadProgram(sourceCode);

        this.areas = {};
        this.actions = {};
        this.num_players = num_players;
        this.turn = 0;

        // Setup the player hands
        for (let i = 0; i < handler.num_players; i++) {
            this.define_area({
                id: i.toString,
                args: {
                    min:1,
                    text:"Player " + i + "'s hand",
                }
            });
        }

        const interpreter = new Interpreter(this);
        interpreter.interpret(program);

    }

    next_turn() {
        this.turn++;
        if (this.turn >= this.num_players) {
            his.turn = 0;
        }
    }

    set_turn(turn) {
        if (turn >= this.num_players || turn < 0) {
            throw "Player id [" + turn + "] is out of bounds";
        }
        this.turn = turn;
    }

    // This does not check for programmer-defined blocks on movement
    add_card(card, dest) {
        if (card === undefined) {
            return false;
        }
        if (!this.areas.hasOwnProperty(dest.area)) {
            throw "Invalid area id " + dest.area;
        }

        const area = this.areas[dest.area]
        const stacks = area.stacks;

        // Create the stack if it does not exists
        if (dest.index.stack >= stacks.length) {
            // check the max is not too large
            if (dest.index.stack < area.args.max) {
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
            console.log("Stack index " + source.index.stack + " out of bounds");
            return false;
        }

        const stack = areas.stacks[source.index.stack];

        stack.cards.splice(source.index.position, 1);

    }

    get_card(source) {

        if (!this.areas.hasOwnProperty(source.area)) {
            throw "Invalid area id " + source.area;
        }

        const area = this.areas[source.area];

        if (source.index.stack >= area.stacks.length) {
            console.log("Stack index " + source.index.stack + " out of bounds");
            return undefined;
        }

        const stack = area.stacks[source.index.stack];

        if (source.index.position >= stack.cards.length) {
            console.log("Card index " + source.index.position + " out of bounds");
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

        const args = {
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

        actions[data.id].subTree = data.subTree;

    }

    deal(data) {
        const defualtArgs = {
            jokers:"false",
            distribute:"all",
            shuffle:"true",
            hand_max:52
        }
        Object.assign(defaultArgs, data.args) // merge defaults with set parameters

        const deckArray = this.areas["deck"].stacks[0].cards;
        // ---- Shuffle the deck
        if (args.shuffle === "true") {
            deckArray.sort(function (a, b) {
                return Math.random() - 0.5;
            });
        }

        // TODO actually consider the args

        // Deal out the cards until done
        let player = 0;
        for (let i=0; i < deckArray.length; i++) {
        this.add_card(deckArray[i], {
            type: "POSITION",
            area: player.toString,
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

        deckArray = [];

  }

    // Load the program and all library files
    #loadProgram(soureCode) {
        
        const lexer = new Lexer();
        const recogniser = new Recogniser();
        const parser = new Parser();
        const tokens = lexer.lex(soureCode);

        // Check that the user code has valid syntax
        recogniser.recognise(tokens);
        console.log("Valid Syntax");

        // Load library files
        const asts = parser.parse(lexer.lex(lib));

        const programASTS = parser.parse(tokens);
        asts.push(...programASTS);
        console.log(programASTS);

        return asts;

    }

}