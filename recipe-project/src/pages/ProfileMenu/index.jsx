import Nav from "../../ComponentPage/Nav"
import Footer from "../../ComponentPage/Footer"
import "./style.css"
export default function ProfileMenu() {
    return(
        <>
        <Nav></Nav>
            {/* <!-- TODO: LISTBAR --> */}
    <main id="detail-profile">
      <div className="container">
        <div className="container d-flex justify-content-between mb-5 mt-5">
          {/* <!-- profile card --> */}
          <div className="card border-0">
            <div className="row g-0 d-flex justify-content-between">
              <div
                id="box"
              ></div>
              <div className="col-4 align-self-center">
                <img
                  src="/src/assets/pic-profile.png"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
              </div>
              <div className="col-7">
                <div className="card-body p-1">
                  <h5 className="card-title">Ayudia</h5>
                  <p className="card-text">10 Recipes</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end profile card --> */}
          <p className="align-self-center m-0">12 februari 2013</p>
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
              >Recipes</a
            >
          </li>
          <li className="nav-item ms-5 me-5">
            <a
              className="navbar-brand fs-2"
              data-bs-toggle="collapse"
              href="#bookmarked"
              role="button"
              aria-expanded="false"
              aria-controls="bookmarked"
              >Bookmarked</a
            >
          </li>
          <li className="nav-item ms-5 me-5">
            <a
              className="navbar-brand fs-2"
              data-bs-toggle="collapse"
              href="#liked"
              role="button"
              aria-expanded="false"
              aria-controls="liked"
              >Liked</a
            >
          </li>
        </ul>
        <div id="lines"
        className="container-fluid mb-5 ms-5 col-7"
        ></div>
        {/* <!-- recipes --> */}
        <div
          className="collapse ms-5"
          id="recipes"
          data-bs-parent="#detail-profile"
        >
          {/* <!-- list1 --> */}
          <div className="card mb-5 border-0">
            <div className="row g-0">
              {/* <!-- head --> */}
              <div className="col-md-7">
                <img
                  src="/src/assets/pic1.png"
                  className="img-fluid rounded"
                  alt="..."
                />
              </div>
              {/* <!-- body --> */}
              <div className="col-md-5 d-flex flex-column justify-content-between">
                <div className="card-body pe-0">
                  <h4 className="card-title">Bomb<br />Chicken</h4>
                  <h5 className="card-text">
                    Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                    Soy Sauce, Black Sesame Seed
                  </h5>
                  <a
                    className="btn btn-warning col-12"
                    href="/html/menu/detailMenu.html"
                    role="button"
                    >10 Likes - 12 Comments</a
                  >
                  <div className="d-flex mt-3 justify-content-between">
                    <button type="button" className="btn btn-primary">
                      Edit Menu
                    </button>
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
                  src="/src/assets/pic1.png"
                  className="img-fluid rounded"
                  alt="..."
                />
              </div>
              {/* <!-- body --> */}
              <div className="col-md-5 d-flex flex-column justify-content-between">
                <div className="card-body pe-0">
                  <h4 className="card-title">Bomb<br />Chicken</h4>
                  <h5 className="card-text">
                    Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                    Soy Sauce, Black Sesame Seed
                  </h5>
                  <a
                    className="btn btn-warning col-12"
                    href="/html/menu/detailMenu.html"
                    role="button"
                    >10 Likes - 12 Comments</a
                  >
                  <div className="d-flex mt-3 justify-content-between">
                    <button type="button" className="btn btn-primary">
                      Edit Menu
                    </button>
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
                  src="/src/assets/pic1.png"
                  className="img-fluid rounded"
                  alt="..."
                />
              </div>
              {/* <!-- body --> */}
              <div className="col-md-5 d-flex flex-column justify-content-between">
                <div className="card-body pe-0">
                  <h4 className="card-title">Bomb<br />Chicken</h4>
                  <h5 className="card-text">
                    Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                    Soy Sauce, Black Sesame Seed
                  </h5>
                  <a
                    className="btn btn-warning col-12"
                    href="/html/menu/detailMenu.html"
                    role="button"
                    >10 Likes - 12 Comments</a
                  >
                  <div className="d-flex mt-3 justify-content-between">
                    <button type="button" className="btn btn-primary">
                      Edit Menu
                    </button>
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
                  src="/src/assets/pic1.png"
                  className="img-fluid rounded"
                  alt="..."
                />
              </div>
              {/* <!-- body --> */}
              <div className="col-md-5 d-flex flex-column justify-content-between">
                <div className="card-body pe-0">
                  <h4 className="card-title">Bomb<br />Chicken</h4>
                  <h5 className="card-text">
                    Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                    Soy Sauce, Black Sesame Seed
                  </h5>
                  <a
                    className="btn btn-warning col-12"
                    href="/html/menu/detailMenu.html"
                    role="button"
                    >10 Likes - 12 Comments</a
                  >
                  <div className="d-flex mt-3 justify-content-between">
                    <button type="button" className="btn btn-primary">
                      Edit Menu
                    </button>
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
                  <h4 className="card-title">Bomb<br />Chicken</h4>
                  <h5 className="card-text">
                    Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                    Soy Sauce, Black Sesame Seed
                  </h5>
                  <a
                    className="btn btn-warning col-12"
                    href="/html/menu/detailMenu.html"
                    role="button"
                    >10 Likes - 12 Comments</a
                  >
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
                  <h4 className="card-title">Bomb<br />Chicken</h4>
                  <h5 className="card-text">
                    Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                    Soy Sauce, Black Sesame Seed
                  </h5>
                  <a
                    className="btn btn-warning col-12"
                    href="/html/menu/detailMenu.html"
                    role="button"
                    >10 Likes - 12 Comments</a
                  >
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
                  <h4 className="card-title">Bomb<br />Chicken</h4>
                  <h5 className="card-text">
                    Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                    Soy Sauce, Black Sesame Seed
                  </h5>
                  <a
                    className="btn btn-warning col-12"
                    href="/html/menu/detailMenu.html"
                    role="button"
                    >10 Likes - 12 Comments</a
                  >
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
                  <h4 className="card-title">Bomb<br />Chicken</h4>
                  <h5 className="card-text">
                    Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                    Soy Sauce, Black Sesame Seed
                  </h5>
                  <a
                    className="btn btn-warning col-12"
                    href="/html/menu/detailMenu.html"
                    role="button"
                    >10 Likes - 12 Comments</a
                  >
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
        <div className="collapse ms-5" id="liked" data-bs-parent="#detail-profile">
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
                  <h4 className="card-title">Bomb<br />Chicken</h4>
                  <h5 className="card-text">
                    Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                    Soy Sauce, Black Sesame Seed
                  </h5>
                  <a
                    className="btn btn-warning col-12"
                    href="/html/menu/detailMenu.html"
                    role="button"
                    >10 Likes - 12 Comments</a
                  >
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
                  <h4 className="card-title">Bomb<br />Chicken</h4>
                  <h5 className="card-text">
                    Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                    Soy Sauce, Black Sesame Seed
                  </h5>
                  <a
                    className="btn btn-warning col-12"
                    href="/html/menu/detailMenu.html"
                    role="button"
                    >10 Likes - 12 Comments</a
                  >
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
                  <h4 className="card-title">Bomb<br />Chicken</h4>
                  <h5 className="card-text">
                    Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                    Soy Sauce, Black Sesame Seed
                  </h5>
                  <a
                    className="btn btn-warning col-12"
                    href="/html/menu/detailMenu.html"
                    role="button"
                    >10 Likes - 12 Comments</a
                  >
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
                  <h4 className="card-title">Bomb<br />Chicken</h4>
                  <h5 className="card-text">
                    Ingredients: Chicken, Dumpling Wrap, Garlic, Spring Onion,
                    Soy Sauce, Black Sesame Seed
                  </h5>
                  <a
                    className="btn btn-warning col-12"
                    href="/html/menu/detailMenu.html"
                    role="button"
                    >10 Likes - 12 Comments</a
                  >
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
    )
}