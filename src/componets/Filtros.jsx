import React, { useState } from "react";

const Filtro = ({ onFiltroChange }) => {
  const [especialidadesSelecionadas, setEspecialidadesSelecionadas] = useState([]);
  const [precoMaximo, setPrecoMaximo] = useState(null);
  const [avaliacaoMinima, setAvaliacaoMinima] = useState(null);

  const especialidadesDisponiveis = [
    "Ansiedade",
    "Depressão",
    "Terapia Familiar",
    "Estresse",
    "Autoestima",
  ];

  const handleEspecialidadeChange = (especialidade) => {
    const novasEspecialidades = especialidadesSelecionadas.includes(especialidade)
      ? especialidadesSelecionadas.filter((e) => e !== especialidade)
      : [...especialidadesSelecionadas, especialidade];

    setEspecialidadesSelecionadas(novasEspecialidades);
    onFiltroChange({
      especialidades: novasEspecialidades,
      precoMaximo,
      avaliacaoMinima,
    });
  };

  const handlePrecoMaximoChange = (valor) => {
    setPrecoMaximo(valor);
    onFiltroChange({
      especialidades: especialidadesSelecionadas,
      precoMaximo: valor,
      avaliacaoMinima,
    });
  };

  const handleAvaliacaoMinimaChange = (valor) => {
    setAvaliacaoMinima(valor);
    onFiltroChange({
      especialidades: especialidadesSelecionadas,
      precoMaximo,
      avaliacaoMinima: valor,
    });
  };

  return (
    <div className="mb-8 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Filtrar por:</h2>

      {/* Filtro de Especialidades */}
      <div className="mb-6">
        <h3 className="font-medium mb-4 text-gray-700">Especialidades</h3>
        <div className="flex flex-wrap gap-3">
          {especialidadesDisponiveis.map((especialidade) => (
            <label key={especialidade} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={especialidadesSelecionadas.includes(especialidade)}
                onChange={() => handleEspecialidadeChange(especialidade)}
                className="form-checkbox h-5 w-5 text-primary rounded"
              />
              <span className="text-gray-700">{especialidade}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filtro de Preço Máximo */}
      <div className="mb-6">
        <h3 className="font-medium mb-4 text-gray-700">Preço Máximo</h3>
        <input
          type="number"
          placeholder="R$"
          value={precoMaximo || ""}
          onChange={(e) => handlePrecoMaximoChange(e.target.value ? Number(e.target.value) : null)}
          className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Filtro de Avaliação Mínima */}
      <div className="mb-6">
        <h3 className="font-medium mb-4 text-gray-700">Avaliação Mínima</h3>
        <select
          value={avaliacaoMinima || ""}
          onChange={(e) => handleAvaliacaoMinimaChange(e.target.value ? Number(e.target.value) : null)}
          className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Selecione</option>
          <option value="4">4 estrelas ou mais</option>
          <option value="3">3 estrelas ou mais</option>
          <option value="2">2 estrelas ou mais</option>
        </select>
      </div>
    </div>
  );
};

export default Filtro;