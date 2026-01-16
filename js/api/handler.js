class Handler {
  constructor(areas) {
    this.areas = areas;
  }

  define_area(data) {
    const area = new Area(data.id);
    const args = {
      id: "default",
      args: {
        "min": 3,
        "max": -1
      }
    }
    this.#deepReplace(args, data)// merge defaults with set parameters

    // Setting the args
    // min
    area.decks = [];
    for (let i = 0; i < args.args.min; i++) {
      area.decks.push([]);
    }

    this.areas.push(area);
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
