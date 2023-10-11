import Nav from "../../ComponentPage/Nav";
import Footer from "../../ComponentPage/Footer";
import "./style.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMenu } from "../../redux/actions/menu";
import { category } from "../../redux/actions/category";

export default function AddMenu() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    recipe_name: "",
    recipe_ingredients: "",
    category_id: "",
    recipe_image: "",
  });
  const [imageData, setImageData] = useState();

  const handlerPost = (event) => {
    event.preventDefault();
    let bodyFormData = new FormData();
    bodyFormData.append("recipe_name", inputData.recipe_name);
    bodyFormData.append("recipe_ingredients", inputData.recipe_ingredients);
    bodyFormData.append("category_id", inputData.category_id);
    bodyFormData.append("recipe_image", imageData);

    console.log(bodyFormData);
    dispatch(addMenu(bodyFormData,navigate))
  };

  const changePostData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  };

  const changeImagePost = (e) => {
    setImageData(e.target.files[0]);
    e.target.files[0] &&
      setInputData({
        ...inputData,
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
        <form onSubmit={handlerPost} className="col-8 d-flex flex-column">
          <div
            id="inputImage"
            className="form-group mb-4 bg-light col-12 border"
          >
            <input
              type="file"
              name="recipe_image"
              onChange={changeImagePost}
              className="form-control-file p-5"
              accept=".jpg, .png"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="form-control bg-light"
              name="recipe_name"
              value={inputData.recipe_name}
              onChange={changePostData}
              placeholder="Title"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              className="form-control py-5 bg-light"
              name="recipe_ingredients"
              value={inputData.recipe_ingredients}
              onChange={changePostData}
              placeholder="Ingredients"
              required
            ></textarea>
          </div>
          <div className="col-3 mb-4">
            <select
              className="form-select form-select-sm mb-3 bg-light"
              name="category_id"
              value={inputData.category_id}
              onChange={changePostData}
              aria-label="Default select example"
              required
            >
              <option hidden label="Category">
                Category
              </option>
              {categoryData.map((item,index) => (
                <option key={item.id} value={item.id}>
                  {item.category}
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
