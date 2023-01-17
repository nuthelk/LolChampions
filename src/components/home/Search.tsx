import React, { FC, useState } from "react";
import SearchIcon from "../../assets/icon-search.svg"


const Search: FC<{}> = () => {

  const championTypes=["Todos","Asesinos","Luchadores", "Magos", "Tiradores", "Soportes", "Tanques"]
  const [champioTypeSelected, setChampionTypeSelected]= useState<string>("Todos")

  return (
    <section className="w-full flex max-lg:justify-between font-Signika border-solid border-2 border-secondary rounded mt-12 p-2">
      <div className="w-fit bor border-solid border-r-2 flex items-center gap-2 border-secondary">
        <img className="w-5" src={SearchIcon} alt="Search Icon"/>
        <input className="w-56 max-lg:w-28 h-10 outline-none  text-white bg-transparent" type="text" placeholder="Buscar" />
      </div>
      <div className="flex gap-16 items-center m-auto max-lg:m-0">
        <select className="lg:hidden outline-none  text-white font-semibold bg-transparent">
        {
          championTypes.map((type)=>(
            <option key={type} className=" font-semibold bg-primary ">{type}</option>
          ))
        }
        </select>
        {
          championTypes.map((type)=>(
            <button className="max-lg:hidden cursor-pointer  text-white font-semibold hover:text-secondary uppercase focus:text-secondary active:text-secondary" key={type}>
              {type}
            </button>
          ))
        }
      </div>
    </section>
  )
};

export default Search;
