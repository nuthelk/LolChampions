import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Champion } from '../interfaces'
import {dataAPI} from '../services/lolAPI'
import Header from '../components/home/Header';

const Home = () => {

    const [data, setData] = useState<Champion[]>([])
    

    useEffect(()=>{
        dataAPI(setData)
    },[])
    
  return (
    <div className='w-full h-full home py-4'>
        <Header />
        <div className='flex flex-wrap gap-1 w-4/5 mx-auto '>
        {
            data.map((champ, i) => (
                <Card key={champ.id}
                name={champ.name}
                id={champ.id}
                />
            ))
        }
        </div>
    </div>
    
  )
}

export default Home

