import React, { useState } from 'react';

const ProfissionaisInf = () => {
  // Estados para os campos do formulário
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    location: "",
    serviceType: "",
    freeSlots: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  // Opções para selects/radios - CORREÇÃO DO ERRO specialties is not defined
  const specialties = [
    "Cardiologista",
    "Pediatra",
    "Dentista",
    "Advogado",
    "Psicólogo",
    "Professor",
    "Nutricionista",
    "Fisioterapeuta",
    "Personal Trainer"
  ];

  const serviceTypes = ["Presencial", "Online", "Híbrido"];

  // Manipula mudanças nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validação simples
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.specialty) newErrors.specialty = "Especialidade é obrigatória";
    if (!formData.location.trim()) newErrors.location = "Localização é obrigatória";
    if (!formData.serviceType) newErrors.serviceType = "Selecione um tipo de atendimento";
    if (!formData.freeSlots || formData.freeSlots < 0)
      newErrors.freeSlots = "Digite um número válido (0 ou mais)";
    return newErrors;
  };

  // Submit do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Simula envio (substitua por uma API real)
    console.log("Dados enviados:", formData);
    alert("Perfil cadastrado com sucesso!");
    
    // Reseta o formulário
    setFormData({
      name: "",
      specialty: "",
      location: "",
      serviceType: "",
      freeSlots: "",
      description: "",
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
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nome Completo *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Seu nome completo"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Especialidade */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Especialidade *
            </label>
            <select
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.specialty ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Selecione sua especialidade...</option>
              {specialties.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
            {errors.specialty && (
              <p className="mt-1 text-sm text-red-600">{errors.specialty}</p>
            )}
          </div>

          {/* Localização */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Localização (Cidade/Estado) *
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.location ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Ex: São Paulo - SP"
            />
            {errors.location && (
              <p className="mt-1 text-sm text-red-600">{errors.location}</p>
            )}
          </div>

          {/* Tipo de Atendimento */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tipo de Atendimento *
            </label>
            <div className="mt-2 space-y-2">
              {serviceTypes.map((type) => (
                <label key={type} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="serviceType"
                    value={type}
                    checked={formData.serviceType === type}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">{type}</span>
                </label>
              ))}
            </div>
            {errors.serviceType && (
              <p className="mt-1 text-sm text-red-600">{errors.serviceType}</p>
            )}
          </div>

          {/* Atendimentos Gratuitos */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Atendimentos Gratuitos Disponíveis *
            </label>
            <input
              type="number"
              name="freeSlots"
              value={formData.freeSlots}
              onChange={handleChange}
              min="0"
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.freeSlots ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Quantidade de atendimentos gratuitos"
            />
            {errors.freeSlots && (
              <p className="mt-1 text-sm text-red-600">{errors.freeSlots}</p>
            )}
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Descrição (Opcional)
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Fale sobre sua experiência, abordagem, etc."
            />
          </div>

          {/* Botão de Submit */}
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