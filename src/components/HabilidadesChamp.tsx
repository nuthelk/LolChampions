import React, { useState } from 'react'

const HabilidadesChamp = () => {
    const [isActive, setIsActive] = useState("passive")
    console.log(isActive);
    
  return (
    <div className='relative flex flex-col text-white w-[85%] gap-5 mt-10'>
        <h1 className='font-bold text-2xl self-center'>Habilidades</h1>
        <div className='flex gap-4 md:gap-10 mx-auto '>
            <button onClick={()=>{
                setIsActive("passive")
            }} className={`w-full border-[1px] bg-transparent border-transparent rounded-tr-lg ${ isActive == "passive" ? 'border-yellow-400':null}`}>
                <img className='rounded-md ' src="https://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive/Aatrox_Passive.png" alt="Pasive" />
            </button>
            <button onClick={()=>{
                setIsActive("Q")
            }} className={`w-full border-[1px] bg-transparent border-transparent rounded-tr-lg ${ isActive == "Q" ? 'border-yellow-400':null}`}>
                <img className='rounded-md ' src="https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/AatroxQ.png" alt="Q" />
            </button>
            <button onClick={()=>{
                setIsActive("W")
            }} className={`w-full border-[1px] bg-transparent border-transparent rounded-tr-lg ${ isActive == "W" ? 'border-yellow-400':null}`}>
                <img className='rounded-md ' src="https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/AatroxW.png" alt="W" />
            </button>
            <button onClick={()=>{
                setIsActive("E")
            }} className={`w-full border-[1px] bg-transparent border-transparent rounded-tr-lg ${ isActive == "E" ? 'border-yellow-400':null}`}>
                <img className='rounded-md ' src="https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/AatroxE.png" alt="E" />
            </button>
            <button onClick={()=>{
                setIsActive("R")
            }} className={`w-full border-[1px] bg-transparent border-transparent rounded-tr-lg ${ isActive == "R" ? 'border-yellow-400':null}`}>
                <img className='rounded-md ' src="https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/AatroxR.png" alt="R" />
            </button>
        </div>
        <div>
            <p className='font-mono font-thin text-xs'>Pasiva</p>
            <h1 className='text-lg uppercase font-Crimson'>Nombre Habilidad</h1>
            <p className='mt-5 font-thin font-sans text-sm'>Cada cierto tiempo, el siguiente ataque básico de Aatrox inflige daño físico adicional según la vida máxima del objetivo, y lo cura por la cantidad de daño infligido</p>
        </div>
    </div> 
  )
}

export default HabilidadesChamp