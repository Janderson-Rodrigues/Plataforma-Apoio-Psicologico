import React from 'react'
import PropTypes from 'prop-types'

const Perguntas = ({data, height, width, keyActtr, valAttr}) => {
  return (
    <div className="flex flex-col items-center justify-center" style={{width}}>
        {data.map((item, index) => (
            <div className='flex flex-col items-center '>
                <div className="text-black  bg-white text-xl flex items-center justify-between cursor-pointer">
                    <span>{item[keyActtr]}</span>
                    <span>+</span>
                </div>
                <div className="transition-all duration-500 ease-in-out" style={{maxHeight: height}}>{item[valAttr]}</div>
            </div>
        ))}
      <h1 className='text-2xl font-bold text-center mb-8'>Perguntas frequentes</h1>
      
    </div>
  )
}

export default Perguntas
