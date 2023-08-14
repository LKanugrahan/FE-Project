import Nav from "../../ComponentPage/Nav"
import Footer from "../../ComponentPage/Footer"
export default function AddMenu() {
    return(
        <>
        <Nav></Nav>
            {/* <!-- TODO: LISTBAR --> */}
    <main className="d-flex align-items-center justify-content-center" style="height: 801px;">
      <form className="col-8 d-flex flex-column" action="" method="post">
        <div className="form-group mb-4">
          <input
          style="height: 336px;"
            type="file"
            className="form-control-file p-5 bg-light col-12 border"
            accept=".jpg, .png"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="form-control bg-light"
            placeholder="Title"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            className="form-control py-5 bg-light"
            placeholder="Ingredients"
            required
          ></textarea>
        </div>
        <div className="col-3 mb-4">
            <select
            className="form-select form-select-sm mb-3 bg-light"
            aria-label="Default select example"
            required
          >
            <option selected hidden label="Category">
              Category
            </option>
            <option value="1">Produk A</option>
            <option value="2">Produk B</option>
            <option value="3">Produk C</option>
          </select>
        </div>

        <button type="submit" className="btn btn-warning text-white col-5 align-self-center mt-5">
          Post
        </button>
      </form>
    </main>
    {/* <!-- TODO: END OF LISTBAR --> */}
    <Footer></Footer>
        </>
    )
}