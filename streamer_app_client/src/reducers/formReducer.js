const INITIAL_STATE = {
  title: "",
  description: "",
};

export default (state = {}, action) => {
  switch (action.type) {
    case "STREAM_CREATE":
      return {
        ...state,
        title: action.payload.title,
        description: action.payload.description,
      };
    default:
      return state;
  }
};
