import React from "react";

const CardComents = () => {
  const testimonials = [
    "As consultas na plataforma que trouxe mais segurança pra minha vida profissional, além de conforto. Com uma equipe que me auxilia sempre que preciso. A melhor plataforma com que trabalhei até agora e não deixo mais eles.",
    "A PsyMeet realiza um acompanhamento dos profissionais, sempre muito atentos ao feedback sobre a demanda, e abertos em manter alinhado o interesse do profissional, da plataforma e paciente.",
    "Estou adorando usar a plataforma de ajuda psicologica, tenho obtido muito retorno, toda semana tem possíveis novos pacientes entrando em contato. Recomendo bastante.",
    "Minha experiência atendendo com a plataforma está sendo muito satisfatória, a equipe é muito solícita e competente com seus clientes.",
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">O que dizem nossos pacientes?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-right">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary rounded-xl p-4 text-center shadow-md"
            >
              <p className="text-sm text-white">{testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComents;
