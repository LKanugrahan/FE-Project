export default function Footer() {
    return(
      <>
          {/* <!-- TODO: FOOTER --> */}
      <footer className="p-5 bg-warning">
        <div className="container-fluid text-center bg-warning">
          <h1 className="mb-3 pt-5">Eat, Cook, Repeat</h1>
          <p className="mb-5 pb-5">Share Your Best Recipe By Uploading Here !</p>
          <nav className="navbar">
            <div className="container-fluid d-flex justify-content-center">
              <ul className="nav">
                <li className="nav-item">
                  <a className="navbar-brand" href="#">Product</a>
                </li>
                <li className="nav-item">
                  <a className="navbar-brand" href="#">Company</a>
                </li>
                <li className="nav-item">
                  <a className="navbar-brand" href="#">Learn More</a>
                </li>
                <li className="nav-item">
                  <a className="navbar-brand" href="#">Get In Touch</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </footer>
      {/* <!-- TODO: END OF FOOTER --> */}
      </>
    )
  }