import React from 'react'
import Header from '../componets/Header'
import EspecialistasMenu from './EspecialistasMenu'
import Body from './Body'
import Footer from '../componets/Footer'
import CardComents from '../componets/CardComents'

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
