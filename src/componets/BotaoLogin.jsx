import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const BotaoLogin = () => {
  return (
    <div>
        <button className='px-3 py-2 text-sm font-medium text-white bg-indigo-400 rounded-full hover:bg-primary transition data-aos="fade-down"'>
            <Link to="/login">Iniciar Consulta</Link>
        </button>
      
    </div>
  )
}

export default BotaoLogin

