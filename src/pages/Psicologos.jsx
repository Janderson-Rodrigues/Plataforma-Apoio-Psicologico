import React, { useState } from "react";
import ProfissionaisData from "../data/profissionais.json";
import CardPsicologos from "../componets/CardPsicologo";

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

      {/* Componente de CardPsicologos */}
      <CardPsicologos
        psicologosFiltrados={psicologosFiltrados}
        onFiltroChange={handleFiltroChange}
      />
    </div>
  );
}

export default Psicologos;