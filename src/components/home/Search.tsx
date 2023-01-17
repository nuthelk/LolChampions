import React, { FC } from "react";
import SearchIcon from "../../assets/icon-search.svg"


const Search: FC<{}> = () => {

  const championTypes=["Todos","Asesinos","Luchadores", "Magos", "Tiradores", "Soportes", "Tanques"]

  return (
    <section className="w-full flex max-lg:justify-between border-solid border-2 border-primary rounded mt-12 p-2">
      <div className="w-fit bor border-solid border-r-2 flex items-center gap-2 border-primary">
        <img className="w-5" src={SearchIcon} alt="Search Icon"/>
        <input className="w-40 max-lg:w-28 h-10 outline-none font-serif" type="text" placeholder="Buscar" />
      </div>
      <div className="flex gap-4 items-center m-auto max-lg:m-0">
        <select className="lg:hidden outline-none font-serif font-semibold">
        {
          championTypes.map((type)=>(
            <option className="font-serif font-semibold">{type}</option>
          ))
        }
        </select>
        {
          championTypes.map((type)=>(
            <button className="max-lg:hidden cursor-pointer font-serif font-semibold hover:text-secondary  focus:text-secondary" key={type}>
              {type.toUpperCase()}
            </button>
          ))
        }
      </div>
    </section>
  )
};

export default Search;
