import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import Perfil from "../images/perfil.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false); // Estado para o menu mobile
  const [token, setToken] = useState(true); // Simulação de autenticação

  return (
    <div className="flex items-center justify-between text-sm py-6 px-6 md:px-12 bg-white shadow-md">
      {/* Logo */}
      <img
        className="w-44 cursor-pointer"
        src='' // Substitua pelo caminho do seu logo
        alt="Logo"
        onClick={() => navigate("/")}
      />

      {/* Links da Navbar (Desktop) */}
      <ul className="hidden md:flex items-center gap-12 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `py-2 hover:text-primary transition duration-300 ${
              isActive ? "text-primary font-semibold" : "text-gray-700"
            }`
          }
        >
          <li>HOME</li>
        </NavLink>

        <NavLink
          to="/psicologos"
          className={({ isActive }) =>
            `py-2 hover:text-primary transition duration-300 ${
              isActive ? "text-primary font-semibold" : "text-gray-700"
            }`
          }
        >
          <li>PSICÓLOGOS</li>
        </NavLink>

        <NavLink
          to="/sobre"
          className={({ isActive }) =>
            `py-2 hover:text-primary transition duration-300 ${
              isActive ? "text-primary font-semibold" : "text-gray-700"
            }`
          }
        >
          <li>SOBRE</li>
        </NavLink>

        <NavLink
          to="/administrador"
          className={({ isActive }) =>
            `py-2 hover:text-primary transition duration-300 ${
              isActive ? "text-primary font-semibold" : "text-gray-700"
            }`
          }
        >
          <li>ADMINISTRADOR</li>
        </NavLink>
      </ul>

      {/* Menu de Perfil ou Botão de Login */}
      <div className="flex items-center gap-6">
        {token ? (
          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                className="w-10 h-10 rounded-full border-2 border-gray-200"
                src={Perfil}
                alt="Foto de perfil"
              />
              <img
                className="w-3 transition-transform duration-300 group-hover:rotate-180"
                src={assets.dropdown_icon}
                alt="Dropdown"
              />
            </div>

            {/* Dropdown Menu */}
            <div className="absolute right-0 top-14 bg-white rounded-lg shadow-lg w-48 z-20 hidden group-hover:block">
              <div className="p-4 space-y-4">
                <p
                  onClick={() => navigate("/meu-perfil")}
                  className="text-gray-700 hover:text-primary cursor-pointer transition duration-300"
                >
                  Meu Perfil
                </p>
                <p
                  onClick={() => navigate("/minhas-consultas")}
                  className="text-gray-700 hover:text-primary cursor-pointer transition duration-300"
                >
                  Minhas Consultas
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="text-gray-700 hover:text-primary cursor-pointer transition duration-300"
                >
                  Sair
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition duration-300"
          >
            Criar Conta
          </button>
        )}

        {/* Menu Mobile */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden text-gray-700 hover:text-primary transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Menu Mobile (Aberto) */}
      {showMenu && (
        <div className="md:hidden absolute top-20 right-6 bg-white rounded-lg shadow-lg w-48 z-20">
          <ul className="p-4 space-y-4">
            <NavLink
              to="/"
              className="block text-gray-700 hover:text-primary transition duration-300"
              onClick={() => setShowMenu(false)}
            >
              <li>HOME</li>
            </NavLink>
            <NavLink
              to="/psicologos"
              className="block text-gray-700 hover:text-primary transition duration-300"
              onClick={() => setShowMenu(false)}
            >
              <li>PSICÓLOGOS</li>
            </NavLink>
            <NavLink
              to="/sobre"
              className="block text-gray-700 hover:text-primary transition duration-300"
              onClick={() => setShowMenu(false)}
            >
              <li>SOBRE</li>
            </NavLink>
            <NavLink
              to="/administrador"
              className="block text-gray-700 hover:text-primary transition duration-300"
              onClick={() => setShowMenu(false)}
            >
              <li>ADMINISTRADOR</li>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;