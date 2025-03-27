import React from "react";
import { HiMiniSignal } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8 border-t">
      <div className="container mx-auto flex justify-between items-start px-12">
        
        {/* Primeira Div - Esquerda */}
        <div className="w-1/2 flex flex-col">
          <div className="flex items-center gap-2">
            <HiMiniSignal className="text-[48px] text-primary font-bold" />
            <span className="text-primary font-bold text-[20px]">
              Psicologia Online, terapia para todos!
            </span>
          </div>
          <p className="text-[18px] font-medium leading-relaxed">
            Atendimento psicológico humanizado 
            para promover seu bem-estar emocional. <br />
            Nossa equipe especializada está pronta 
            para cuidar de você com muito cuidado <br />
            e profissionalismo. Agende sua sessão!
          </p>
        </div>

        {/* Segunda Div - Direita */}
        <div className=" flex flex-col gap-4">
          <h3 className="font-semibold text-[20px]">Contatos</h3>
          <ul className="text-sm space-y-2">
            <li className="font-semibold text-[16px]">(85) 3234-5678</li>
            <li className="font-semibold text-[16px]">email@psicologiaonline.com</li>
            <li className="font-semibold text-[16px]">Rua da Felicidade, 1234, 60165-121, Fortaleza-CE</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

