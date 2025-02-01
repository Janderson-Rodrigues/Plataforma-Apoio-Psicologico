import React from "react";
import { BsFillTelephoneFill } from 'react-icons/bs'

const EntreEmContato = () => {
    return (
        <>
            <div className="fixed bottom-12 right-10 flex flex-col items-center space-x-4">
                <p className="text-2xl font-semibold">Entre em contato!</p>

                <a href="#" className="bg-green-400 p-6 rounded-full shadow-lg cursor-pointer hover:bg-green-500 transition duration-300">
                    <BsFillTelephoneFill className="text-white text-5xl" />
                </a>
            </div>
        </>
    );
}

export default EntreEmContato;