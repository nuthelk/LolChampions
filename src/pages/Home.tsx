import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Champion } from '../interfaces'
import {dataAPI} from '../services/lolAPI'
import Header from '../components/home/Header';
import Search from '../components/home/Search';

const Home = () => {

    const [data, setData] = useState<Champion[]>([])
    
    const [dataFiltered, setDataFiltered] = useState([])
    useEffect(()=>{
        dataAPI(setData)
    },[])

    useEffect(()=>{
        setDataFiltered(data)
    },[data])
    
  return (
    <div className='w-full min-h-screen home py-10 2xl:px-64 '>
        <Header champions={data} setChampions={setDataFiltered}/>
        <div className='flex flex-wrap gap-3  mx-10 '>
        {
            dataFiltered.map((champ, i) => (
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

