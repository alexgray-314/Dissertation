class Handler {
  constructor(areas) {
    this.areas = areas;
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

  // Will add a specified card to a position in a deck within an area
  // N.B. This does not error-check to make sure the move is allowed
  add_card(card, dest) {
    for (let a of this.areas) {
      if (a.id === dest.area) {
        const deck = a.decks[dest.index.deck];
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
