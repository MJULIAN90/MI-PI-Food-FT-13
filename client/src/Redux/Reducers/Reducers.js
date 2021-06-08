let initialState = [];

function rootReducer(state = initialState, actions) {
  switch (actions.type) {
    case "":
      return;

    default:
      return state;
  }
}

export default rootReducer;
