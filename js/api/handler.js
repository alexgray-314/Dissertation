class Handler {
  constructor(areas, actions) {
    this.areas = areas;
    this.actions = actions;
    this.latestActionPlayer = 0;
    this.num_players = 2;
    this.playerSelector = document.getElementById("playerSelector");
    this.turn = 0;
  }

  next_turn() {
    this.turn++;
    if (this.turn >= this.num_players) {
      this.turn = 0;
    }
  }

  set_turn(turn) {
    this.turn = turn;
  }

  active_player_id() {
    return Number(this.playerSelector.value);
  }

  action() {
    this.latestActionPlayer = this.active_player_id();
  }

  define_area(data) {
    const area = new Area(data.id);
    const args = {
      "min": 3,
      "max": -1
    }
    this.#deepReplace(args, data.args)// merge defaults with set parameters

    // Setting the args
    // min
    area.decks = [];
    for (let i = 0; i < args.min; i++) {
      area.decks.push([]);
    }

    this.areas.push(area);
  }

  // This will create a new action and add a button to the screen
  define_action(data) {
    const args = {
      text:"ACTION!"
    }
    this.#deepReplace(args, data.args)// merge defaults with set parameters

    this.actions.push(new Action(data.id, args));
  }

  deal(data) {
    const args = {
      jokers:"false",
      distribute:"all",
      shuffle:"true",
      hand_max:52
    }
    this.#deepReplace(args, data.args) // merge defaults with set parameters

    let ar;
    // ---- Shuffle the deck
    if (args.shuffle === "true") {
      for (let a of this.areas) {
        // get the deck. This is a protected ID reserved for this purpose
        if (a.id === "deck") {
          a.decks[0].sort(function (a, b) {
            return Math.random() - 0.5;
          });
          ar = a;
        }
      }
    }

    // TODO actually consider the args

    // Deal out the cards until done
    let player = 0;
    for (let i=0; i < ar.decks[0].length; i++) {
      this.add_card(ar.decks[0][i], {
        type: "POSITION",
        area: "hand" + player,
        index: {
          deck: 0,
          position: 0
        }
      });
      player++;
      if (player >= this.num_players) {
        player = 0;
      }
    }

    ar.decks[0] = [];

  }

  // Will add a specified card to a position in a deck within an area
  // N.B. This does not error-check to make sure the move is allowed
  add_card(card, dest) {
    if (card === undefined) {
      return;
    }
    for (let a of this.areas) {
      if (a.id === dest.area) {
        a.decks[dest.index.deck].splice(dest.index.position, 0, card);
        return;
      }
    }
  }

  // Removes the card from its position in the deck and returns it
  // source must be a position (e.g. global[0, 0])
  remove_card(source) {
    for (let a of this.areas) {
      if (a.id === source.area) {
        const c = a.decks[source.index.deck][source.index.position];
        a.decks[source.index.deck].splice(source.index.position, 1);
        return c;
      }
    }
  }

  get_card(position) {
    for (let a of this.areas) {
      if (a.id === position.area) {
        return a.decks[position.index.deck][position.index.position];
      }
    }
  }

  #deepReplace(target, source) {
    for (const key in source) {
      if (
        typeof source[key] === "object" &&
        source[key] !== null &&
        typeof target[key] === "object"
      ) {
        this.#deepReplace(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }

}
