export const signIn = (creds) => {
  return {
    type: "SIGN_IN",
    paylode: creds,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
