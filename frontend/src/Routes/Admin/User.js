import "./UserStyles.css";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import { Route } from "react-router-dom";
import UbahPassword from "./UbahPassword";

function User() {
  return (
    <>
      <div className="user">
        <div className="left">
          <div className="user-menu">
            <div className="header">
              <img src="/assets/profile.png" alt="" />
            </div>
            <div className="admin-menu">
              <ul>
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li>
                  <a href="">Galang Dana</a>
                </li>
                <li>
                  <a href="">Aktifitas Anda</a>
                </li>
                <li>
                  <a href="">Profil Setting</a>
                </li>
                <li>
                  <a href="">
                    <button type="submit">Logout</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <Profile />
        </div>
      </div>
    </>
  );
}

export default User;
