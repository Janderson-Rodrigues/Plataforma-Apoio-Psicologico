import React from "react";
import ProfissionaisData from "../data/profissionais.json";
import "./styles/psicologos.css";

function Psicologos() {
  return (
    <>
      <div>
        <ul>
          {ProfissionaisData.map((profissional) => (
            <li key={profissional.id}>
              <h2>{profissional.nome}</h2>
              <p>Especialidades:{profissional.especialidade}</p>
              <p>Preço: R${profissional.preco}</p>
              <img
                src={profissional.imagem}
                alt={profissional.nome}
                className="psicologo-image"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Psicologos;
