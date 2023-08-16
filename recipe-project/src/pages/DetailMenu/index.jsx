import Nav from "/src/ComponentPage/Nav";
import Footer from "/src/ComponentPage/Footer";
import "./style.css";
import { GetDataId } from "../../System/Logic";

export default function DetailMenu() {
  const { resultId } = GetDataId();
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
                    src="/src/assets/pic-profile.png"
                    className="img-fluid rounded-circle"
                    alt="..."
                  />
                </div>
                <div className="col-7">
                  <div className="card-body">
                    <h5 className="card-title">Ayudia</h5>
                    <p className="card-text">10 Recipes</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end profile card --> */}
            <p className="align-self-center m-0 text-end">
              12 februari 2013 <br />
              20 likes - 2 Comments
            </p>
          </div>
          {resultId.map((item, index) => {
            return (
              <div id="recipe" key={item.id}>
                <h1 className="text-center p-5">{item.recipe_name}</h1>
                <div className="container-fluid col-9 mx-auto">
                  <img
                    className="img-fluid"
                    src={item.recipe_image}
                    alt={item.recipe_name}
                  />
                </div>
                <h1 className="ms-5 mt-5">Ingredients</h1>
                <p className="ms-5">{item.recipe_ingredients}</p>
              </div>
            );
          })}
          <div id="line"></div>
          {/* <!-- profile card --> */}
          <div className="container-fluid d-flex my-4">
            <div className="card border-0">
              <div className="row g-0 d-flex justify-content-between">
                <div className="col-4 align-self-center ms-2">
                  <img
                    src="/src/assets/pic-profile.png"
                    className="img-fluid rounded-circle"
                    alt="..."
                  />
                </div>
                <div className="col-7">
                  <div className="card-body">
                    <h5 className="card-title">Karen</h5>
                    <p className="card-text">20 Recipes</p>
                  </div>
                </div>
                <div id="box"></div>
              </div>
            </div>
            <p className="align-self-center m-0 ms-3">
              Wow, I just made this and it was delicious! Thanks for sharing!
            </p>
          </div>
          {/* <!-- end profile card -->
        <!-- profile card --> */}
          <div className="container-fluid d-flex my-4">
            <div className="card border-0">
              <div className="row g-0 d-flex justify-content-between">
                <div className="col-4 align-self-center ms-2">
                  <img
                    src="/src/assets/pic-profile.png"
                    className="img-fluid rounded-circle"
                    alt="..."
                  />
                </div>
                <div className="col-7">
                  <div className="card-body">
                    <h5 className="card-title">Ariel</h5>
                    <p className="card-text">20 Recipes</p>
                  </div>
                </div>
                <div id="box"></div>
              </div>
            </div>
            <p className="align-self-center m-0 ms-3">
              So simple and delicious!
            </p>
          </div>
          {/* <!-- end profile card --> */}
          <div className="mb-5"></div>
          <form className="col-7" action="" method="post">
            <div id="comment" className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your comment here!"
              />
            </div>
            <input
              type="submit"
              value="Send a comment"
              className="btn btn-danger text-white col-6"
            />
          </form>
        </div>
      </main>
      {/* <!-- TODO: END OF LISTBAR --> */}
      <Footer></Footer>
    </>
  );
}
