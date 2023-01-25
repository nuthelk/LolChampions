import React, { useState } from "react";
import SearchIcon from "../../assets/icon-search.svg"


const Search = ({champions, setChampions}) => {  
  // console.log(champions);
  const championTypes=[{
    type:"Todos",
    tags:["Assassin","Figther", "Mage", "Marksman", "Support", "Tank"]
  },
  {
    type:"Asesinos",
    tags:["Assassin"]
  },
  {
    type:"Luchadores",
    tags:["Fighter"]
  },
  {
    type:"Magos",
    tags:["Mage"]
  },
  {
    type:"Tiradores",
    tags:["Marksman"]
  },
  {
    type:"Soportes",
    tags:["Support"]
  },
  {
    type:"Tanques",
    tags:["Tank"]
  }]

  const [champioTypeSelected, setChampionTypeSelected]= useState<string>("Todos")

  const dataFiltered=(tags:any)=>{
    let tempDataFiltered= champions.slice()
    tags.length === 1 
    && (tempDataFiltered = tempDataFiltered.filter(champ=>champ.tags.includes(tags[0])))
     
       console.log(tempDataFiltered);
  setChampions(tempDataFiltered)

  }

  const handleChampionType=(type:string,index:number)=>{
    setChampionTypeSelected(type)
    dataFiltered(championTypes[index].tags)
  }

  const onChangeSearch=({target})=>{
    let tempDataFiltered= champions.filter(champ=> champ.id.toLowerCase().includes(target.value.toLowerCase()))
    console.log(tempDataFiltered);
    setChampions(tempDataFiltered)

  }
 
   //a
  return (
    <section className="w-full  flex max-lg:justify-between font-Signika border-solid border-2 border-secondary rounded mt-12 p-2 ">
      <div className="w-fit  border-solid border-r-2 flex items-center gap-2 border-secondary">
        <img className="w-5" src={SearchIcon} alt="Search Icon"/>
        <input onChange={(e)=>{onChangeSearch(e)}} className="w-56 max-lg:w-28 h-10 outline-none  text-white bg-transparent" type="text" placeholder="Buscar" />
      </div>
      <div className="flex gap-4 xl:gap-8 items-center m-auto max-lg:m-0">
        <select className="lg:hidden outline-none  text-white font-semibold bg-transparent">
        {
          championTypes.map((championType, index)=>(
            <option onChange={()=>{handleChampionType(championType.type,index)}} key={championType.type} className=" font-semibold bg-primary ">{championType.type}</option>
          ))
        }
        </select>
        {
          championTypes.map((championType, index)=>(
            <button onClick={()=>{handleChampionType(championType.type,index)}} className={`max-lg:hidden cursor-pointer  text-white font-semibold ${championType.type=== champioTypeSelected && 'text-secondary'} hover:text-secondary uppercase transition-all duration-500`}  key={championType.type}>
              {championType.type}
            </button>
          ))
        }
      </div>
    </section>
  )
};

export default Search;
