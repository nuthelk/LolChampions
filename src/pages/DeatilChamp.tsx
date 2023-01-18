import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { ChampionSingle } from '../interfaces/ChampionSingle';
import { dataChamp } from '../services/lolAPI'
import Info from '../components/Info';
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
            <Info 
                urlImage={urlImage}
                title={dataChampion?.title}
                name={dataChampion?.name}
                tags={dataChampion?.tags}
                lore={dataChampion?.lore}
            />
            <HabilidadesChamp />
        </div>
    )
}

export default DeatilChamp