import Search from "./Search";
import { motion } from "framer-motion"


const Header=({champions, setChampions})=>{
  return(
    <motion.header 
    initial={{opacity: 0,  y:0}}
    animate={{opacity: 1,  y: 0}}
    transition={{duration: 0.8, delay: 0.1 }}
    className="px-10  w-full flex flex-col justify-center font-Signika items-center">
      <section className="m-auto flex flex-col gap-8 justify-center">
        <h1 className="text-5xl  font-black text-center text-white">ELIGE TU CAMPEÓN</h1>
        <h2 className="w-full lg:w-7/12 m-auto text-lg font-Signika text-white text-center">Con más de 140 campeones, encontrarás el que se ajuste perfectamente a tu estilo de juego. Domina a uno o domínalos a todos.</h2>
      </section>
      <Search champions={champions} setChampions={setChampions}/>
    </motion.header>
  )
};

export default Header;
