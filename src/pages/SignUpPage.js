import React, { useState } from "react";
import LogoMota from "../assets/logomota.jpg";
import { NavLink } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = () => {
    const formData = new FormData();

    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);

    fetch("http://127.0.0.1:8000/api/customers/register", {
      method: "POST",

      body: formData,
    })
      .then((response) => response.json())

      .then((data) => {
        // jika register berhasil set data customer ke local storage
        if (data["success"]) {
          console.log(data["data"]);

          localStorage.setItem("id-customer", data["data"].id);
          localStorage.setItem("customer", data["data"].username);
          window.location.href = "/";
        }
      })

      .catch((error) => console.log(error));
  };

  return (
    <>
      <section className="vh-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={LogoMota}
                      alt="login form"
                      className="img-fluid h-100"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1 }}
                        >
                          Register your account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            onChange={handleEmail}
                          />
                          <label className="form-label" for="form2Example17">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="username"
                            className="form-control form-control-lg"
                            onChange={handleUsername}
                          />
                          <label className="form-label" for="form2Example17">
                            Username
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="pass"
                            className="form-control form-control-lg"
                            onChange={handlePassword}
                          />
                          <label className="form-label" for="form2Example27">
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={handleRegister}
                          >
                            Register
                          </button>
                        </div>
                        <p className="mb-0" style={{ color: "#393f81" }}>
                          Have an account?{" "}
                          <NavLink to="/login" style={{ color: "#393f81" }}>
                            Login here
                          </NavLink>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
