import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="top-bar">
        <h6 className="text-center">
          THIS PRODUCT CONTAINS NICOTINE.
          <span>NICOTINE IS AN ADDICTIVE CHEMICAL.</span>
        </h6>
      </div>

      <header>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "#7b0e0e" }}
        >
          <div className="container">
            <Link href="/" className="navbar-brand">
              BEER GOGGLES DISTRO
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <form
                className="d-flex mx-auto"
              >
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search for Products..."
                  aria-label="Search"
                />
                <button className="btn btn-warning ms-2" type="submit">
                  Search
                </button>
              </form>
              <ul className="navbar-nav ms-3">
                <li className="nav-item">
                  <Link href="#" className="nav-link">
                    <i className="fas fa-user"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link">
                    <i className="fas fa-search"></i>
                  </Link>
                </li>
                <li className="nav-item position-relative">
                  <Link href="#" className="nav-link">
                    <i className="fas fa-shopping-cart"></i>
                    <span>0</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="bg-light py-2">
          <div className="container">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link href="#" className="nav-link text-dark">
                  CLOSE
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link text-dark">
                  CLEARANCE
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link text-dark">
                  NEW ARRIVAL
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link text-dark">
                  DISPOSABLES
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link text-dark">
                  E-LIQUID
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link text-dark">
                  HARDWARE DEVICES
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link text-dark">
                  VAPORIZOR DEVICES
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link text-dark">
                  HOOKAH
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link text-dark">
                  GLASS
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link text-dark">
                  TORCH & LIGHTERS
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link text-dark">
                  DISPLAY
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
