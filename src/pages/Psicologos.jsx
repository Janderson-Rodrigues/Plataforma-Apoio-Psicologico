import React from "react";
import ProfissionaisData from "../data/profissionais.json";
import Avaliacao from "../componets/Avaliacao" ; // Importa o componente de avaliação

function Psicologos() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-center mb-6">Nossos Psicólogos</h1>

      {/* Grid responsivo com 4 colunas */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ProfissionaisData.map((profissional) => (
          <div
            key={profissional.id}
            className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={profissional.imagem}
              alt={profissional.nome}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{profissional.nome}</h2>
            <p className="text-gray-600">Especialidades: {profissional.especialidade}</p>
            <p className="text-primary font-bold">Preço: R${profissional.preco}</p>

            {/* Componente de avaliação abaixo do psicólogo */}
            <div className="mt-4">
              <Avaliacao totalStars={5} onRating={(value) => console.log(`${profissional.nome} recebeu nota: ${value}`)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Psicologos;


