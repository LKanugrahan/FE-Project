import axios from "axios";

export const profileMenu = () => async (dispatch) => {
  try {
    console.log("tes");
    dispatch({ type: "MENU_PROFILE_PENDING" });
    const result = await axios.get(
      `https://dark-rose-chinchilla-veil.cyclic.cloud/recipe/mobile/${localStorage.getItem(
        "id"
      )}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log("data");
    console.log(result);
    dispatch({ payload: result.data.data, type: "MENU_PROFILE_SUCCESS" });
  } catch (err) {
    console.log("error");
    dispatch({
      payload: err.response.data.message,
      type: "MENU_PROFILE_FAILED",
    });
    console.log(err);
  }
};

export const deleteMenu = (id) => async (dispatch) => {
  try {
    console.log("tes");
    dispatch({ type: "MENU_DELETE_PENDING" });
    const result = await axios.delete(
      `https://dark-rose-chinchilla-veil.cyclic.cloud/recipe/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log("data");
    console.log(result);
    dispatch({ payload: result.data.data, type: "MENU_DELETE_SUCCESS" });
  } catch (err) {
    console.log("error");
    dispatch({
      payload: err.response.data.message,
      type: "MENU_DELETE_FAILED",
    });
    console.log(err);
  }
};

export const addMenu = (bodyFormData, navigate) => async (dispatch) => {
  try {
    console.log("tes");
    dispatch({ type: "MENU_ADD_PENDING" });
    const result = await axios.post(
      "https://dark-rose-chinchilla-veil.cyclic.cloud/recipe",
      bodyFormData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("data");
    console.log(result);
    dispatch({ payload: result.data.data, type: "MENU_ADD_SUCCESS" });
    navigate("/profile-menu");
  } catch (err) {
    console.log("error");
    dispatch({
      payload: err.response.data.message,
      type: "MENU_ADD_FAILED",
    });
    console.log(err);
  }
};

export const detailMenu = (id) => async (dispatch) => {
  try {
    console.log("tes");
    dispatch({ type: "MENU_DETAIL_PENDING" });
    const result = await axios.get(
      `https://dark-rose-chinchilla-veil.cyclic.cloud/recipe/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log("data");
    console.log(result);
    dispatch({ payload: result.data.data, type: "MENU_DETAIL_SUCCESS" });
  } catch (err) {
    console.log("error");
    dispatch({
      payload: err.response.data.message,
      type: "MENU_DETAIL_FAILED",
    });
    console.log(err);
  }
};

export const searchMenu = () => async (dispatch) => {
  try {
    console.log("tes");
    dispatch({ type: "MENU_SEARCH_PENDING" });
    const result = await axios.get(
      `https://dark-rose-chinchilla-veil.cyclic.cloud/recipe`
    );
    console.log("data");
    console.log(result);
    dispatch({ payload: result.data.data, type: "MENU_SEARCH_SUCCESS" });
  } catch (err) {
    console.log("error");
    dispatch({
      payload: err.response.data.message,
      type: "MENU_SEARCH_FAILED",
    });
    console.log(err);
  }
};

export const updateMenu = (id, bodyFormData, navigate) => async (dispatch) => {
  try {
    console.log("tes");
    dispatch({ type: "MENU_UPDATE_PENDING" });
    const result = await axios.put(
      `https://dark-rose-chinchilla-veil.cyclic.cloud/recipe/${id}`,
      bodyFormData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("data");
    console.log(result);
    dispatch({ payload: result.data.data, type: "MENU_UPDATE_SUCCESS" });
    navigate("/profile-menu");
  } catch (err) {
    console.log("error");
    dispatch({
      payload: err.response.data.message,
      type: "MENU_UPDATE_FAILED",
    });
    console.log(err);
  }
};
