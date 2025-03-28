import React, { useState } from 'react';

const ProfissionaisInf = () => {
  const [formData, setFormData] = useState({
    nome: "",
    especialidade: "",
    localizacao: "",
    valorAtendimento: "",
    vagasDisponiveis: "",
    faixaEtaria: "",
    descricao: "",
  });

  const [errors, setErrors] = useState({});

  const especialidades = [
    "Psicologia Social",
    "Psicopedagogia",
    "Ansiedade",
    "Depressão",
    "Psicologia Familiar",
    "Psicologia Organizacional e do Trabalho",
    "Psicologia Jurídica",
    "Neuropsicologia"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validarFormulario = () => {
    const novosErros = {};
    if (!formData.nome.trim()) novosErros.nome = "Nome é obrigatório";
    if (!formData.especialidade) novosErros.especialidade = "Especialidade é obrigatória";
    if (!formData.localizacao.trim()) novosErros.localizacao = "Localização é obrigatória";
    if (!formData.valorAtendimento.trim()) novosErros.valorAtendimento = "Valor do atendimento é obrigatório";
    if (!formData.vagasDisponiveis || formData.vagasDisponiveis < 0)
      novosErros.vagasDisponiveis = "Digite um número válido (0 ou mais)";
    return novosErros;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errosFormulario = validarFormulario();
    
    if (Object.keys(errosFormulario).length > 0) {
      setErrors(errosFormulario);
      return;
    }

    console.log("Dados enviados:", formData);
    alert("Perfil cadastrado com sucesso!");
    
    setFormData({
      nome: "",
      especialidade: "",
      localizacao: "",
      valorAtendimento: "",
      vagasDisponiveis: "",
      faixaEtaria: "",
      descricao: "",
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Cadastre seu Perfil Profissional
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nome Completo *
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md border-gray-300"
              placeholder="Seu nome completo"
            />
            {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Especialidade *
            </label>
            <select
              name="especialidade"
              value={formData.especialidade}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md border-gray-300"
            >
              <option value="">Selecione uma especialidade</option>
              {especialidades.map((espec) => (
                <option key={espec} value={espec}>
                  {espec}
                </option>
              ))}
            </select>
            {errors.especialidade && <p className="text-red-500 text-xs mt-1">{errors.especialidade}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Localização (Cidade/Estado) *
            </label>
            <input
              type="text"
              name="localizacao"
              value={formData.localizacao}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md border-gray-300"
              placeholder="Ex: São Paulo/SP"
            />
            {errors.localizacao && <p className="text-red-500 text-xs mt-1">{errors.localizacao}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Valor do Atendimento *
            </label>
            <input
              type="text"
              name="valorAtendimento"
              value={formData.valorAtendimento}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md border-gray-300"
              placeholder="Ex: R$ 100,00 por sessão"
            />
            {errors.valorAtendimento && <p className="text-red-500 text-xs mt-1">{errors.valorAtendimento}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Vagas Disponíveis *
            </label>
            <input
              type="number"
              name="vagasDisponiveis"
              value={formData.vagasDisponiveis}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md border-gray-300"
              placeholder="Número de vagas disponíveis"
              min="0"
            />
            {errors.vagasDisponiveis && <p className="text-red-500 text-xs mt-1">{errors.vagasDisponiveis}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Faixa Etária Atendida
            </label>
            <input
              type="text"
              name="faixaEtaria"
              value={formData.faixaEtaria}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md border-gray-300"
              placeholder="Ex: 18-25 anos, 26-40 anos, etc."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Descrição (Sobre você)
            </label>
            <textarea
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md border-gray-300"
              placeholder="Fale um pouco sobre sua abordagem e experiência"
              rows="4"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Cadastrar Perfil
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfissionaisInf;