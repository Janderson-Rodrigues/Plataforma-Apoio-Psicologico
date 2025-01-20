import React from 'react'
import Especialidade2 from "../images/especialidade2.png"
import Especialidade3 from "../images/especialidade3.png"
import Especialidade4 from "../images/especialidade4.png"
import Especialidade5 from "../images/saude-mental.gif"




const EspecialistasMenu = () => {
  return (
    <div className="flex justify-center gap-8 pt-5 w-full overflow-auto">
  <div className="flex flex-col items-center">
    <img src={Especialidade5} alt="Psicologia Organizacional" className="w-24 h-24 object-cover" />
    <p className="text-center mt-2">Psicologia Organizacional</p>
  </div>
  <div className="flex flex-col items-center">
    <img src={Especialidade2} alt="Psicologia Social" className="w-24 h-24 object-cover" />
    <p className="text-center mt-2">Psicologia Social</p>
  </div>
  <div className="flex flex-col items-center">
    <img src={Especialidade3} alt="Psicologia Escolar ou Educacional" className="w-24 h-24 object-cover" />
    <p className="text-center mt-2">Psicologia Escolar ou Educacional</p>
  </div>
  <div className="flex flex-col items-center">
    <img src={Especialidade4} alt="Psicologia Hospitalar" className="w-24 h-24 object-cover" />
    <p className="text-center mt-2">Psicologia Hospitalar</p>
  </div>
</div>

  )
}

export default EspecialistasMenu
