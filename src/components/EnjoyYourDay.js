import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import coffee from "../assets/img-coffee.png";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function EnjoyYourDay() {
  return (
    <>
      <div className="container mt-5 vw-100">
        <div className="row align-items-center">
          <div className="col px-0">
            <h1 className="text-light fw-bold" style={{ fontSize: "3.4rem" }}>
              Enjoy Your <span className="text-cream">Day</span> With
              <br />
              <span className="text-cream">MotaMorph</span>
            </h1>
            <p
              className="text-light-secondary lh-lg mb-5"
              style={{ fontSize: "0.98rem" }}
            >
              Start your daily with us
              <br />
              Our best blend is made to boost your productivity and build your
              mood.
            </p>
            <NavLink
              to="/order"
              className="btn btn-cream px-4 py-2 rounded-pill"
            >
              Explore Our Products
              <span className="ms-3">
                <FontAwesomeIcon icon={faArrowRightLong} />
              </span>
            </NavLink>
          </div>
          <div className="col pe-0">
            <img src={coffee} alt="" className="d-block mx-auto w-75" />
          </div>
        </div>
      </div>
    </>
  );
}

export default EnjoyYourDay;
