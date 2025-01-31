import React from "react";
import ProfissionaisData from "../data/profissionais.json";
import "./styles/psicologos.css";

function Psicologos() {
  return (
    <>
      <div className="psicologo-container">
        <div>
          {ProfissionaisData.map((profissional) => (
            <div key={profissional.id} className="psicologo-card">
              <img
                src={profissional.imagem}
                alt={profissional.nome}
                className="psicologo-image"
              />
              <h2 className="psicologo-name">{profissional.nome}</h2>
              <p>Especialidades:{profissional.especialidade}</p>
              <p className="psicologo-price">Preço: R${profissional.preco}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Psicologos;
