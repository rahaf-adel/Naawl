import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../images/logo.png";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handelUsername = (e) => {
    setUsername(e.target.value);
  };
  const handelePassword = (e) => {
    setPassword(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted from ------>");
    axios
      .post("http://127.0.0.1:8000/users/login", {
        username: username,
        password: password,
      })
      .then((respons) => {
        console.log(respons.data);
        alert(respons.data.msg);
        if(respons.data.msg == "Wellcome to Atim system >> Your token is ready"){
         redirect()
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("err");
        // console.log(err.respons)
        alert(err.respons.data.error.message);
      });
  };
  const navigate = useNavigate();
  function redirect() {
    navigate("/");
  }
  return (
    <div>
      <section
        className="vh-100"
        style={{ backgroundColor: "rgb(245, 197, 109)" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={logo}
                      alt="login form"
                      className="img-fluid"
                      style={{
                        borderRadius: "1rem 0 0 1rem",
                        height: "560px",
                        width: "500px",
                      }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      {submitting && <div>Submtting Form...</div>}
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            name="username"
                            value={username}
                            onChange={handelUsername}
                            required
                          />
                          <label className="form-label" for="form2Example17">
                            Username
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handelePassword}
                            id="form2Example27"
                            className="form-control form-control-lg"
                            required
                          />
                          <label className="form-label" for="form2Example27">
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            name="submit"
                            onClick={handelSubmit}
                            type="submit"
                          >
                            Login
                          </button>
                        </div>

                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <a href="#!" style={{ color: "#393f81" }}>
                            Register here
                          </a>
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
    </div>
  );
}

export default Login;
