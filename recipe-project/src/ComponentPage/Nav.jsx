import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    navigate('/home')
    console.log("berhasil")
  }
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
        <div id="profileCard" className="card border-0">
          <div className="row g-0 d-flex justify-content-between">
            <div id="box"></div>
            <div className="col-4 align-self-center">
              <Link
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#updateProfile"
              >
                <img
                  src="/assets/pic-profile.png"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
              </Link>
            </div>
            <div className="col-7">
              <div className="card-body">
                <Link to = {'/profile-menu'}
                  className="card-title text-decoration-none"
                >
                  Ayudia
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
              <img
                src="/assets/Ellipse 129.png"
                alt=""
                className="img-fluid mx-auto d-block"
              />
              <nav className="navbar">
                <div className="container-fluid d-flex justify-content-center">
                  <Link className="navbar-brand" href="#">
                    Change Profile picture
                  </Link>
                </div>
              </nav>
              <div className="mb-3">
                <label htmlFor="nameForm" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameForm"
                  placeholder="Name"
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
                type="submit"
                className="btn btn-warning text-white col-12"
              >
                Update Profile
              </button>
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
              <form action="" method="post">
                <h2 className="text-center">Change Your Password Here</h2>
                <div className="mb-3">
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
                </div>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    placeholder="New Password"
                    required
                  />
                </div>
                <input
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
                  onClick={logout}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="btn btn-light text-white mb-3 col-12"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
