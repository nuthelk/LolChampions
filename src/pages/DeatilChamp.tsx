import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { ChampionSingle } from '../interfaces/ChampionSingle';
import {dataChamp} from '../services/lolAPI'

const DeatilChamp = () => {
    const [dataChampion, setDataChampion] = useState<ChampionSingle>()
    const {championId} = useParams()
    const url = `http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion/${championId}.json`
    const urlImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`


    useEffect(()=> {
        dataChamp(setDataChampion, url)
    }, [])


  return (
    <div 
    style={{backgroundImage:`url(${urlImage})`}}
    className={`bg-cover bg-center before:bg-[rgba(0,0,0,.7)]  before:backdrop-blur-sm before:inset-0 before:absolute relative h-screen w-screen font-Signika flex flex-col items-center `}>
        <div className='relative mt-14 rounded-lg px-4  '>
            <img src={urlImage} alt="" className='rounded-lg' />
            <p>{dataChampion?.title}</p>
        </div>
        <div className=''>
            <h1 className='-mt-16  relative text-white italic text-5xl uppercase'>{dataChampion?.name}</h1>
        </div>
    </div>
  )
}

export default DeatilChamp