import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { ChampionSingle } from '../interfaces/ChampionSingle';
import { dataChamp } from '../services/lolAPI'
import HabilidadesChamp from '../components/HabilidadesChamp';

const DeatilChamp = () => {
    const [dataChampion, setDataChampion] = useState<ChampionSingle>()
    const { championId } = useParams()
    const url = `http://ddragon.leagueoflegends.com/cdn/13.1.1/data/es_MX/champion/${championId}.json`
    const urlImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`


    useEffect(() => {
        dataChamp(setDataChampion, url)
    }, [])


    return (
        <div
            style={{ backgroundImage: `url(${urlImage})` }}
            className={`bg-cover bg-no-repeat bg-center before:bg-[rgba(0,0,0,.7)] before:backdrop-saturate-50 overflow-auto before:backdrop-blur-sm before:inset-0 before:absolute relative min-h-screen w-full font-Signika flex flex-col items-center `}>
            <div className='relative mt-14 rounded-lg px-4 text-center flex justify-center '>
                <img src={urlImage} alt="" className='rounded-lg max-h-[600px]' />
                
                <p className='text-white italic md:text-xl absolute bottom-14 lg:bottom-20 xl:bottom-24 md:bottom-20 lg:text-3xl '>{dataChampion?.title}</p>

                <div className='flex flex-col items-center bottom-4 md:bottom-6 lg:bottom-0 absolute'>
                    <h1 className='relative text-white italic text-4xl md:text-5xl lg:text-7xl xl:text-8xl uppercase'>{dataChampion?.name}</h1>
                    <div className='flex items-center flex-col justify-around'>
                    </div>
                </div>
            </div>
            <HabilidadesChamp />
        </div>
    )
}

export default DeatilChamp