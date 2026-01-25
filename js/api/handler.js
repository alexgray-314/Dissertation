class Handler {

  constructor(state, ui) {
    this.state = state;
    this.ui = ui;
  }

  // Call the API. Request some change to the state
  call(request) {
    switch(request.type) {
      case "MOVE":
        this.state.check_move(request.source, request.destination);
        break;
      case "ACTION":
        this.state.trigger_action(request);
        break;
      default:
        console.error("Invalid request " + request.type);
        return;
    }
    this.notify();
  }

  // Notify the UI that there has been some change to the state
  notify() {
    this.ui.update(this.state);
  }

}
