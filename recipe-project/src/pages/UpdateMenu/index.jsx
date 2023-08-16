import Nav from "../../ComponentPage/Nav";
import Footer from "../../ComponentPage/Footer";
import "./style.css";
import { GetCategory, UpdateData } from "../../System/Logic";
export default function UpdateMenu() {
  const {     handlerUpdate,
    changeUpdateData,
    changeImageUpdate,
    updateData, } =
    UpdateData();
  const { category } = GetCategory();
  return (
    <>
      <Nav></Nav>
      {/* <!-- TODO: LISTBAR --> */}
      <main className="d-flex align-items-center justify-content-center">
        <form onSubmit={handlerUpdate} className="col-8 d-flex flex-column">
          <div className="form-group mb-4">
            <input
              id="inputImage"
              type="file"
              name="recipe_image"
              onChange={changeImageUpdate}
              className="form-control-file p-5 bg-light col-12 border"
              accept=".jpg, .png"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="form-control bg-light"
              name="recipe_name"
              value={updateData.recipe_name}
              onChange={changeUpdateData}
              placeholder="Title"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="form-control py-5 bg-light"
              name="recipe_ingredients"
              value={updateData.recipe_ingredients}
              onChange={changeUpdateData}
              placeholder="Ingredients"
            ></textarea>
          </div>
          <div className="col-3 mb-4">
            <select
              className="form-select form-select-sm mb-3 bg-light"
              name="category_id"
              value={updateData.category_id}
              onChange={changeUpdateData}
              aria-label="Default select example"
            >
              {/* <option selected hidden label="Category">
              Category
            </option> */}
              {category.map((ctr) => (
                <option key={ctr.id} value={ctr.id}>
                  {ctr.category}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-warning text-white col-5 align-self-center mt-5"
          >
            Post
          </button>
        </form>
      </main>
      {/* <!-- TODO: END OF LISTBAR --> */}
      <Footer></Footer>
    </>
  );
}
