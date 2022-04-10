import React from 'react';
import '../assets/stylesheets/css/main.css';
import { useState } from 'react';

function AdminLogin() {
  const [loginCredentials, setLoginCredential] = useState({
    adminUsername: '',
    adminPassword: '',
  });

  const [showAlert, setShowAlert] = useState(false);

  // show invalid username or password warning

  function showWarning() {
    setShowAlert(true);
  }

  // remove invalid username or password warning

  function removeWarning() {
    setShowAlert(false);
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setLoginCredential({ ...loginCredentials, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // form validation
    // if (loginCredentials == { adminUsername: "hamoye", adminPassword: "426693" }) {
    //           window.location.replace('');
    // }
    console.log(loginCredentials);
  }

  return (
    <main className="admin-login-wrapper w-100">
      <div className="container">
        <div className="login-card px-3 shadow-lg">
          <section className="login-header text-center pt-5 px-5">
            <h3 className="open-sans-bold mb-2">OPENSKY</h3>
            <p
              className="text-center text-muted nunito fw-bold"
              style={{ textTransform: 'uppercase', fontSize: '13px' }}
            >
              Admin Login
            </p>
          </section>

          <section className="card-body nunito text-center">
            <form className="form-wrapper" onSubmit={handleSubmit}>
              {showAlert && (
                <p style={{ color: 'red' }}>Invalid username or password</p>
              )}
              <input
                className="form-control rounded-0 border-end-0 border-top-0 border-start-0"
                id="username"
                name="adminUsername"
                type="text"
                style={{ marginBottom: '30px' }}
                placeholder="Username"
                value={loginCredentials.adminUsername}
                onChange={handleChange}
                onClick={removeWarning}
              />
              <input
                className="form-control mb-5 rounded-0 border-end-0 border-top-0 border-start-0"
                type="password"
                id="password"
                name="adminPassword"
                placeholder="Password"
                value={loginCredentials.adminPassword}
                onChange={handleChange}
                onClick={removeWarning}
              />

              <button
                type="submit"
                className="btn btn-primary w-100 mb-5 shadow"
                onClick={showWarning}
              >
                Log in
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default AdminLogin;
