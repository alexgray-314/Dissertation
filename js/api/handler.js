class Handler {
  constructor(areas, actions) {
    this.areas = areas;
    this.actions = actions;
    this.latestActionPlayer = 0;
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

  // Will add a specified card to a position in a deck within an area
  // N.B. This does not error-check to make sure the move is allowed
  add_card(card, dest) {
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

  latest_action_player() {
    return this.latestActionPlayer;
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
