class Handler {

  constructor(state, ui) {
    this.state = state;
    this.ui = ui;
  }

  call(request) {
    switch(request.type) {
      case "MOVE":
        const card = this.state.get_card(request.source);
        this.state.remove_card(request.source);
        this.state.add_card(card, request.destination);
        break;
      case "ACTION":
        this.state.trigger_action(request);
        break;
      default:
        return;
    }
    this.ui.update(this.state);
  }

}
