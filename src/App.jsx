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
import Sobre from "./pages/Sobre";
import EntreEmContato from "./componets/EntreEmContato";
import PsicologoPerfilPage from "./pages/Perfilpsyco";
import ProfissionalInf from './pages/ProfissionaisInf'
import Anamese from './pages/Anamense'
import Cadastro from './pages/Cadastro'

const App = () => {
  return ( 
    <div className="mx-4 sm:-[10%]">
      <Navbar />
      <EntreEmContato />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/psicologos" element={<Psicologos />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/meu-perfil" element={<Myprofile />} />
        <Route path="/my-appointment" element={<MyAppointment />} />
        <Route path="/appointment:docId" element={<Appointment />} />
        <Route path="/Perfil-Psicologo" element={<PsicologoPerfilPage />} />
        <Route path="/CadastroProfissional" element={<ProfissionalInf />} />
        <Route path="/CadastroPaciente" element={<Anamese />} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
