import React from "react";

export default function UserDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-600 text-white">
        <div className="p-4 text-2xl font-bold">Conexa</div>
        <nav className="mt-4">
          <ul>
            <li className="py-2 px-4 hover:bg-purple-700 cursor-pointer">
              🏠 Início
            </li>
            <li className="py-2 px-4 hover:bg-purple-700 cursor-pointer">
              🔍 Buscar Psicólogo
            </li>
            <li className="py-2 px-4 hover:bg-purple-700 cursor-pointer">
              📅 Consultas
            </li>
            <li className="py-2 px-4 hover:bg-purple-700 cursor-pointer">
              💳 Pagamentos
            </li>
            <li className="py-2 px-4 hover:bg-purple-700 cursor-pointer">
              📄 Contratos
            </li>
            <li className="py-2 px-4 hover:bg-purple-700 cursor-pointer">
              ⭐ Recomendados
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Olá, Janderson</h1>
            <p className="text-gray-600">
              Que bom te ver por aqui! Configure seu perfil para começar.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-gray-200 rounded-full">❓</button>
            <button className="p-2 bg-gray-200 rounded-full">🔔</button>
            <span className="p-2 bg-gray-200 rounded-full">🌎</span>
          </div>
        </header>

        {/* Content */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <p className="text-lg">Não há consultas marcadas. Agende uma agora mesmo!</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Pesquisar Psicólogos
            </button>
          </div>
        </div>

        {/* Additional Content */}
        <section className="mt-6">
          <div className="bg-purple-100 p-4 rounded-lg">
            <h2 className="font-semibold">
              Como as redes sociais podem aumentar a ansiedade?
            </h2>
            <p>Acesse o blog da Psicologia Viva e leia esse conteúdo.</p>
          </div>
        </section>

        {/* Support Group Section */}
        <section className="mt-6">
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Entre em um Grupo de Apoio</h2>
            <p className="text-gray-700 mb-4">
              Participe de um grupo de apoio e compartilhe suas experiências com outras pessoas. Escolha o grupo que melhor atende às suas necessidades e se conecte agora mesmo!
            </p>
            <div className="flex gap-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Ver Grupos Disponíveis
              </button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                Saiba Mais
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
