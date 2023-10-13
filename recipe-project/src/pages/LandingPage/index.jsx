import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, putProfile, register } from "../../redux/actions/auth";
import { useState } from "react";

export default function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      <div id="food-item1">
        <div className="navbar">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <a href="#Popular">Popular</a>
            </li>
            <li>
              <a href="#newRecipe">New Recipe</a>
            </li>
            <li>
              <Link to="/search">Search Menu</Link>
            </li>
          </ul>
        </div>
        <div className="box-top">
          {localStorage.getItem("token") === null ? (
            <div className="user-panel">
              <img
                src="https://res.cloudinary.com/dafjb9vn7/image/upload/v1691755555/assets/user-icon_yulm9c.svg"
                alt=""
              />
              <a
                className="text-white"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modalLogin"
              >
                Login
              </a>
            </div>
          ) : (
            <div id="profileCardId" className="card border-0">
              <div className="row g-0 d-flex justify-content-between">
                <div id="box"></div>
                <div className="col-4 align-self-center">
                  <Link
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#updateProfile"
                  >
                    <img
                      src={localStorage.getItem("photo")}
                      className="img-fluid rounded-circle"
                      alt="..."
                    />
                  </Link>
                </div>
                <div className="col-7">
                  <div className="card-body">
                    <Link
                      to={"/profile-menu"}
                      className="card-title text-decoration-none"
                    >
                      {localStorage.getItem("username").split(" ")[0]}
                    </Link>
                    <Link
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#modalLogout"
                    >
                      <p className="card-text">Logout</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div id="img-search" className="desc-recipe1">
          <div className="recipe1-text">
            <h1 id="searchMenu">
              Discover Recipe <br />& Delicious Food
            </h1>
            <div className="input-group flex-nowrap">
              <span
                className="input-group-text bg-body-secondary"
                id="addon-wrapping"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                    stroke="#C4C4C4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.0004 19.0004L14.6504 14.6504"
                    stroke="#C4C4C4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="form-control bg-body-secondary"
                placeholder="Search Restaurant, Food"
                aria-label="Search Restaurant, Food"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div className="recipe1-pic">
            <img
              src="https://res.cloudinary.com/dafjb9vn7/image/upload/v1691755711/assets/pic1_trtpal.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div id="food-item2">
        <div className="box-recipe2">
          <div className="recipe2-title2">
            <div className="title2-obj"></div>
            <div className="title2-text">
              <h2>Popular For You !</h2>
            </div>
          </div>
          <div className="desc-recipe2">
            <div className="recipe2-pic">
              <img
                src="https://res.cloudinary.com/dafjb9vn7/image/upload/v1691755742/assets/pic2_wz22u7.png"
                alt=""
              />
            </div>
            <div className="recipe2-text">
              <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <input type="button" value="Learn More" />
            </div>
          </div>
        </div>
      </div>
      <div id="food-item3">
        <div className="box-recipe3">
          <div className="recipe3-title3">
            <div className="title3-obj"></div>
            <div className="title3-text">
              <h2 id="newRecipe">New Recipe</h2>
            </div>
          </div>
          <div className="desc-recipe3">
            <div className="recipe3-pic">
              <img
                src="https://res.cloudinary.com/dafjb9vn7/image/upload/v1691755742/assets/pic3_fpvrpo.png"
                alt=""
              />
            </div>
            <div className="recipe3-text">
              <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <Link to={"/search"}>
                <input type="button" value="Learn More" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="food-item4">
        <div className="box-recipe4">
          <div className="recipe4-title4">
            <div className="title4-obj"></div>
            <div className="title4-text">
              <h2 id="Popular">Popular Recipe</h2>
            </div>
          </div>
          <div className="desc-recipe4">
            <div className="recipe4-pic">
              <img
                src="https://res.cloudinary.com/dafjb9vn7/image/upload/v1695957816/assets/pic4_pai1ry.png"
                alt=""
              />
              <p className="pic4">Chiken Kare</p>
            </div>
            <div className="recipe4-pic">
              <img
                src="https://res.cloudinary.com/dafjb9vn7/image/upload/v1695957817/assets/pic5_lpdee8.png"
                alt=""
              />
              <p className="pic5">Bomb Chicken</p>
            </div>
            <div className="recipe4-pic">
              <img
                src="https://res.cloudinary.com/dafjb9vn7/image/upload/v1695957817/assets/pic6_xgmluf.png"
                alt=""
              />
              <p className="pic6">Banana Smothie Pop</p>
            </div>
            <div className="recipe4-pic">
              <img
                src="https://res.cloudinary.com/dafjb9vn7/image/upload/v1695957817/assets/pic7_rmof9e.png"
                alt=""
              />
              <p className="pic7">Coffe Lava Cake</p>
            </div>
            <div className="recipe4-pic">
              <img
                src="https://res.cloudinary.com/dafjb9vn7/image/upload/v1695957817/assets/pic8_xew6om.png"
                alt=""
              />
              <p className="pic8">Sugar Salmon</p>
            </div>
            <div className="recipe4-pic">
              <img
                src="https://res.cloudinary.com/dafjb9vn7/image/upload/v1695957817/assets/pic9_npmdbm.png"
                alt=""
              />
              <p className="pic9">Indian Salad</p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <h2>Eat, Cook, Repeat</h2>
        <p>Share your best recipe by uploading here !</p>
        <div className="navbar-footer">
          <ul>
            <li className="margin">
              <Link to="">product</Link>
            </li>
            <li className="margin">
              <Link to="">company</Link>
            </li>
            <li className="margin">
              <Link to="">learn more</Link>
            </li>
            <li>
              <Link to="">get in touch</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- TODO: MODAL --> */}
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
                <label htmlFor="imageForm" className="file-label align-self-center" role="button">
                <img
                  src={profileImageURL}
                  alt=""
                  style={{ width: 300, height: 300 }}
                  className="img-fluid rounded-circle"
                />
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
                  <label htmlFor="nameFormProfile" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameFormProfile"
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
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}
