import axios from "axios";

export const category = () => async (dispatch) => {
    try {
      console.log("tes");
      dispatch({ type: "CATEGORY_PENDING" });
      const result = await axios.get(
        `https://dark-rose-chinchilla-veil.cyclic.cloud/category`
      );
      console.log("data");
      console.log(result);
      dispatch({ payload: result.data.data, type: "CATEGORY_SUCCESS" });
    } catch (err) {
      console.log("error");
      dispatch({
        payload: err.response.data.message,
        type: "CATEGORY_FAILED",
      });
      console.log(err);
    }
  };