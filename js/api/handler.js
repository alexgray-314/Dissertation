class Handler {

  constructor(state) {
    this.state = state;
  }

  call(request) {
    switch(request.type) {
      case "MOVE":
        const card = this.state.get_card(request.source);
        this.state.remove_card(request.source);
        this.state.add_card(card, request.destination);
      case "ACTION":
        this.state.trigger_action(request);
    }
  }

}
