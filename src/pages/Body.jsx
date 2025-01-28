import React from 'react';
import Consulta from '../images/Consulta_online.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
// ..
Aos.init();

const body = () => {
  return (
    <div className="bg-white text-gray-800" >
      
      {/* Header */}
      <header className="text-center p-8">
        <h1 className="text-2xl font-medium" data-aos="fade-down">
          O autocuidado que você precisa está a um clique de distância.
        </h1>
        <p className="mt-2 text-lg" data-aos="fade-down">
          Coloque hoje mesmo sua saúde mental em primeiro lugar!
        </p>
      </header>

      <div className="text-center py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold" data-aos="fade-down">
            A Plataforma Apoio Psicologico fornece terapia online para mais de
          </h2>
          <p className="text-6xl font-extrabold text-black mt-4" data-aos="fade-down">3 milhões</p>
          <p className="text-lg text-gray-600" data-aos="fade-down">de pessoas por ano</p>
        </div>

        <section className="mt-16 flex flex-col lg:flex-row items-center lg:items-start gap-8">
    
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold " data-aos="fade-down">
              A Plataforma Apoio Psicológico é referência em terapia online
            </h2>
            <p className="mt-4 text-gray-700 " data-aos="fade-down">
              A Plataforma Apoio Psicológico facilita o acesso de pessoas em situação de
              vulnerabilidade socioeconômica a psicólogos treinados que estão prontos
              para cuidar da sua saúde mental.
            </p><br />
            <p className="mt-4 text-gray-700" data-aos="fade-down">
            Com a  Plataforma Apoio Psicológico, cuidar do seu bem-estar nunca foi tão fácil! Nosso serviço de saúde mental foi construído para ser o mais simples e direto possível.
            </p><br />
            <h2 className="text-3xl font-bold " data-aos="fade-down">
              Como funciona a terapia online
            </h2>
            <p className="mt-4 text-gray-700 " data-aos="fade-down">
            A Plataforma Apoio Psicológico oferece um meio simples e direto de contatar psicólogos profissionais, procure um especialista de acordo com área de atuação e entre em contato imediatamente para agendar seu atendimento!Nosso serviço foi pensado para ser acessível a quem mais precisa você!
            </p>
            <p className="mt-4 text-gray-700 " data-aos="fade-down">
            Com a ajuda de plataformas seguras e confiáveis, pacientes podem discutir seus sintomas, receber diagnósticos, iniciar tratamentos e acompanhar a evolução do quadro clínico com a mesma qualidade e segurança de uma consulta presencial.
            </p>
          </div>


          <div className="lg:w-1/2 flex justify-center animate-fade-down animate-once animate-duration-500 animate-delay-200 animate-ease-linear">
            <img
              src={Consulta}alt="Paciente em consulta online" className="max-w-full h-auto rounded-lg shadow-md" data-aos="fade-down"/>
          </div>
        </section>
      </div>
    </div>
  )
}

export default body
