import React from 'react'
import Header from '../componets/Header'
import EspecialistasMenu from './EspecialistasMenu'
import Body from './Body'
import CardComents from '../componets/CardComents'
import Cadastro from '../componets/Cadastro'  // importando o componente Cadastro

const Home = () => {
  return (
    <div>
      <Header />
      <EspecialistasMenu />
      <Body />
      <CardComents />
      <Cadastro />  {/* Inserindo o componente Cadastro */} 
      </div>
  )
}

export default Home
