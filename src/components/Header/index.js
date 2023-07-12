import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="header-logo"
    />
    <div className="nav-menu">
      <li className="link-item">Home</li>
      <li className="link-item">Products</li>
      <li className="link-item">Cart</li>
      <button className="logout-btn" type="button">
        LogOut
      </button>
    </div>
  </nav>
)
export default Header
