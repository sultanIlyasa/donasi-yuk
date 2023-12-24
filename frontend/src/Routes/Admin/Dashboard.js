import "./UserStyles.css";

function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="dashboard">
          <div className="header">
            <h1>Dashboard</h1>
          </div>
          <div className="row">
            <div className="col">
              <div className="dashboard-menu">
                <div className="header">Donasi</div>
                <h1 className="transaksi">RP 0</h1>
                <span>Total Donasi</span>
                <h1 className="transaksi">0</h1>
                <span>Total Transaksi</span>
              </div>
            </div>
            <div className="col">
              <div className="dashboard-menu">
                <div className="header">Zakat</div>
                <h1 className="transaksi">RP 0</h1>
                <span>Total Donasi</span>
                <h1 className="transaksi">0</h1>
                <span>Total Transaksi</span>
              </div>
            </div>
            <div className="col">
              <div className="dashboard-menu">
                <div className="header">Sedekah</div>
                <h1 className="transaksi">RP 0</h1>
                <span>Total Donasi</span>
                <h1 className="transaksi">0</h1>
                <span>Total Transaksi</span>
              </div>
            </div>
            <div className="col">
              <div className="dashboard-menu">
                <div className="header">Wakaf</div>
                <h1 className="transaksi">RP 0</h1>
                <span>Total Donasi</span>
                <h1 className="transaksi">0</h1>
                <span>Total Transaksi</span>
              </div>
            </div>
            <div className="col">
              <div className="dashboard-menu">
                <div className="header">Qurban</div>
                <h1 className="transaksi">RP 0</h1>
                <span>Total Donasi</span>
                <h1 className="transaksi">0</h1>
                <span>Total Transaksi</span>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
