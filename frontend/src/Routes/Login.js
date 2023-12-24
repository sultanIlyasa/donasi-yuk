import "./Login.css";

function Login() {
  return (
    <>
      <div className="">
        <div className="login">
          <div className="login-title">
            <h1>Masuk ke Akun Anda</h1>
          </div>
          <form action="" method="post">
            <div className="login-input">
              <input type="text" name="" id="" placeholder="Username" />
            </div>
            <div className="login-input">
              <input type="password" name="" id="" placeholder="Password" />
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="login-input">
            <span>
              <a href="/forgot-password">Forgot Password?</a>
            </span>
            <span>
              Belum punya akun? <a href="/daftar">Daftar disini</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
