import React, { useState } from "react";
import authService from "../services/auth.service";

function SignupPage() {


  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  const [message, setMessage] = useState('')
  const [isSuccessfull, setIsSuccessfull] = useState(false)


  
  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("")
    setIsSuccessfull(false)
    
    // this.form.validateAll();

      authService.register(
        username,
        email,
        password
      ).then(
        response => {
          setMessage(response.data.message)
          setIsSuccessfull(true)
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

            setMessage(resMessage)
            setIsSuccessfull(false)
        }
      );
  }

  return (
      <div className="container">

        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h1 className="text-center w-100 my-3">Signup Form</h1>
                <form className="form-signin" onSubmit={handleRegister}>
                  <div className="form-label-group my-2">
                    <label for="inputEmail" className="my-2">First name</label>
                    <input
                      name="firstname"
                      className="form-control"
                      placeholder="Enter first name"
                      required
                      autofocus
                      value={firstname}
                      onChange={(e)=> setFirstname(e.target.value)}
                    />
                  </div>
                  <div className="form-label-group my-2">
                    <label for="inputEmail" className="my-2">Last name</label>
                    <input
                      name="lastname"
                      className="form-control"
                      placeholder="Enter last name"
                      required
                      autofocus
                      value={lastname}
                      onChange={(e)=> setLastname(e.target.value)}
                    />
                  </div>
                  <div className="form-label-group my-2">
                    <label for="inputEmail" className="my-2">Username</label>
                    <input
                      name="username"
                      className="form-control"
                      placeholder="Enter username"
                      required
                      autofocus
                      value={username}
                      onChange={(e)=> setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-label-group my-2">
                    <label for="inputEmail" className="my-2">Email address</label>
                    <input
                      type="email"
                      name="loginId"
                      className="form-control"
                      placeholder="Enter email address"
                      required
                      value={email}
                      onChange={(e)=> setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-label-group my-2">
                    <label for="inputPassword" className="my-2">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter Password"
                      required
                      value={password}
                      onChange={(e)=> setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-label-group my-2">
                    <label for="inputPassword" className="my-2">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmpassword"
                      className="form-control"
                      placeholder="Enter confirm password"
                      required
                      value={confirmpassword}
                      onChange={(e)=> setConfirmpassword(e.target.value)}
                    />
                  </div>
                  <div className="alert-danger p-2">
                    <small>{message}</small>
                  </div>
                  <br />
                  <button
                    className="btn btn-lg btn-primary btn-block w-100"
                    type="submit"
                  >
                    Signup
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SignupPage;
