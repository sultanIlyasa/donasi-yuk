import "./Daftar.css";

function ForgotPassword() {
  return (
    <>
      <div className="">
        <div className="forgot">
          <div className="login-title">
            <h1>Ganti Password</h1>
          </div>
          <form action="" method="post">
            <div className="login-input">
              <input type="email" name="" id="" placeholder="Email" />
            </div>
            <div className="login-input">
              <input type="password" name="" id="" placeholder="Password baru" />
            </div>
            <div className="login-input">
              <input type="password" name="" id="" placeholder="Re - Password baru" />
            </div>
            <button type="submit">Submit</button>
          </form>
          <div className="login-input">
            <span>
              Masuk kembali? <a href="/login">login disini</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
