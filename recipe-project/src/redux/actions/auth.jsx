import axios from "axios";

export const login = (data, navigate) => 
  async (dispatch) => {
    try {
        console.log("tes")
      dispatch({ type: "AUTH_LOGIN_PENDING" });
      const result = await axios.post("http://localhost:3000/auth/login", data);

      localStorage.setItem("token", result.data.users.token),
        localStorage.setItem("username", result.data.users.name),
        localStorage.setItem("email", result.data.users.email);
        dispatch({payload:result.data.users,type:"AUTH_LOGIN_SUCCESS"})
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
