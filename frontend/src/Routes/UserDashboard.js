import "./Admin/UserStyles.css";
import Dashboard from "./Admin/Dashboard";
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
                  <a href="">Galang Dana</a>
                </li>
                <li>
                  <a href="">Aktifitas Anda</a>
                </li>
                <li>
                  <a href="/user-profile">Profile</a>
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
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default User;
