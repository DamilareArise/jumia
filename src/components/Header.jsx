import React from "react";

const Header = () => {
  const jumiaColor = {
    color: "#f68b1e",
    backgroundColor: "#f68b1e",
  };

  const navSticky = {
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 1000,
  };

  return (
    <>
      <header>
        <div className="ads-container">
          <div className="ads container"></div>
        </div>
        <div className="sell-on-jumia">
          <div className="container h-100 d-flex px-0">
            <div className="d-flex align-items-center col-5 gap-2">
              <img src="/images/logo2.png" alt="" height={12} />
              <span>
                <a
                  href=""
                  className="onHover-underline"
                  style={{ color: jumiaColor.color }}
                >
                  Sell on Jumia
                </a>
              </span>
            </div>
            <div className="d-flex align-items-center col-7 gap-3">
              <img src="/images/logo.png" alt="" height={30} />
              <img
                src="/images/jumia-pay-white.png"
                alt=""
                className="color-onHover"
                height={12}
              />
            </div>
          </div>
        </div>
        <nav className="bg-white d-none d-lg-block" style={navSticky}>
          <div className="d-flex container px-0">
            <div className="d-flex" style={{ width: '22%' }}>
              <img src="/images/logo.png" alt="" height={80} />
            </div>
            <ul className="d-flex align-items-center justify-content-between m-0 px-0" style={{ width: '78%' }}>
              <input
                type="text"
                className="nav-search d-block col-7"
                placeholder="Search products, brands and categories"
              />
              <button
                className="btn btn-search text-white d-block"
                style={{ backgroundColor: jumiaColor.backgroundColor }}
              >
                Search
              </button>

              <div className="dropdown">
                <a
                  className="btn btn-white nav-btns shadow-none dropdown-toggle px-1"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-mdb-dropdown-init
                  data-mdb-ripple-init
                  aria-expanded="false"
                >
                  <i className="far fa-user me-2"></i>Account
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <a
                  className="btn btn-white nav-btns shadow-none dropdown-toggle px-1"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-mdb-dropdown-init
                  data-mdb-ripple-init
                  aria-expanded="false"
                >
                  <i className="far fa-circle-question me-2"></i>Help
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <button className="btn nav-btns shadow-none px-1">
                <i className="fas fa-cart-shopping me-2"></i>Cart
              </button>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
