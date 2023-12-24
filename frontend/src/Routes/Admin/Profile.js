import "./UserStyles.css";

function Profile() {
  return (
    <>
      <div className="container">
        <div className="profile">
          <div className="header">
            <h1>Pengaturan</h1>
          </div>
          <div className="row">
            <div className="col">
              <div className="profile-image">
                <img src="/assets/Profile.png" alt="" />
              </div>
            </div>
            <div className="col">
              <form action="" method="post">
                <div className="profile-input">
                  <input type="text" name="" id="" placeholder="Nama lengkap" />
                </div>
                <div className="profile-input">
                  <input type="email" name="" id="" placeholder="Email" />
                </div>
                <div className="profile-input">
                  <input type="number" name="" id="" placeholder="No Telephone" />
                </div>
                <div className="profile-daftar">
                  <span>Jenis Kelamin</span>
                  <div>
                    <label>
                      <input type="radio" name="jk" id="" value={"L"} /> Laki - laki
                    </label>
                    <label>
                      <input type="radio" name="jk" id="" value={"P"} /> Perempuan
                    </label>
                  </div>
                </div>
                <div className="profile-input">
                  <textarea name="" id="" cols="100" rows="10" placeholder="Alamat"></textarea>
                </div>
                <div className="profile-input">
                  <input type="password" name="" id="" placeholder="Password baru" />
                </div>
                <div className="profile-input">
                  <input type="password" name="" id="" placeholder="Re - Password baru" />
                </div>
                <button type="submit">Ubah</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
