import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Champion } from '../interfaces'
import {dataAPI} from '../services/lolAPI'
import Header from '../components/home/Header';
import Search from '../components/home/Search';

const Home = () => {

    const [data, setData] = useState<Champion[]>([])
    
    const [dataFiltered, setDataFiltered] = useState()
    useEffect(()=>{
        dataAPI(setData)
    },[])

    useEffect(()=>{
        setDataFiltered(data)
    },[data])
    
  return (
    <div className='w-full h-full home py-4'>
        <Header champions={data} setChampions={setDataFiltered}/>
        <div className='flex flex-wrap gap-1 w-4/5 mx-auto '>
        {
            dataFiltered?.map((champ, i) => (
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

