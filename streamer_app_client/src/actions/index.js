export const signIn = (creds) => {
  return {
    type: "SIGN_IN",
    payload: creds,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const streamCreate = (title, description) => {
  return {
    type: "STREAM_CREATE",
    payload: { title, description },
  };
};
