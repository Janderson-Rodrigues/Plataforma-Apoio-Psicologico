import React from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Navbar = () => {

  const navigate = useNavigate();

  //aqui é um comentario sobre estas const 
  const [ShowMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb5 border-b border-b-gray-400'>
      <img className='w-44 cursor-pointer' src='' alt="" />
      <ul className='hidden md:flex items-start gap-20 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to='doctors'>
          <li className='py-1'>PSICOLOGOS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to='/about'>
          <li className='py-1'>SOBRE</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to='/contact'>
          <li className='py-1'>CONTATO</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

      </ul>
      <div className='flex items-center gap-4'>
        {
          token
          ? <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src='' alt="" />
            <img className='w-2.5  ' src={assets.dropdown_icon} alt="" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>Meu Perfil</p>
                <p onClick={()=>navigate('my-appointment')} className='hover:text-black cursor-pointer'>My Appointment</p>
                <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
          :<button onClick={()=> navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Cria Conta</button>
        }
        
      </div>
    </div>
  )
}

export default Navbar;
