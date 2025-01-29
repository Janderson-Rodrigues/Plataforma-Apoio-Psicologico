import React from 'react'
import Header from '../componets/Header'
import EspecialistasMenu from './EspecialistasMenu'
import Body from './Body'
import CardComents from '../componets/CardComents'
import Perguntas from '../componets/Perguntas'

const Home = () => {
  return (
    <div>
      <Header />
      <EspecialistasMenu />
      <Body />
      <CardComents />
      </div>
  )
}

export default Home
