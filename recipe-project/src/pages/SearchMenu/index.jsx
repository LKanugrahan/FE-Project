import Nav from "../../ComponentPage/Nav";
import Footer from "../../ComponentPage/Footer";
import { Link } from "react-router-dom";
import { GetData } from "../../System/Logic";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkpvaG4gU21pdGgiLCJlbWFpbCI6ImpvaG4uc21pdGhAZXhhbXBsZS5jb20iLCJjcmVhdGVkX2F0IjoiMjAyMy0wNy0yNVQwMToxNDo1Mi40NDlaIiwiaWF0IjoxNjkxNTE5NjI2fQ.ubsnfR2k-7TEcy8zidwNiyOiyBAAKr7yG9f-MkIy2ZU";

export default function SearchMenu() {
  const { search, Searching, result, handleKeyDown, page, Increase, Decrease} = GetData();

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
            <form>
              <div className="mb-3 col-5 d-flex">
                <input
                  type="text"
                  className="form-control bg-body-secondary"
                  placeholder="Search Menu"
                  aria-label="Search Menu"
                  aria-describedby="addon-wrapping"
                  value={search}
                  onChange={Searching}
                  onKeyDown={handleKeyDown}
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
          </ul>
          {/* <!-- new recipes --> */}
          <div
            className="collapse ms-5"
            id="newRecipe"
            data-bs-parent="#search-menu"
          >
            {result.map((item, index) => {
              return (
                <div key={item.id} className="card mb-5 border-0">
                  <div className="row g-0">
                    <div className="col-md-7">
                      <img
                        src={item.recipe_image}
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
                          to={`/detail/${item.id}`}
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
                <button onClick={Decrease} disabled={page === 1}>
                  Sebelumnya
                </button>
                <span>Halaman {page}</span>
                <button
                  onClick={Increase}
                  disabled={page === 0}
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
            {result.map((item, index) => {
              return (
                <div key={item.id} className="card mb-5 border-0">
                  <div className="row g-0">
                    <div className="col-md-7">
                      <img
                        src={item.recipe_image}
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
          </div>
          {/* <!-- end of popular --> */}
          {/* <!-- vegetarian --> */}
          <div
            className="collapse ms-5"
            id="vegetarian"
            data-bs-parent="#search-menu"
          >
            {result.map((item, index) => {
              return (
                <div key={item.id} className="card mb-5 border-0">
                  <div className="row g-0">
                    <div className="col-md-7">
                      <img
                        src={item.recipe_image}
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
          </div>
          {/* <!-- end of vegetarian --> */}
        </div>
      </main>
      {/* <!-- TODO: END OF LISTBAR --> */}
      <Footer></Footer>
    </>
  );
}
