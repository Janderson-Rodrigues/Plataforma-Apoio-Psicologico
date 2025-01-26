import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Myprofile from "./pages/Myprofile";
import MyAppointment from "./pages/MyAppointment";
import Appointment from "./pages/Appointment";
import Contato from "./pages/Contato";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";

const App = () => {
  return (
    <div className="mx-4 sm:-[10%]">
      <Navbar />
      <div class="border-black-500 bg-gray-200 m-0 fixed bottom-48 right-10">
        Preciso de Ajuda Agora!
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-profile" element={<Myprofile />} />
        <Route path="/my-appointment" element={<MyAppointment />} />
        <Route path="/appointment:docId" element={<Appointment />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
