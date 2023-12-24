import Navbar from "./components/Navbar";
import NavbarUser from "./components/NavbarUser";
import Home from "./Routes/Home";
import Donasi from "./Routes/Donasi";
import Sedekah from "./Routes/Sedekah";
import Zakat from "./Routes/Zakat";
import Qurban from "./Routes/Qurban";
import Wakaf from "./Routes/Wakaf";
import Login from "./Routes/Login";
import Daftar from "./Routes/Daftar";
import ForgotPassword from "./Routes/ForgotPassword";
import Footer from "./components/Footer";
import UserProfile from "./Routes/UserProfile";
import UserDashboard from "./Routes/UserDashboard";
import { Route, Routes } from "react-router-dom";
import ZakatBayar from "./Routes/ZakatBayar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donasi" element={<Donasi />} />
        <Route path="/zakat" element={<Zakat />} />
        <Route path="/sedekah" element={<Sedekah />} />
        <Route path="/wakaf" element={<Wakaf />} />
        <Route path="/qurban" element={<Qurban />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/user-profile" element={<UserProfile />}></Route>
        <Route path="/user-dashboard" element={<UserDashboard />}></Route>
        <Route path="/zakat/donate" element={<ZakatBayar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
