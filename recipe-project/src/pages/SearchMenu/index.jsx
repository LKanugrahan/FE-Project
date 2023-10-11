import Nav from "../../ComponentPage/Nav";
import Footer from "../../ComponentPage/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchMenu } from "../../redux/actions/menu";
import { category } from "../../redux/actions/category";

export default function SearchMenu() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [selectedCategory, setCategory] = useState();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [count, setCount] = useState(1);
  const { data } = useSelector((state) => state.searchMenuReducer);
  const { categoryData } = useSelector((state) => state.categoryReducer);

  useEffect(() => {
    dispatch(category());
  }, []);

  const selectedData = () => {
    if (data) {
    return data
      .filter((item) => item.recipe_name.includes(search))
      .filter((item) => !selectedCategory || item.category == selectedCategory);
  } else {
    return [];
  }
  };

  console.log(selectedData());
  const totalPage = () => {
    const filteredData = selectedData();
    if(filteredData.length === 0) {
      return 1
    } else {
      return Math.ceil(filteredData.length / 4);
    }
  };

  console.log(totalPage())

  const increase = () => {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    setCount((count) => count - 1);
  };
  const startIndex = () => {
    return 4 * (count - 1);
  };

  const endIndex = () => {
    return 4 * count;
  };

  const Searching = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(searchMenu());
      setIsCollapsed(true);
    }
  };

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
          <ul
            className="nav mb-5 ms-5 overflow-x-auto flex-nowrap"
            style={{ width: "550px" }}
          >
            <li className="nav-item">
              <a
                className="btn btn-warning text-white me-3"
                style={{ width: "120px" }}
                data-bs-toggle="collapse"
                href="#All"
                role="button"
                aria-expanded="false"
                aria-controls="All"
                onClick={() => setCategory()}
              >
                All
              </a>
            </li>
            {categoryData &&
              categoryData.map((item, index) => {
                return (
                  <li className="nav-item" key={item.id}>
                    <a
                      className="btn btn-warning text-white me-3"
                      style={{ width: "120px" }}
                      data-bs-toggle="collapse"
                      href={`#${item.categoy}`}
                      role="button"
                      aria-expanded="false"
                      aria-controls={item.category}
                      onClick={() => setCategory(item.category)}
                    >
                      {item.category}
                    </a>
                  </li>
                );
              })}
          </ul>
          {/* <!-- new recipes --> */}
          <div
            className={`collapse ms-5 ${isCollapsed ? "show" : ""}`}
            id="All"
            data-bs-parent="#search-menu"
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
            {selectedData() &&
              selectedData()
                .map((item, index) => {
                  return (
                    <div key={item.id} className="card mb-5 border-0 col-7">
                      <div className="row g-0">
                        <div className="col-md-7">
                          <img
                            style={{ height: 350, width: 350 }}
                            src={item.recipe_image}
                            className="img-fluid rounded object-fit-cover"
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
                              <p className="align-self-center m-0 ms-3">
                                {item.name}
                              </p>
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
          </div>
          {/* <!-- end of new recipes --> */}
        </div>
      </main>
      {/* <!-- TODO: END OF LISTBAR --> */}
      <Footer></Footer>
    </>
  );
}
