import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8 border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-white font-bold text-2xl"></span>
            </div>
            <span className="text-primary font-bold text-xl">
              Psicologia Online, terapia para todos!
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Encontre Psicólogos por Especialidade
          </p>
          <ul className="text-sm text-gray-500 mt-4 grid grid-cols-2 gap-1">
            <li>
              <a href="">Acompanhamento terapêutico</a>
            </li>
            <li>
              <a href="">Ansiedade</a>
            </li>
            <li>
              <a href="">Autoestima</a>
            </li>
        
            <li>
              <a href="">Depressão</a>
            </li>

            <li>
              <a href="">Estresse</a>
            </li>

            <li>
              <a href="">Psicologia infantil</a>
            </li>
            
            <li className="col-span-2">
              <a href="#" className="text-primary flex items-center">
                Ver mais →
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Contato</h3>
          <ul className="text-sm space-y-2">
            <li>(XX) XXXXX-XXXX</li>
            <li>email@psicologiaonline.com</li>
            <li>
              Rua Xxxx Xxxxxxxx, 0000, Yx Yxxx Yxxxx, Yxxxxxxxxx, Yxxxxxxx-ZZ
            </li>
          </ul>
        </div>

        {/* Links Recomendados */}
        <div>
          <h3 className="font-bold mb-4">Links Recomendados</h3>
          <ul className="text-sm space-y-2">
            <li>Conselho Federal de Psicologia</li>
            <li>Resolução CFP 011/2018</li>
            <li>Código de Ética do Psicólogo</li>
          </ul>
        </div>

        {/* redes sociais */}
        <div>
          <div>
            <img src="" alt="" />
          </div>

          <div>
            <img src="" alt="" />
          </div>

          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
