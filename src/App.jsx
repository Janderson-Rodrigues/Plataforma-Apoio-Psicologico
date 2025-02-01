import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Myprofile from "./pages/Myprofile";
import MyAppointment from "./pages/MyAppointment";
import Appointment from "./pages/Appointment";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import Psicologos from "./pages/Psicologos";
import Cadastro from "./pages/Cadastro";
import Sobre from "./pages/Sobre";
import { Sidebar } from "lucide-react";

const App = () => {
  return (
    <div className="mx-4 sm:-[10%]">
      <Navbar />
      <div class="border-black-500 bg-orange-400 m-0 fixed bottom-48 right-10">
        Preciso de Ajuda Agora!
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/psicologos" element={<Psicologos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/my-profile" element={<Myprofile />} />
        <Route path="/my-appointment" element={<MyAppointment />} />
        <Route path="/appointment:docId" element={<Appointment />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/administrador" element={<Sidebar />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
