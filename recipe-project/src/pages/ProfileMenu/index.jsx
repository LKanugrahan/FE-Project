import Nav from "../../ComponentPage/Nav";
import Footer from "../../ComponentPage/Footer";
import "./style.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMenu, profileMenu } from "../../redux/actions/menu";

export default function ProfileMenu() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [deleted, setDeleted] = useState(false);

  const { data } = useSelector((state) => state.profileMenuReducer);

  const totalPage = () => {
    if (data) {
      return Math.ceil(data.length / 5);
    }
  };

  const increase = () => {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    setCount((count) => count - 1);
  };
  const startIndex = () => {
    return 5 * (count - 1);
  };

  const endIndex = () => {
    return 5 * count;
  };

  const handleDeleteMenu = (id) => {
    dispatch(deleteMenu(id));
    setDeleted(true);
  };

  useEffect(() => {
    dispatch(profileMenu());
    setDeleted(false);
  }, [deleted]);

  return (
    <>
      <Nav></Nav>
      {/* <!-- TODO: LISTBAR --> */}
      <main id="detail-profile">
        <div className="container">
          <div className="container d-flex justify-content-between mb-5 mt-5">
            {/* <!-- profile card --> */}
            <div className="card border-0">
              <div className="row g-0 d-flex justify-content-between">
                <div id="box"></div>
                <div className="col-4 align-self-center">
                  <img
                    src={localStorage.getItem("photo")}
                    style={{ height: "100px", width: "100px" }}
                    className="img-fluid rounded-circle object-fit-cover"
                    alt="..."
                  />
                </div>
                <div className="col-7">
                  <div className="card-body p-1">
                    <h5 className="card-title">
                      {localStorage.getItem("username")}
                    </h5>
                    <p className="card-text">{data && data.length} Recipes</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end profile card --> */}
            {/* <p className="align-self-center m-0">12 februari 2013</p> */}
          </div>
          <ul className="nav">
            <li className="nav-item ms-5 me-5">
              <a
                className="navbar-brand fs-2"
                data-bs-toggle="collapse"
                href="#recipes"
                role="button"
                aria-expanded="false"
                aria-controls="recipes"
              >
                Recipes
              </a>
            </li>
            <li className="nav-item ms-5 me-5">
              <a
                className="navbar-brand fs-2"
                data-bs-toggle="collapse"
                href="#bookmarked"
                role="button"
                aria-expanded="false"
                aria-controls="bookmarked"
              >
                Bookmarked
              </a>
            </li>
            <li className="nav-item ms-5 me-5">
              <a
                className="navbar-brand fs-2"
                data-bs-toggle="collapse"
                href="#liked"
                role="button"
                aria-expanded="false"
                aria-controls="liked"
              >
                Liked
              </a>
            </li>
          </ul>
          <div id="lines" className="container-fluid mb-4 ms-5 col-7"></div>

          {/* <!-- recipes --> */}
          <div
            className="collapse ms-5 show"
            id="recipes"
            data-bs-parent="#detail-profile"
          >
            <div className="container-fluid py-2 text-center">
              <div className="pagination">
                <button onClick={decrease} disabled={count === 1}>
                  Previous
                </button>
                <span>Page {count}</span>
                <button onClick={increase} disabled={count === totalPage()}>
                  Next
                </button>
              </div>
            </div>
            {data &&
              data
                .map((item, index) => {
                  return (
                    <div key={item.id} className="card mb-4 border-0">
                      <div className="row g-0">
                        <div className="col-md-7">
                          <img
                            style={{ height: 300, width: 300 }}
                            src={item.recipe_image}
                            className="img-fluid rounded object-fit-cover"
                            alt={item.recipe_name}
                          />
                        </div>
                        <div className="col-md-5 d-flex flex-column justify-content-between">
                          <div className="card-body d-flex flex-column justify-content-between">
                            <div>
                              <h4 className="card-title">{item.recipe_name}</h4>
                              <p className="card-text">
                                Ingredients: {item.recipe_ingredients}
                              </p>
                            </div>
                            <div className="d-flex flex-column gap-2">
                              <Link
                                to={`/detail/${item.id}`}
                                className="btn btn-warning col-12"
                                role="button"
                              >
                                Detail Menu
                              </Link>
                              <div className="d-flex flex-row justify-content-between">
                                <Link
                                  to={`/update-menu/${item.id}`}
                                  className="btn btn-primary "
                                  role="button"
                                >
                                  Edit Menu
                                </Link>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => handleDeleteMenu(item.id)}
                                >
                                  Delete Menu
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
                .slice(startIndex(), endIndex())}
            <div className="container-fluid py-2 text-center">
              <div className="pagination">
                <button onClick={decrease} disabled={count === 1}>
                  Previous
                </button>
                <span>Page {count}</span>
                <button onClick={increase} disabled={count === totalPage()}>
                  Next
                </button>
              </div>
            </div>
            {/* <div className="container-fluid py-5 text-center">
              <div className="pagination">
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                  Sebelumnya
                </button>
                <span>Halaman {page}</span>
                <button
                  onClick={() => setPage(page + 1)}
                  disabled={data.length === 0}
                >
                  Berikutnya
                </button>
              </div>
            </div> */}
          </div>
          {/* <!-- end of recipes --> */}
          {/* <!-- bookmarked --> */}
          <div
            className="collapse ms-5"
            id="bookmarked"
            data-bs-parent="#detail-profile"
          >
            {/* <!-- list1 --> */}
            <div className="card mb-5 border-0">
              <div className="row g-0">
                {/* <!-- head --> */}
                <div className="col-md-7">
                  <img
                    src="/src/assets/pic2.png"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </div>
                {/* <!-- body --> */}
                <div className="col-md-5 d-flex flex-column justify-content-between">
                  <div className="card-body pe-0">
                    <h4 className="card-title">
                      Bomb
                      <br />
                      Chicken
                    </h4>
                    <h5 className="card-text">
                      Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                      Soy Sauce, Black Sesame Seed
                    </h5>
                    <a
                      className="btn btn-warning col-12"
                      href="/html/menu/detailMenu.html"
                      role="button"
                    >
                      10 Likes - 12 Comments
                    </a>
                    <div className="d-flex mt-3 justify-content-between">
                      <button type="button" className="btn btn-danger">
                        Delete Menu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- list1 --> */}
            <div className="card mb-5 border-0">
              <div className="row g-0">
                {/* <!-- head --> */}
                <div className="col-md-7">
                  <img
                    src="/src/assets/pic2.png"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </div>
                {/* <!-- body --> */}
                <div className="col-md-5 d-flex flex-column justify-content-between">
                  <div className="card-body pe-0">
                    <h4 className="card-title">
                      Bomb
                      <br />
                      Chicken
                    </h4>
                    <h5 className="card-text">
                      Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                      Soy Sauce, Black Sesame Seed
                    </h5>
                    <a
                      className="btn btn-warning col-12"
                      href="/html/menu/detailMenu.html"
                      role="button"
                    >
                      10 Likes - 12 Comments
                    </a>
                    <div className="d-flex mt-3 justify-content-between">
                      <button type="button" className="btn btn-danger">
                        Delete Menu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- list1 --> */}
            <div className="card mb-5 border-0">
              <div className="row g-0">
                {/* <!-- head --> */}
                <div className="col-md-7">
                  <img
                    src="/src/assets/pic2.png"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </div>
                {/* <!-- body --> */}
                <div className="col-md-5 d-flex flex-column justify-content-between">
                  <div className="card-body pe-0">
                    <h4 className="card-title">
                      Bomb
                      <br />
                      Chicken
                    </h4>
                    <h5 className="card-text">
                      Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                      Soy Sauce, Black Sesame Seed
                    </h5>
                    <a
                      className="btn btn-warning col-12"
                      href="/html/menu/detailMenu.html"
                      role="button"
                    >
                      10 Likes - 12 Comments
                    </a>
                    <div className="d-flex mt-3 justify-content-between">
                      <button type="button" className="btn btn-danger">
                        Delete Menu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- list1 --> */}
            <div className="card mb-5 border-0">
              <div className="row g-0">
                {/* <!-- head --> */}
                <div className="col-md-7">
                  <img
                    src="/src/assets/pic2.png"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </div>
                {/* <!-- body --> */}
                <div className="col-md-5 d-flex flex-column justify-content-between">
                  <div className="card-body pe-0">
                    <h4 className="card-title">
                      Bomb
                      <br />
                      Chicken
                    </h4>
                    <h5 className="card-text">
                      Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                      Soy Sauce, Black Sesame Seed
                    </h5>
                    <a
                      className="btn btn-warning col-12"
                      href="/html/menu/detailMenu.html"
                      role="button"
                    >
                      10 Likes - 12 Comments
                    </a>
                    <div className="d-flex mt-3 justify-content-between">
                      <button type="button" className="btn btn-danger">
                        Delete Menu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid py-5 text-center">a</div>
          </div>
          {/* <!-- end of bookmarked --> */}
          {/* <!-- liked --> */}
          <div
            className="collapse ms-5"
            id="liked"
            data-bs-parent="#detail-profile"
          >
            {/* <!-- list1 --> */}
            <div className="card mb-5 border-0">
              <div className="row g-0">
                {/* <!-- head --> */}
                <div className="col-md-7">
                  <img
                    src="/src/assets/pic3.png"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </div>
                {/* <!-- body --> */}
                <div className="col-md-5 d-flex flex-column justify-content-between">
                  <div className="card-body pe-0">
                    <h4 className="card-title">
                      Bomb
                      <br />
                      Chicken
                    </h4>
                    <h5 className="card-text">
                      Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                      Soy Sauce, Black Sesame Seed
                    </h5>
                    <a
                      className="btn btn-warning col-12"
                      href="/html/menu/detailMenu.html"
                      role="button"
                    >
                      10 Likes - 12 Comments
                    </a>
                    <div className="d-flex mt-3 justify-content-between">
                      <button type="button" className="btn btn-danger">
                        Delete Menu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- list1 --> */}
            <div className="card mb-5 border-0">
              <div className="row g-0">
                {/* <!-- head --> */}
                <div className="col-md-7">
                  <img
                    src="/src/assets/pic3.png"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </div>
                {/* <!-- body --> */}
                <div className="col-md-5 d-flex flex-column justify-content-between">
                  <div className="card-body pe-0">
                    <h4 className="card-title">
                      Bomb
                      <br />
                      Chicken
                    </h4>
                    <h5 className="card-text">
                      Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                      Soy Sauce, Black Sesame Seed
                    </h5>
                    <a
                      className="btn btn-warning col-12"
                      href="/html/menu/detailMenu.html"
                      role="button"
                    >
                      10 Likes - 12 Comments
                    </a>
                    <div className="d-flex mt-3 justify-content-between">
                      <button type="button" className="btn btn-danger">
                        Delete Menu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- list1 --> */}
            <div className="card mb-5 border-0">
              <div className="row g-0">
                {/* <!-- head --> */}
                <div className="col-md-7">
                  <img
                    src="/src/assets/pic3.png"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </div>
                {/* <!-- body --> */}
                <div className="col-md-5 d-flex flex-column justify-content-between">
                  <div className="card-body pe-0">
                    <h4 className="card-title">
                      Bomb
                      <br />
                      Chicken
                    </h4>
                    <h5 className="card-text">
                      Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                      Soy Sauce, Black Sesame Seed
                    </h5>
                    <a
                      className="btn btn-warning col-12"
                      href="/html/menu/detailMenu.html"
                      role="button"
                    >
                      10 Likes - 12 Comments
                    </a>
                    <div className="d-flex mt-3 justify-content-between">
                      <button type="button" className="btn btn-danger">
                        Delete Menu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- list1 --> */}
            <div className="card mb-5 border-0">
              <div className="row g-0">
                {/* <!-- head --> */}
                <div className="col-md-7">
                  <img
                    src="/src/assets/pic3.png"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </div>
                {/* <!-- body --> */}
                <div className="col-md-5 d-flex flex-column justify-content-between">
                  <div className="card-body pe-0">
                    <h4 className="card-title">
                      Bomb
                      <br />
                      Chicken
                    </h4>
                    <h5 className="card-text">
                      Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                      Soy Sauce, Black Sesame Seed
                    </h5>
                    <a
                      className="btn btn-warning col-12"
                      href="/html/menu/detailMenu.html"
                      role="button"
                    >
                      10 Likes - 12 Comments
                    </a>
                    <div className="d-flex mt-3 justify-content-between">
                      <button type="button" className="btn btn-danger">
                        Delete Menu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid py-5 text-center">a</div>
          </div>
          {/* <!-- end of liked --> */}
        </div>
      </main>
      {/* <!-- TODO: END OF LISTBAR --> */}
      <Footer></Footer>
    </>
  );
}
