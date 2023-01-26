import React, { FC, useEffect, useState } from 'react'
import { motion, useAnimationControls } from "framer-motion"
import { Passive, Spell } from '../interfaces';

interface Props {
    abilities:Spell[];
    pasiva:Passive;
}

const HabilidadesChamp:FC<Props>  = ({abilities,pasiva}) => {
    
    const [isActive, setIsActive] = useState("passive")
    const [information, setInformation] = useState("")
    const [name, setName] = useState("")
    const controls = useAnimationControls()

    useEffect(() => {
        controls.set({opacity: 0})
        controls.start({ opacity: 1 })
      }, [isActive])
    
  return (
    <motion.div
        initial = {{opacity: 0}}
        whileInView = {{opacity: 1 }}
        transition={{delay: 0.5, duration: 1}}       
    className='relative flex flex-col text-white font-Signika motion-safe:animate-safe gap-10 px-4 w-[90%] md:w-[95%] lg:w-[90%] xl:w-[50%] mt-10 border-[1px] border-slate-600'>
        <h1 className='font-bold text-2xl self-center'>Habilidades</h1>
        <div className='flex gap-4 md:gap-10 mx-auto '>
            <button onClick={()=>{
                setIsActive("passive");
                setInformation(pasiva.description);
                setName(pasiva.name)
            }} className={`w-full border-[1px] bg-transparent border-transparent transition-all duration-500 rounded-tr-lg ${ isActive == "passive" ? 'border-yellow-400 -translate-y-5 ':null}`}>
                <img className='rounded-md ' src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive/${pasiva?.image.full}`} alt="Pasive" />
            </button>
            {
                abilities?.map((spell,index) => (
                    <button key={index} onClick={()=>{
                        setIsActive(spell.id);
                        setInformation(spell.description);
                        setName(spell.name)
                    }} className={`w-full border-[1px] bg-transparent border-transparent transition-all duration-500 rounded-tr-lg ${ isActive == spell.id ? 'border-yellow-400 -translate-y-5 ':null}`}>
                        <img className='rounded-md ' src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/${spell.image.full}`} alt="spell" />
                    </button>
                ))
            }
        </div>
        
        <motion.div
            initial={{opacity: 0}}
            animate={controls}
            transition={{duration: 1}}
        className='mt-10 flex flex-col md:gap-2 mb-16 w-72 h-64 md:w-[500px] mx-auto'>
            <p className='font-mono font-thin text-xs'>{isActive=="passive" ? "Passive": "Spell"}</p>
            <h1 className='text-lg uppercase '>{name ? name : pasiva?.name}</h1>
            <p className='mt-5 font-thin font-sans text-md'>{information ? information : pasiva?.description}</p>
        </motion.div>
    </motion.div> 
  )
}

export default HabilidadesChamp