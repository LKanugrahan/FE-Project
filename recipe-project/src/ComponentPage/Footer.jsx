import { Link } from "react-router-dom"

export default function Footer() {
    return(
      <>
          {/* <!-- TODO: FOOTER --> */}
          <div id="footer">
        <h2>Eat, Cook, Repeat</h2>
        <p>Share your best recipe by uploading here !</p>
        <div className="navbar-footer">
          <ul>
            <li className="margin">
              <Link to="">product</Link>
            </li>
            <li className="margin">
              <Link to="">company</Link>
            </li>
            <li className="margin">
              <Link to="">learn more</Link>
            </li>
            <li>
              <Link to="">get in touch</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- TODO: END OF FOOTER --> */}
      </>
    )
  }