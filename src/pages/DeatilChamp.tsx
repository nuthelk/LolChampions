import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { ChampionSingle } from '../interfaces/ChampionSingle';
import {dataChamp} from '../services/lolAPI'

const DeatilChamp = () => {
    const [dataChampion, setDataChampion] = useState<ChampionSingle>()
    const {championId} = useParams()
    const url = `http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion/${championId}.json`


    useEffect(()=> {
        dataChamp(setDataChampion, url)
    }, [])
    console.log(dataChampion?.image.full)

  return (
    <div>DeatilChamp</div>
  )
}

export default DeatilChamp