const INITIAL_STATE = {
  isSignedIn: null,
  userId: "",
};

export default (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      console.log("action.payload on signin==>", action.payload);
      return { ...state, isSignedIn: true, userId: action.payload };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false, userId: "" };
    default:
      return state;
  }
};
