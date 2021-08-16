import streams from "../apis/streams";
import { dispatch } from "redux";
import history from "../history";

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

export const streamCreate = (data) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", {
    ...data,
    userId,
  });
  dispatch({
    type: "STREAM_CREATE",
    payload: response.data,
  });
  history.push("/");
};

export const getStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");
  dispatch({
    type: "GET_STREAMS",
    payload: response.data,
  });
};

export const getStream = (id) => async (dispatch) => {
  const response = await streams.get("/streams/" + id);
  dispatch({
    type: "GET_STREAM",
    payload: response.data,
  });
};

export const editStream = (data) => async (dispatch) => {
  console.log("data in action==>", data);
  const response = await streams.patch("/streams/" + data.id, data);
  dispatch({
    type: "EDIT_STREAM",
    payload: response.data,
  });
  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete("/streams/" + id);
  dispatch({
    type: "DELETE_STREAM",
    payload: id,
  });
};
