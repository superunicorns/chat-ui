import logo from "../../images/logo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__blocks">
        <img 
          src={logo}
          alt="logo"
        />
      </div>
      <div className="nav__blocks"></div>
      <div className="nav__blocks"></div>
    </div>
  )
}

export default Nav;