import React from 'react';
import grupo_psicologos from '../images/grupo_psicologos.jpg';
import Header from '../componets/Header';
import BotaoLogin from '../componets/BotaoLogin';


const About = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      <Header />
      {/* Título */}
      <h2 className="text-center text-2xl pt-10 text-gray-500" data-aos="fade-down">
        SOBRE <span className="text-gray-700 font-semibold">NÓS</span>
      </h2>

      {/* Seção principal */}
      <div className="my-10 flex flex-col md:flex-row gap-12 items-center">
        <img 
          className="w-full md:max-w-[360px] rounded-lg shadow-md" 
          src={grupo_psicologos}
          alt="Sobre Prescripto"
          data-aos="fade-down"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-base text-gray-600">
          <p data-aos="fade-down">Bem-vindo a <b>Plataforma Online de ajuda psicologica</b>, seu parceiro de confiança na gestão das suas necessidades de saúde de forma conveniente e eficiente. No Prescripto, entendemos os desafios que as pessoas enfrentam ao agendar consultas médicas e gerenciar seus registros de saúde.</p>
          <p data-aos="fade-down">A consulta psicológica é um processo terapêutico conduzido por um profissional qualificado, que tem como objetivo ajudar indivíduos a compreender e lidar com suas emoções, pensamentos e comportamentos. Através de técnicas e abordagens específicas, o psicólogo auxilia no desenvolvimento de estratégias para enfrentar dificuldades, superar traumas, melhorar relacionamentos e promover o autoconhecimento.</p>
          <p data-aos="fade-down">A Plataforma está comprometida com a excelência em tecnologia para saúde. Buscamos continuamente aprimorar nossa plataforma, integrando os mais recentes avanços para melhorar a experiência do usuário e oferecer um serviço superior.</p>
          <h3 className="text-lg font-semibold text-gray-800" data-aos="fade-down">Benefícios da Consulta Psicológica</h3>
          <p data-aos="fade-down">Autoconhecimento: A terapia proporciona uma jornada de descoberta pessoal, ajudando você a entender melhor suas emoções, motivações e padrões de comportamento.</p>
          <p data-aos="fade-down">Saúde Mental: Cuidar da sua saúde mental é tão importante quanto cuidar da saúde física. A terapia pode ajudar a reduzir sintomas de ansiedade, depressão, estresse e outros transtornos emocionais.</p>
          <p data-aos="fade-down">Melhoria nos Relacionamentos: Através da terapia, é possível desenvolver habilidades de comunicação e empatia, fortalecendo os vínculos afetivos e melhorando a qualidade dos relacionamentos.</p>
          <p data-aos="fade-down">Resiliência e Coping: Aprender a lidar com adversidades e desenvolver resiliência são aspectos fundamentais trabalhados durante as sessões terapêuticas.</p>
          <h3 className="text-lg font-semibold text-gray-800" data-aos="fade-down">Nossa Visão</h3>
          <p data-aos="fade-down">Nossa visão é criar uma experiência de saúde contínua para cada usuário. Nosso objetivo é conectar pacientes e profissionais de saúde, tornando mais fácil o acesso ao cuidado de que você precisa, quando precisa.</p>
        </div>
      </div>
      {/* Seção: Por que escolher nós? */}
      <h2 className="text-xl my-6 text-center" data-aos="fade-down">
        POR QUE <span className="text-gray-700 font-semibold">ESCOLHER NÓS</span>
      </h2>
      < BotaoLogin /> <br />
      <div className="flex flex-col md:flex-row gap-6 mb-20" data-aos="fade-down">
        {[
          { title: "EFICIÊNCIA:", text: "Agendamento de consultas simplificado que se adapta ao seu estilo de vida agitado." },
          { title: "CONVENIÊNCIA:", text: "Acesso a uma rede de profissionais de saúde confiáveis na sua região." },
          { title: "PERSONALIZAÇÃO:", text: "Recomendações e lembretes personalizados para ajudá-lo a manter sua saúde em dia." }
        ].map((item, index) => (
          <div 
            key={index} 
            className="border px-10 py-8 sm:py-16 flex flex-col gap-4 text-center md:text-left text-[15px] group cursor-pointer rounded-lg transition-all duration-300 hover:bg-primary hover:text-white shadow-md"
          >
            <b className="text-lg group-hover:scale-105 transition-transform">{item.title}</b>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
