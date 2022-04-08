import React from 'react';
import '../assets/stylesheets/css/main.css';

function AdminLogin() {
  return (
    <main className="admin-login-wrapper w-100">
      <div className="container">
        <div className="login-card px-3">
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
            <form className="form-wrapper">
              <div className="form-group" style={{ marginBottom: '30px' }}>
                <div className="label" htmlFor="username"></div>
                <input
                  className="form-control rounded-0 border-end-0 border-top-0 border-start-0"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="form-group mb-5">
                <div className="label" htmlFor="password"></div>
                <input
                  className="form-control rounded-0 border-end-0 border-top-0 border-start-0"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-5">
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
