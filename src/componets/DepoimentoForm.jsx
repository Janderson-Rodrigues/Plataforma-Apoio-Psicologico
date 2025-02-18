// components/DepoimentoForm.js
import React, { useState } from "react";

const DepoimentoForm = () => {
  const [titulo, setTitulo] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [avaliacao, setAvaliacao] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de envio
    const depoimento = {
      titulo,
      mensagem,
      avaliacao,
    };
    alert("Depoimento enviado com sucesso!");
    console.log("Depoimento mockado:", depoimento); // Exibe no console
    // Limpar campos após envio
    setTitulo("");
    setMensagem("");
    setAvaliacao(0);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Enviar Depoimento</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mensagem</label>
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Avaliação</label>
          <select
            value={avaliacao}
            onChange={(e) => setAvaliacao(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value={0}>Selecione uma avaliação</option>
            <option value={1}>1 estrela</option>
            <option value={2}>2 estrelas</option>
            <option value={3}>3 estrelas</option>
            <option value={4}>4 estrelas</option>
            <option value={5}>5 estrelas</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Enviar Depoimento
        </button>
      </form>
    </div>
  );
};

export default DepoimentoForm;