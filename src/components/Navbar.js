import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [solid, setSolid] = useState("bg-transparet");

  const handleLogin = () => {
    window.location.href = "/login";
  };

  const handleLogout = () => {
    localStorage.removeItem("id-customer");
    localStorage.removeItem("customer");
    window.location.href = "/login";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSolid("bg-dark");
      } else {
        setSolid("bg-transparent");
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark ${solid} sticky-top`}
      >
        <div className="container-fluid px-5">
          <a className="navbar-brand fw-semibold me-0" href="/">
            MotaMorph
          </a>
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
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav p-2 w-100 align-items-center">
              <div className="d-flex mx-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link p-3">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/order" className="nav-link p-3">
                    Order
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/transaction" className="nav-link p-3">
                    Transaction
                  </NavLink>
                </li>
              </div>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    size="xl"
                    className="text-light"
                  />
                </a>
                <ul className="dropdown-menu dropdown-menu-dark bg-black ">
                  <li>
                    <button
                      className="dropdown-item text-light"
                      onClick={
                        localStorage.getItem("id-customer") === null
                          ? handleLogin
                          : handleLogout
                      }
                    >
                      {localStorage.getItem("id-customer") === null
                        ? "Login"
                        : "logout"}
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* <FontAwesomeIcon
            icon={faCircleUser}
            size="xl"
            className="text-light"
          /> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
