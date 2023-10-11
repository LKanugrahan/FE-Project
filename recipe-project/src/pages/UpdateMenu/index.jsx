import Nav from "../../ComponentPage/Nav";
import Footer from "../../ComponentPage/Footer";
import "./style.css";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateMenu } from "../../redux/actions/menu";
import { useEffect, useState } from "react";
import { category } from "../../redux/actions/category";

export default function UpdateMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [imageUpdate, setImageUpdate] = useState();
  const [updateData, setUpdateData] = useState({
    recipe_name: "",
    recipe_desc: "",
    recipe_ingredients: "",
    category_id: "",
    recipe_image: "",
  });
  const handlerUpdate = (event) => {
    event.preventDefault();
    let bodyFormData = new FormData();
    bodyFormData.append("recipe_name", updateData.recipe_name);
    bodyFormData.append("recipe_ingredients", updateData.recipe_ingredients);
    bodyFormData.append("category_id", updateData.category_id);
    bodyFormData.append("recipe_image", imageUpdate);

    console.log(bodyFormData);
    dispatch(updateMenu(id, bodyFormData, navigate));
  };

  const changeUpdateData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    console.log(updateData);
  };
  const changeImageUpdate = (e) => {
    setImageUpdate(e.target.files[0]);
    e.target.files[0] &&
      setUpdateData({
        ...updateData,
        recipe_image: URL.createObjectURL(e.target.files[0]),
      });
    console.log(e.target.files);
  };

  const { categoryData } = useSelector((state) => state.categoryReducer);

  useEffect(() => {
    dispatch(category());
  }, []);
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
              <option hidden label="Category">
                Category
              </option>
              {categoryData.map((ctr) => (
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
