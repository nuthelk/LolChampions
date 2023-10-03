import React, { FC, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  skinsData?: any;
  championId?: string;
}

const Skins: FC<Props> = ({ skinsData, championId }) => {
  const [skinSelected, setSkinSelected] = useState({
    name: "default",
    img: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`
  });

  const containerRef = useRef(null);

  const handleSkin = (num: number, name: string) => {
    setSkinSelected({
      name: name,
      img: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${num}.jpg`
    });
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className={`flex pb-20  w-full flex-col items-center px-4 `}
      >
        <aside className="relative mt-14 px-4  rounded-lg flex flex-col items-center justify-center text-center  ">

          <motion.img
            key={skinSelected.img}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0.8, }}
            transition={{ duration: 0.3 }}
            className="h-auto rounded-md"
            src={skinSelected.img}
            alt={skinSelected.name}
          />

          <div className="flex flex-col items-center left-10 lg:top-5  absolute">
            <h3 className="stroke-slate-900 bg-gray-800 px-2 py-2 bg-opacity-30 rounded-lg relative text-white font-Signika italic text-xl  uppercase">
              {skinSelected.name}
            </h3>
          </div>
          <div
            ref={containerRef}
            className="w-[50%] rounded-lg bg-slate-700 bg-opacity-70 md:absolute  flex bottom-0 bg-transparent gap-10 p-4 overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-secondary scrollbar-track-primary"
          >
            {skinsData.map((skin) => {
              const urlImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${skin.num}.jpg`;
              return (
                <motion.button
                  onClick={() => {
                    handleSkin(skin.num, skin.name);
                  }}
                  key={skin.name}
                  className={`max-w-[300px] min-w-[150px] max-h-48 rounded-sm border-2 ${skinSelected.name === skin.name ? 'border-secondary' : 'border-transparent'}  scale-110 hover:scale-100 transition-all duration-500`}
                >
                  <img className=" object-contain rounded-sm" src={urlImage} alt={skin.name} data-skin={skin.name} />
                </motion.button>
              );
            })}
          </div>
        </aside>
      </motion.section>
    </>
  );
};

export default Skins;
