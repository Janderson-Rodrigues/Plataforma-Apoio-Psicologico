import React from "react";

// Ícones (você pode substituir por ícones de uma biblioteca como FontAwesome ou Material Icons)
const IconPacientes = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const IconAvaliacoes = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const IconConfiguracoes = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconStatus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const MenuHorizontal = () => {
  // Funções para cada botão (substitua por suas funções reais)
  const handleMeusPacientes = () => {
    console.log("Meus Pacientes clicado");
    // Navegar para a página de pacientes ou exibir uma lista de pacientes
  };

  const handleMinhasAvaliacoes = () => {
    console.log("Minhas Avaliações clicado");
    // Navegar para a página de avaliações ou exibir avaliações
  };

  const handleConfiguracoes = () => {
    console.log("Configurações clicado");
    // Navegar para a página de configurações
  };

  const handleStatusPerfil = () => {
    console.log("Status de Perfil clicado");
    // Exibir status do perfil (online/offline, etc.)
  };

  return (
    <div className="flex justify-center space-x-6">
      {/* Botão Meus Pacientes */}
      <button
        onClick={handleMeusPacientes}
        className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 w-32 h-32"
      >
        <IconPacientes />
        <span className="mt-2 text-sm font-medium text-gray-700">Meus Pacientes</span>
      </button>

      {/* Botão Minhas Avaliações */}
      <button
        onClick={handleMinhasAvaliacoes}
        className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 w-32 h-32"
      >
        <IconAvaliacoes />
        <span className="mt-2 text-sm font-medium text-gray-700">Minhas Avaliações</span>
      </button>

      {/* Botão Configurações */}
      <button
        onClick={handleConfiguracoes}
        className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 w-32 h-32"
      >
        <IconConfiguracoes />
        <span className="mt-2 text-sm font-medium text-gray-700">Configurações</span>
      </button>

      {/* Botão Status de Perfil */}
      <button
        onClick={handleStatusPerfil}
        className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 w-32 h-32"
      >
        <IconStatus />
        <span className="mt-2 text-sm font-medium text-gray-700">Status de Perfil</span>
      </button>
    </div>
  );
};

export default MenuHorizontal;