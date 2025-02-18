import React, { useState } from "react";
import ProfissionaisData from "../data/profissionais.json";
import Avaliacao from "../componets/Avaliacao";
import Filtro from "../componets/Filtros";

function Psicologos() {
  const [filtros, setFiltros] = useState({
    especialidades: [],
    precoMaximo: null,
    avaliacaoMinima: null,
  });

  // Função para atualizar os filtros
  const handleFiltroChange = (novosFiltros) => {
    setFiltros(novosFiltros);
  };

  // Filtrar psicólogos com base nos critérios selecionados
  const psicologosFiltrados = ProfissionaisData.filter((profissional) => {
    const atendeEspecialidades =
      filtros.especialidades.length === 0 ||
      filtros.especialidades.some((especialidade) =>
        profissional.especialidade.includes(especialidade)
      );

    const atendePreco =
      !filtros.precoMaximo || profissional.preco <= filtros.precoMaximo;

    const atendeAvaliacao =
      !filtros.avaliacaoMinima ||
      profissional.avaliacaoMedia >= filtros.avaliacaoMinima;

    return atendeEspecialidades && atendePreco && atendeAvaliacao;
  });

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Título da Página */}
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Nossos Psicólogos
      </h1>

      {/* Componente de Filtro */}
      <Filtro onFiltroChange={handleFiltroChange} />

      {/* Grid de Psicólogos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {psicologosFiltrados.map((profissional) => (
          <div
            key={profissional.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
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
                <p className="text-xs text-gray-500 mt-1">
                  {profissional.avaliacoes} avaliações
                </p>
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
    </div>
  );
}

export default Psicologos;