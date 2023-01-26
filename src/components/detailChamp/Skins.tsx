import React, { FC, useEffect, useState } from "react";
import { ChampionSingle } from "../../interfaces";
import { Champion } from '../../interfaces/Champions';
import { motion } from "framer-motion"



interface Props {
  skinsData? : any;
  championId?: string;
}


const Skins: FC<Props> = ({ skinsData, championId }) => {

  const [skinSelected, setSkinSelected]=useState({
    name:"default",
    img:`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`
  }
    )

  const handleSkin=(num:number, name:string)=>{
    setSkinSelected({
      name:name,
      img:`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${num}.jpg`

    }
      )
  }

  return (
    <>
      {/* <h2 className="relative mt-14 text-white font-Signika text-xl md:text-5xl lg:text-7xl xl:text-8xl uppercase">Aspectos</h2> */}
      <motion.section 
        initial = {{opacity: 0}}
        whileInView = {{opacity: 1 }}
        transition={{delay: 0.5, duration: 0.5}}
        viewport={{once: true}}
      className="flex w-full flex-col items-center px-4 mb-10 ">
        <aside className="relative mt-14 px-4 rounded-lg flex flec-col justify-center text-center">
          <img className="max-h-[600px] rounded-md" src={skinSelected.img} alt={skinSelected.name}/>
          <div className="flex flex-col items-center bottom-4 md:bottom-6 lg:bottom-0 absolute" >
            <h3 className=" relative text-white font-Signika italic text-xl md:text-5xl lg:text-7xl xl:text-8xl uppercase">{skinSelected.name}</h3>
          </div>
        </aside>
        <div className= "w-3/4 xl:w-3/6 flex relative gap-10 p-4 overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-secondary scrollbar-track-primary ">
        {
          skinsData.map((skin) => {
            const urlImage= `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${skin.num}.jpg`;
            return (
              <button onClick={()=>{handleSkin(skin.num, skin.name)}} key={skin.name} className={`max-w-[300px] min-w-[150px] max-h-48 rounded-sm border-2 ${skinSelected.name === skin.name? 'border-secondary': 'border-transparent'}  scale-110 hover:scale-100 transition-all duration-500`}>
                <img  className=" object-contain rounded-sm" src={urlImage} />
              </button>
            )
          })
        }
        </div>

      </motion.section>
    </>
  )
};

export default Skins;
