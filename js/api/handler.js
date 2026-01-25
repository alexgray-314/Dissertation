class Handler {

  constructor(state, ui) {
    this.state = state;
    this.ui = ui;
  }

  // Call the API. Request some change to the state
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
        console.error("Invalid request " + request.type);
        return;
    }
    this.ui.update(this.state);
  }

  // Notify the UI that there has been some change to the state
  notify(request) {
    
  }

}
