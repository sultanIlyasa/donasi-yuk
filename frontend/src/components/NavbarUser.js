import { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="">
        <nav className="NavbarItems">
          <a className="nav-logo" href="/">
            <img src="/assets/logo.png" alt="" />
          </a>

          <div className="nav-search">
            <a href="/">
              <img src="./assets/searchLogo.png" alt="" />
            </a>
            <input type="text" name="" id="" placeholder="Cari program" />
          </div>

          <div className="nav-menu-icon" onClick={this.handleClick}>
            <img src={this.state.clicked ? "./assets/closed.png" : "./assets/menu.png"} alt="" />
          </div>

          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
            <div className="nav-links-mobile">
              <a href="/user-profile">
                <button className="nav-button-profile">User</button>
              </a>
              <a href="/home">
                <button className="nav-button-logout">Logout</button>
              </a>
            </div>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
