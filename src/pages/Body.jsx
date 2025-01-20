import React from 'react'

const body = () => {
  return (
    <div className="bg-white text-gray-800">
    {/* Header */}
    <header className="text-center p-8">
      <h1 className="text-2xl font-medium">
        O autocuidado que você precisa está a um clique de distância.
      </h1>
      <p className="mt-2 text-lg">
        Coloque hoje mesmo sua saúde mental em primeiro lugar!
      </p>
    </header>

    {/* Main Section */}
    <main className="text-center py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold">
          A PsyMeet fornece terapia online para mais de
        </h2>
        <p className="text-6xl font-extrabold text-black mt-4">3 milhões</p>
        <p className="text-lg text-gray-600">de pessoas por ano</p>
      </div>

      {/* Highlight Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          A <span className="bg-yellow-300 px-1">PsyMeet</span> é{" "}
          <span className="bg-yellow-300 px-1">referência</span> em terapia
          online
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-700">
          A PsyMeet existe para facilitar o acesso de pessoas em situação de
          vulnerabilidade socioeconômica a psicólogos treinados que estão
          prontos para cuidar da sua saúde mental.
        </p>
      </section>

      {/* Call to Action */}
      <div className="mt-16 bg-gray-100 p-8 rounded-lg shadow-md">
        <p className="text-xl font-bold">
          Garanta sua vaga social online hoje mesmo sem sair de casa!
        </p>
        <button className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
          Clique aqui!
        </button>
      </div>
    </main>
  </div>
  )
}

export default body
