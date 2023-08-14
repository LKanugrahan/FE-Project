import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../ComponentPage/Nav";
import Footer from "../../ComponentPage/Footer";
import { Link } from "react-router-dom";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkpvaG4gU21pdGgiLCJlbWFpbCI6ImpvaG4uc21pdGhAZXhhbXBsZS5jb20iLCJjcmVhdGVkX2F0IjoiMjAyMy0wNy0yNVQwMToxNDo1Mi40NDlaIiwiaWF0IjoxNjkxNTE5NjI2fQ.ubsnfR2k-7TEcy8zidwNiyOiyBAAKr7yG9f-MkIy2ZU";

export default function SearchMenu() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const perPage = 4;

    axios
      .get("http://localhost:3000/recipe/detail/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page: page,
          limit: perPage,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data.data);
        setPage(page);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Nav></Nav>
      {/* <!-- TODO: LISTBAR --> */}
      <main id="search-menu">
        <div className="container">
          <div className="container p-0 ms-5">
            <h1>
              Discover Recipe
              <br />& Delicious Food
            </h1>
            <form action="" method="post">
              <div className="mb-3 col-5 d-flex">
                <input
                  type="text"
                  className="form-control me-3"
                  placeholder="Search Menu"
                />
                <input
                  type="submit"
                  className="btn btn-warning text-white col-3"
                  value="Search"
                />
              </div>
            </form>
          </div>
          <ul className="nav mb-5 ms-5">
            <li className="nav-item">
              <a
                className="btn btn-warning text-white me-3"
                data-bs-toggle="collapse"
                href="#newRecipe"
                role="button"
                aria-expanded="false"
                aria-controls="newRecipe"
              >
                New
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-warning text-white me-3"
                data-bs-toggle="collapse"
                href="#popular"
                role="button"
                aria-expanded="false"
                aria-controls="popular"
              >
                Popular
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-success text-white me-3"
                data-bs-toggle="collapse"
                href="#vegetarian"
                role="button"
                aria-expanded="false"
                aria-controls="vegetarian"
              >
                Vegetarian
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-success text-white me-3"
                data-bs-toggle="collapse"
                href="#breakfast"
                role="button"
                aria-expanded="false"
                aria-controls="breakfast"
              >
                Breakfast
              </a>
            </li>
          </ul>
          {/* <!-- new recipes --> */}
          <div
            className="collapse ms-5"
            id="newRecipe"
            data-bs-parent="#search-menu"
          >
            {data.map((item, index) => {
              return (
                <div key={item.id} className="card mb-5 border-0">
                  <div className="row g-0">
                    <div className="col-md-7">
                      <img
                        src="/src/assets/pic1.png"
                        className="img-fluid rounded"
                        alt={item.recipe_name}
                      />
                    </div>
                    <div className="col-md-5 d-flex flex-column justify-content-between">
                      <div className="card-body">
                        <h4 className="card-title">{item.recipe_name}</h4>
                        <h5 className="card-text">
                          Ingredients: {item.recipe_ingredients}
                        </h5>
                        <Link
                          to="/detail"
                          className="btn btn-warning col-12"
                          role="button"
                        >
                          10 Likes - 12 Comments
                        </Link>
                        <div className="d-flex mt-3">
                          <img src="/src/assets/Ellipse 127.png" alt="" />
                          <p className="align-self-center m-0 ms-3">Karen</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="container-fluid py-5 text-center">
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
            </div>
          </div>
          {/* <!-- end of new recipes --> */}
          {/* <!-- popular --> */}
          <div
            className="collapse ms-5"
            id="popular"
            data-bs-parent="#search-menu"
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
                  <div className="card-body">
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
                    <div className="d-flex mt-3">
                      <img src="/src/assets/Ellipse 127.png" alt="" />
                      <p className="align-self-center m-0 ms-3">Karen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid py-5 text-center">a</div>
          </div>
          {/* <!-- end of popular --> */}
          {/* <!-- vegetarian --> */}
          <div
            className="collapse ms-5"
            id="vegetarian"
            data-bs-parent="#search-menu"
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
                  <div className="card-body">
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
                    <div className="d-flex mt-3">
                      <img src="/src/assets/Ellipse 127.png" alt="" />
                      <p className="align-self-center m-0 ms-3">Karen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid py-5 text-center">a</div>
          </div>
          {/* <!-- end of vegetarian --> */}
          {/* <!-- breakfast --> */}
          <div
            className="collapse ms-5"
            id="breakfast"
            data-bs-parent="#search-menu"
          >
            {/* <!-- list1 --> */}
            <div className="card mb-5 border-0">
              <div className="row g-0">
                {/* <!-- head --> */}
                <div className="col-md-7">
                  <img
                    src="/src/assets/pic4.png"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </div>
                {/* <!-- body --> */}
                <div className="col-md-5 d-flex flex-column justify-content-between">
                  <div className="card-body">
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
                    <div className="d-flex mt-3">
                      <img src="/src/assets/Ellipse 127.png" alt="" />
                      <p className="align-self-center m-0 ms-3">Karen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid py-5 text-center">a</div>
          </div>
          {/* <!-- end of breakfast --> */}
        </div>
      </main>
      {/* <!-- TODO: END OF LISTBAR --> */}
      <Footer></Footer>
    </>
  );
}
