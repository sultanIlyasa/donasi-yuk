import { Component } from "react";
import { MenuItems, FooterItems } from "./FooterItems";
import "./FooterStyles.css";

class Footer extends Component {
  render() {
    return (
      <div className="n">
        <div className="footer">
          <div className="header">
            <h1>
              TENTANG <span>KAMI</span>
            </h1>
          </div>
          <div className="header"></div>
          <div className="header">
            <h1>
              FOLLOW <span>KAMI</span>
            </h1>
          </div>
          <ul className="footer-menu">
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="footer-menu">
            {FooterItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="footer-credit">
            <div className="footer-logo">
              <img src="/assets/instagram.png" alt="" />
              <img src="/assets/twitter.png" alt="" />
              <img src="/assets/facebook.png" alt="" />
            </div>
            <div className="bottom-menu">©Donasi Yuk! 2022</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
