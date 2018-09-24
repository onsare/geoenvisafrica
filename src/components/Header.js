import React from "react";

const Header = () => {
  return (
    <header>
      <div className="navbar-wrapper">
        <div className="navbar navbar-main" id="fixed-navbar">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 column-header">
                <div className="navbar-header">
                  {/* <!-- Brand --> */}
                  <a href="index.html" className="navbar-brand">
                    <div
                      style={{ backgroundColor: "white" }}
                      className="css-logo"
                    >
                      Geoenvis Africa
                    </div>
                    {/* <!-- <img src="images/logo.png" className="raleway-logo" alt="Geoenvis Africa"> --> */}
                  </a>
                  {/* <!-- Mobile Navigation --> */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navHeaderCollapse"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                {/* <!-- /navbar header -->    */}

                {/* <!-- Main Navigation - Explained in Documentation --> */}
                <nav
                  className="navbar-collapse collapse navHeaderCollapse"
                  role="navigation"
                >
                  <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown dropdown-main">
                      <a href="/">Home</a>
                    </li>
                    <li className="dropdown dropdown-main">
                      <a href="/about">About Us</a>
                    </li>

                    <li className="dropdown dropdown-main">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Services
                        <span className="fa fa-angle-down dropdown-arrow" />
                      </a>
                      <ul className="dropdown-menu dropdown-subhover dropdown-animation animated fadeIn">
                        {/* <!-- Control Animations by changing "fadeIn" to another property from animate.css, check animations page in features / ALSO dropdown-animation className controls the duration, ajust if need --> */}
                        <li className="dropdown dropdown-submenu">
                          <a className="trigger">Geospatial Solutions</a>
                          <ul className="dropdown-menu animated fadeIn dropdown-animation">
                            <li>
                              <a tabIndex="-1" href="/">
                                GIS
                              </a>
                            </li>
                            <li>
                              <a tabIndex="-1" href="/">
                                Remote sensing {"&"} Photogrammetry
                              </a>
                            </li>
                            <li>
                              <a tabIndex="-1" href="/">
                                Land Survey
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/services#physicalplanning">
                            Physical Planning Solution
                          </a>
                        </li>
                        <li>
                          <a href="/">Environmental Consultancy</a>
                        </li>
                        <li>
                          <a href="/">ICT Solutions</a>
                        </li>
                        <li>
                          <a href="/">
                            Research {"&"} Development (R
                            {"&"}
                            D)
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                      <a href="/team">Team</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>

                    <li className="dropdown hidden-sm hidden-xs">
                      <a
                        href="#"
                        className="ml10 nav-circle-li dropdown-toggle dropdown-form-toggle"
                        data-toggle="dropdown"
                      >
                        <i className="fa fa-search" />
                      </a>
                      <ul className="fadeInRight-animated dropdown-menu dropdown-menu-user">
                        <li id="dropdownForm">
                          <div className="dropdown-form">
                            <form className="form-default form-inline p15">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control search-input"
                                  placeholder="Search..."
                                />
                                <span className="input-group-btn">
                                  <button
                                    className="btn btn-rw btn-primary search-btn"
                                    type="button"
                                  >
                                    Go!
                                  </button>
                                </span>
                              </div>
                            </form>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
