import { GetData, PostData, UpdateData } from "../Logic/index";

export function SearchLanding() {
  const { search, Searching, result, handleKeyDown, deleteData } = GetData();
  const { handlerPost, changePostData, changeImagePost, inputData } =
    PostData();

  return (
    <>
      <input
        type="text"
        className="form-control bg-body-secondary"
        placeholder="Search Restaurant, Food"
        aria-label="Search Restaurant, Food"
        aria-describedby="addon-wrapping"
        value={search}
        onChange={Searching}
        onKeyDown={handleKeyDown}
      />
      <div>
        <h2>Search Results:</h2>
        <ul>
          {result.map((item, index) => (
            <div key={item.id}>
              <li>{item.recipe_name}</li>
              <li>{item.users_id}</li>
              <button
                className="btn btn-danger"
                onClick={() => deleteData(item.id)}
              >
                delete
              </button>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <h1>Input Menu</h1>
        <form onSubmit={handlerPost} className="row col-6 gap-2">
          <input
            type="text"
            name="recipe_name"
            value={inputData.recipe_name}
            className="form-control col-4"
            onChange={changePostData}
            placeholder="title"
          />
          <input
            type="text"
            name="recipe_ingredients"
            value={inputData.recipe_ingredients}
            className="form-control col-4"
            onChange={changePostData}
            placeholder="ingredients"
          />
          <input
            type="file"
            name="recipe_image"
            className="form-control col-4"
            onChange={changeImagePost}
            placeholder="photo"
          />
          <button type="submit" className="btn btn-warning">
            Submit Menu
          </button>
        </form>
      </div>
    </>
  );
}

export const SearchUpdate = () => {
  const { handlerUpdate, changeUpdateData, changeImageUpdate, updateData } =
    UpdateData();

  return (
    <>
      <div className="container">
        <h1>Input Menu</h1>
        <form onSubmit={handlerUpdate} className="row col-6 gap-2">
          <input
            type="text"
            name="recipe_name"
            value={updateData.recipe_name}
            className="form-control col-4"
            onChange={changeUpdateData}
            placeholder="recipe_name"
          />
          <input
            type="text"
            name="recipe_ingredients"
            value={updateData.recipe_ingredients}
            className="form-control col-4"
            onChange={changeUpdateData}
            placeholder="recipe_ingredients"
          />
          <input
            type="file"
            name="recipe_image"
            className="form-control col-4"
            onChange={changeImageUpdate}
            placeholder="recipe_image"
          />

          <img src={updateData.recipe_image} width={200} />

          <button type="submit" className="btn btn-warning">
            Update Menu
          </button>
        </form>
      </div>
    </>
  );
};
