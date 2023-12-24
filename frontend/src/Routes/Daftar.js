import React, { useState } from "react";
import axios from "axios";
import "./Daftar.css";

function Daftar() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jk, setJk] = useState("");
  const [no, setNo] = useState("");

  const saveUser = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/zakat", {
      nama: nama,
      email: email,
      password: password,
      alamat: alamat,
      jk: jk,
      no: no,
    });
  };
  return (
    <>
      <div className="">
        <div className="daftar">
          <div className="login-title">
            <h1>Daftar Akun Anda</h1>
          </div>
          <form onSubmit={saveUser()}>
            <div className="login-input">
              <input type="text" name="nama" id="" placeholder="Nama lengkap" value={nama} onChange={(e) => setNama(e.target.value)} />
            </div>
            <div className="login-input">
              <input type="email" name="email" id="" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="login-input">
              <input type="number" name="no" id="" placeholder="No Telephone" value={no} onChange={(e) => setNo(e.target.value)} />
            </div>
            <div className="login-daftar">
              <label htmlFor="">Jenis Kelamin</label>
              <input type="radio" name="jk" id="" value={"Laki-laki"} onChange={(e) => setJk(e.target.value)} /> Laki - laki
              <input type="radio" name="jk" id="" value={"Perempuan"} onChange={(e) => setJk(e.target.value)} /> Perempuan
            </div>
            <div className="login-input">
              <textarea name="alamat" id="" cols="100" rows="10" placeholder="Alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)}></textarea>
            </div>
            <div className="login-input">
              <input type="password" name="password" id="" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="login-input">
              <input type="password" name="passwordSync" id="" placeholder="Re - Password" />
            </div>
            <button type="submit">Daftar</button>
          </form>
          <div className="login-input">
            <span>
              Sudah punya akun? <a href="/login">login disini</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Daftar;
