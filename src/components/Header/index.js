// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="nxt-trendz-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="nav-logout-img"
      />
      <div className="nav-list-btn-container">
        <ul className="nav-list-lg-container">
          <li className="nav-lg-item">Home</li>
          <li className="nav-lg-item">Products</li>
          <li className="nav-lg-item">Cart</li>
        </ul>
        <button type="button" className="nav-logout-btn">
          Logout
        </button>
      </div>
    </div>
    <ul className="nav-list-sm-container">
      <li className="nav-sm-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="nav-item-img"
        />
      </li>
      <li className="nav-sm-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="nav-item-img"
        />
      </li>
      <li className="nav-sm-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="nav-item-img"
        />
      </li>
    </ul>
  </nav>
)

export default Header
