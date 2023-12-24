import "./Admin/UserStyles.css";
import Profile from "./Admin/Profile";

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
                  <a href="/user-dashboard">Dashboard</a>
                </li>
                <li>
                  <a href="/user-password">Galang Dana</a>
                </li>
                <li>
                  <a href="">Aktifitas Anda</a>
                </li>
                <li>
                  <a href="/user-profile">Profil</a>
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
