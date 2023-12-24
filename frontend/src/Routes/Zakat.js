import React, { useState, useEffect } from "react";
import axios from "axios";

const Zakat = () => {
  const [zakat, setZakat] = useState([]);

  useEffect(() => {
    getZakat();
  }, []);

  const getZakat = async () => {
    const zakat = await axios.get("http://localhost:8080/zakat");
    console.log(zakat);
  };

  return (
    <>
      <div className="container">
        <div className="zakat">
          <h1>ZAKAT</h1>
          <div className="row">
            <div className="col">
              <div className="table-zakat">
                <table>
                  <tr>
                    <th>Pemberi</th>
                    <th>Jenis</th>
                    <th>Jumlah Zakat</th>
                  </tr>
                  <tr>
                    <td>asdasdasdsad</td>
                    <td>asdasdasdsad</td>
                    <td>asdasdsad</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="col">
              <div className="button-zakat">
                <a href="/zakat/donate">
                  <button>Donate</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Zakat;
