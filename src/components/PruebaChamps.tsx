import { FC, useEffect, useState } from "react";
import { Champion } from "../interfaces";
import dataAPI from '../services/lolAPI';



const PruebaChamps= ({}) => {

    const [data, setData] = useState<Champion[]>([])

    useEffect(()=>{
        dataAPI(setData)
    },[])
    
    console.log(data)


  return (
    <div>
        {
            data.map((champion) => (
                <h1 key={champion.id}>{champion.name}{champion.image.full}</h1>
            ))
        }
        
    </div>
  )
}

export default PruebaChamps