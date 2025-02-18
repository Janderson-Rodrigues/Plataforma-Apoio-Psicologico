// pages/Perfil/PacientePerfil.js
import React from "react";
import DepoimentoForm from "../componets/DepoimentoForm";

const PacientePerfil = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-bold mb-4">Meu Perfil</h2>
        <p className="text-gray-700">
          Aqui você pode visualizar e gerenciar suas informações.
        </p>
      </div>
      <div className="w-full max-w-2xl">
        <DepoimentoForm />
      </div>
    </div>
  );
};

export default PacientePerfil;