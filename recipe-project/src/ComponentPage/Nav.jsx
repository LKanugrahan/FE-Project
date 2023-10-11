import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, putProfile, register } from "../redux/actions/auth";
import { useDispatch } from "react-redux";


export default function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputLogin, setLogin] = useState({
    email: "",
    password: "",
  });
  const [inputRegist, setRegist] = useState({
    name: "",
    email: "",
    password: "",
  });

  const saveLogin = (e) => {
    e.preventDefault();
    dispatch(login(inputLogin, navigate));
  };
  const saveRegist = (e) => {
    e.preventDefault();
    dispatch(register(inputRegist));
  };
  const changeRegist = (e) => {
    setRegist({ ...inputRegist, [e.target.name]: e.target.value });
  };
  const changeLogin = (e) => {
    setLogin({ ...inputLogin, [e.target.name]: e.target.value });
  };
  const logout = () => {
    localStorage.clear();
    navigate("/home");
    console.log("berhasil");
  };
  const [inputDataUser, setInputDataUser] = useState({
    name: localStorage.getItem("username"),
    email: localStorage.getItem("email"),
    password: "",
    photo: "",
  });
  const [imageDataUser, setImageDataUser] = useState();
  const [profileImageURL, setProfileImageURL] = useState(
    localStorage.getItem("photo")
  );

  const handlerPutUser = async (event) => {
    event.preventDefault();
    let bodyFormDataUser = new FormData();
    bodyFormDataUser.append("name", inputDataUser.name);
    bodyFormDataUser.append("email", inputDataUser.email);
    bodyFormDataUser.append("password", inputDataUser.password);
    bodyFormDataUser.append("photo", imageDataUser);
    dispatch(putProfile(bodyFormDataUser));

    console.log(bodyFormDataUser);
  };

  const changePutData = (e) => {
    setInputDataUser({ ...inputDataUser, [e.target.name]: e.target.value });
    console.log(inputDataUser);
  };

  const changeImagePut = (e) => {
    setImageDataUser(e.target.files[0]);
    e.target.files[0] &&
      setInputDataUser({
        ...inputDataUser,
        photo: URL.createObjectURL(e.target.files[0]),
      });
    setProfileImageURL(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files);
  };

  return (
    <>
      {/* <!-- TODO: NAVBAR --> */}
      <nav
        id="nav"
        className="container-fluid navbar navbar-expand-lg flex-row justify-content-between"
      >
        <div id="navbar" className="mb-5">
          {/* <!-- nav --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav nav-underline">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link ms-5 p-0">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add-menu"} className="nav-link ms-5 p-0">
                  Add Recipe
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/search"} className="nav-link ms-5 p-0">
                  Search Menu
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- end of nav --> */}
        </div>
        {/* <!-- profile card --> */}
        {localStorage.getItem("token") === null ? (
          <div className="me-5">
            <img
              src="https://res.cloudinary.com/dafjb9vn7/image/upload/v1691755555/assets/user-icon_yulm9c.svg"
              alt=""
            />
            <a
              className="text-black"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modalLogin"
            >
              Login
            </a>
          </div>
        ) : (
          <div id="profileCard" className="card border-0">
            <div className="row g-0 d-flex justify-content-between">
              <div id="box" className="me-1"></div>
              <div className="col-4 align-self-center">
                <div
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#updateProfile"
                >
                  <img
                    src={localStorage.getItem("photo")}
                    className="img-fluid rounded-circle object-fit-cover"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-7">
                <div className="card-body p-2">
                  <Link to={"/profile-menu"} className="card-title">
                    {localStorage.getItem("username").split(" ")[0]}
                  </Link>
                  <div
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#modalLogout"
                  >
                    <p className="card-text">Logout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <!-- end profile card --> */}
      </nav>
      {/* <!-- TODO: END OF NAVBAR --> */}
      {/* <!-- TODO: MODAL --> */}
      <div
        className="modal fade"
        id="updateProfile"
        tabIndex="-1"
        aria-labelledby="updateProfileLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <h2 className="text-center">Edit Profile</h2>

              <form className=" d-flex flex-column" onSubmit={handlerPutUser}>
                <img
                  src={profileImageURL}
                  alt=""
                  style={{ width: 300, height: 300 }}
                  className="img-fluid rounded-circle align-self-center"
                />
                <label htmlFor="imageForm" className="file-label">
                  Pilih Gambar
                </label>
                <input
                  type="file"
                  id="imageForm"
                  name="photo"
                  onChange={changeImagePut}
                  className="form-control-file d-none"
                  accept=".jpg, .png"
                />
                <div className="mb-3">
                  <label htmlFor="nameForm" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameForm"
                    placeholder="Name"
                    name="name"
                    value={inputDataUser.name}
                    onChange={changePutData}
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email address"
                    name="email"
                    value={inputDataUser.email}
                    onChange={changePutData}
                  />
                </div>
                <div className="form-text text-center">
                  Change Password?
                  <span>
                    <Link
                      className="text-warning text-decoration-none"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#updatePassword"
                    >
                      Click Here
                    </Link>
                  </span>
                </div>
                <button
                  data-bs-dismiss="modal"
                  type="submit"
                  className="btn btn-warning text-white col-12"
                >
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="updatePassword"
        tabIndex="-1"
        aria-labelledby="updatePasswordLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form onSubmit={handlerPutUser}>
                <h2 className="text-center">Change Your Password Here</h2>
                {/* <div className="mb-3">
                  <label htmlFor="oldPassword" className="form-label">
                    Old Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="oldPassword"
                    placeholder="Old Password"
                    required
                  />
                </div> */}
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    placeholder="New Password"
                    name="password"
                    value={inputDataUser.password}
                    onChange={changePutData}
                    required
                  />
                </div>
                <input
                  data-bs-dismiss="modal"
                  type="submit"
                  value="Change Password"
                  className="btn btn-warning text-light col-12"
                />
                <div className="form-text text-center">
                  Back to edit profile?
                  <span>
                    <Link
                      className="text-warning text-decoration-none"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#updateProfile"
                    >
                      Click Here
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalLogout"
        tabIndex="-1"
        aria-labelledby="modalLogoutLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form action="" method="post">
                <h2 className="text-center mb-5">You want to logout?</h2>
                <button
                  type="button"
                  className="btn btn-warning text-white mb-3 col-12"
                  data-bs-dismiss="modal"
                  onClick={logout}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="btn btn-light text-white mb-3 col-12"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalLogin"
        tabIndex="-1"
        aria-labelledby="modalLoginLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form onSubmit={saveLogin}>
                <h2 className="text-center">Recipe...</h2>
                <h2 className="text-center">Welcome</h2>
                <div className="form-text text-center">
                  Log in into your exiting account
                </div>
                <div className="mb-3">
                  <label htmlFor="inputEmailLogin" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={inputLogin.email}
                    onChange={changeLogin}
                    className="form-control"
                    id="inputEmailLogin"
                    aria-describedby="emailHelp"
                    placeholder="Enter email address"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPasswordLogin" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={inputLogin.password}
                    onChange={changeLogin}
                    className="form-control"
                    id="inputPasswordLogin"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="inputCheckLogin"
                    required
                  />
                  <label className="form-check-label" htmlFor="inputCheckLogin">
                    I agree to terms & conditions
                  </label>
                </div>
                <input
                  data-bs-dismiss="modal"
                  type="submit"
                  value="Login"
                  className="btn btn-warning text-white col-12"
                />
                <div className="form-text text-center">
                  Don’t have an account?
                  <span>
                    <Link
                      className="text-warning text-decoration-none"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#modalRegist"
                    >
                      Sign Up
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalRegist"
        tabIndex="-1"
        aria-labelledby="modalRegistLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form onSubmit={saveRegist}>
                <h2 className="text-center">Recipe...</h2>
                <h2 className="text-center">Let’s Get Started !</h2>
                <div className="form-text text-center">
                  Create new account to access all features
                </div>
                <div className="mb-3">
                  <label htmlFor="nameForm" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={inputRegist.name}
                    onChange={changeRegist}
                    className="form-control"
                    id="nameForm"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputEmailRegist" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={inputRegist.email}
                    onChange={changeRegist}
                    className="form-control"
                    id="inputEmailRegist"
                    aria-describedby="emailHelp"
                    placeholder="Enter email address"
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPasswordRegist" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={inputRegist.password}
                    onChange={changeRegist}
                    className="form-control"
                    id="inputPasswordRegist"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="inputCheckRegist"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="inputCheckRegist"
                  >
                    I agree to terms & conditions
                  </label>
                </div>
                <input
                  data-bs-dismiss="modal"
                  type="submit"
                  value="Register Account"
                  className="btn btn-warning text-light col-12"
                />
                <div className="form-text text-center">
                  Already have account?
                  <span>
                    <Link
                      className="text-warning text-decoration-none"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#modalLogin"
                    >
                      Log in Here
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
