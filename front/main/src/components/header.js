import React from 'react'
import logo from '../logo.svg';

const Header = () => (
  <header className="bg-light mb-3">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">

          <nav className="navbar navbar-light">
            <a className="navbar-brand" href="/">
              <img src={logo} width="30" height="30" alt=""
                   className="d-inline-block align-top bg-dark rounded-circle mr-2" />
              Our Foo Bar
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
