import React from "react";
import Avaliacao from "./Avaliacao";
import Filtro from "./Filtros";

const CardPsicologos = ({ psicologosFiltrados, onFiltroChange }) => {
  return (
    <>
      <Filtro onFiltroChange={onFiltroChange} /> {/* Componente de filtro */}
      {/* Grid de Psicólogos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {psicologosFiltrados.map((profissional) => (
          <div
            key={profissional.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col"
          >
            {/* Imagem do Psicólogo */}
            <div className="relative overflow-hidden rounded-lg flex-shrink-0">
              <img
                src={profissional.imagem}
                alt={profissional.nome}
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>

            {/* Informações do Psicólogo */}
            <div className="mt-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-800">
                {profissional.nome}
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                <span className="font-medium">Especialidades:</span>{" "}
                {profissional.especialidade}
              </p>
              <p className="text-primary font-bold mt-2">
                Preço: R${profissional.preco}
              </p>

              {/* Componente de Avaliação */}
              <div className="mt-2">
                <Avaliacao
                  totalStars={5}
                  initialRating={profissional.avaliacaoMedia}
                  onRating={(value) =>
                    console.log(`${profissional.nome} recebeu nota: ${value}`)
                  }
                />
              </div>

              {/* Botão para Agendar Consulta */}
              <div className="mt-4 flex-grow flex items-end">
                <button
                  onClick={() =>
                    console.log(`Agendar consulta com ${profissional.nome}`)
                  }
                  className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition duration-300 text-sm"
                >
                  Agendar Consulta
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardPsicologos;