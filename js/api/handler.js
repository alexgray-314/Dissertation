class Handler {
  constructor(areas) {
    this.areas = areas;
  }

  define_area(data) {
    const area = new Area(data.id);
    const defaultArgs = {
      id: "default",
      args: {
        "min": 3,
        "max": -1
      }
    }
    const args = Object.assign(defaultArgs, data)// merge defaults with set parameters

    // Setting the args
    // min
    area.decks = [];
    for (let i = 0; i < args.args.min; i++) {
      area.decks.push([]);
    }

    this.areas.push(area);
  }

}
