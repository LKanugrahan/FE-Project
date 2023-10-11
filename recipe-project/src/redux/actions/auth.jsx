import axios from "axios";

export const login = (datum, navigate) => async (dispatch) => {
  try {
    console.log("tes");
    dispatch({ type: "AUTH_LOGIN_PENDING" });
    const result = await axios.post(
      "https://dark-rose-chinchilla-veil.cyclic.cloud/auth/login",
      datum
    );
    console.log("data");
    console.log(result);
    localStorage.setItem("token", result.data.data.token);
    localStorage.setItem("username", result.data.data.name);
    localStorage.setItem("email", result.data.data.email);
    localStorage.setItem("photo", result.data.data.photo);
    localStorage.setItem("id", result.data.data.id);
    dispatch({ payload: result.data.data, type: "AUTH_LOGIN_SUCCESS" });
    navigate("/search");
  } catch (err) {
    console.log("error");
    dispatch({
      payload: err.response.data.message,
      type: "AUTH_LOGIN_FAILED",
    });
    console.log(err);
  }
};

export const register = (datum) => async (dispatch) => {
  try {
    console.log("tes");
    dispatch({ type: "AUTH_REGISTER_PENDING" });
    const result = await axios.post(
      "https://dark-rose-chinchilla-veil.cyclic.cloud/auth/register",
      datum
    );
    console.log("data");
    console.log(result);
    dispatch({ payload: result.data.data, type: "AUTH_REGISTER_SUCCESS" });
  } catch (err) {
    console.log("error");
    dispatch({
      payload: err.response.data.message,
      type: "AUTH_REGISTER_FAILED",
    });
    console.log(err);
  }
};

export const putProfile = (datum) => async (dispatch) => {
  try {
    console.log("tes");
    dispatch({ type: "AUTH_PROFILE_PENDING" });
    const result = await axios.put(
      `https://dark-rose-chinchilla-veil.cyclic.cloud/auth/${localStorage.getItem(
        "id"
      )}`,
      datum,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("data");
    console.log(result);
    localStorage.setItem("token", result.data.data.token);
    localStorage.setItem("username", result.data.data.name);
    localStorage.setItem("email", result.data.data.email);
    localStorage.setItem("photo", result.data.data.photo);
    dispatch({ payload: result.data.data, type: "AUTH_PROFILE_SUCCESS" });
  } catch (err) {
    console.log("error");
    dispatch({
      payload: err.response.data.message,
      type: "AUTH_PROFILE_FAILED",
    });
    console.log(err);
  }
};
