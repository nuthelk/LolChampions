import React, { FC } from "react";
import Search from "./Search";

const Header: FC<{}>=()=>{
  return(
    <header className="mt-20 px-10 w-screen flex flex-col justify-center">
      <section className="m-auto flex flex-col gap-8 justify-center">
        <h1 className="text-5xl font-Crimson font-black text-center text-white">ELIGE TU CAMPEÓN</h1>
        <h2 className="w-full lg:w-7/12 m-auto text-lg font-Signika text-white text-center">Con más de 140 campeones, encontrarás el que se ajuste perfectamente a tu estilo de juego. Domina a uno o domínalos a todos.</h2>
      </section>
      <Search/>
    </header>
  )
};

export default Header;
