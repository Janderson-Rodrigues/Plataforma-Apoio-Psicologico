import React from 'react'
import Especialidade1 from "../images/saude-mental1.gif"
import Especialidade2 from "../images/depressao.gif"
import Especialidade3 from "../images/familia.gif"
import Especialidade4 from "../images/tdah.gif"
import Especialidade5 from "../images/saude-mental.gif"
import Aos from 'aos';
import 'aos/dist/aos.css';
// ..
Aos.init();




const EspecialistasMenu = () => {
  return (
  <div className="flex justify-center gap-8 pt-5 w-full overflow-auto">
      <div className="flex flex-col items-center" >
      <img src={Especialidade1} alt="Psicologia Organizacional" className="w-24 h-24 object-cover"/>
      <p className="text-center mt-2" data-aos="zoom-in">Saude Mental</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Especialidade5} alt="Psicologia Organizacional" className="w-24 h-24 object-cover"/>
      <p className="text-center mt-2" data-aos="zoom-in">Psicologia Organizacional</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Especialidade2} alt="Psicologia Social" className="w-24 h-24 object-cover" />
      <p className="text-center mt-2" data-aos="zoom-in">Psicologia Social</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Especialidade3} alt="Psicologia Escolar ou Educacional" className="w-24 h-24 object-cover" />
      <p className="text-center mt-2" data-aos="zoom-in">Psicologia Escolar ou Educacional</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={Especialidade4} alt="Psicologia Hospitalar" className="w-24 h-24 object-cover" />
      <p className="text-center mt-2" data-aos="zoom-in">Psicologia Hospitalar</p>
    </div>
  </div>
  

  )
}

export default EspecialistasMenu
