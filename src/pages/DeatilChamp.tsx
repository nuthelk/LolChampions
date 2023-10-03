import { useEffect, useLayoutEffect, useState } from 'react';
import { ChampionSingle } from '../interfaces/ChampionSingle';
import { dataChamp } from '../services/lolAPI'
import Info from '../components/Info';
import HabilidadesChamp from '../components/HabilidadesChamp';
import Skins from '../components/detailChamp/Skins';
import { useLocation, useParams } from 'react-router-dom';



const DeatilChamp = () => {
    const [dataChampion, setDataChampion] = useState<ChampionSingle>()
    const { championId } = useParams()
    const [skinsData, setSkinsData] = useState([])
    const url = `http://ddragon.leagueoflegends.com/cdn/13.1.1/data/es_MX/champion/${championId}.json`
    const urlImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`

    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        dataChamp(setDataChampion, url)
    }, [])

    useEffect(() => {
        getSkinsData(dataChampion)
    }, [dataChampion])


    const getSkinsData = (data: any) => {
        let tempSkins = new Array();
        data && (
            data.skins.forEach(element => (
                tempSkins.push(element)
            ))
        )
        setSkinsData(tempSkins)

    }

    return (
        <>
            <div
                style={{ backgroundImage: `url(${urlImage})` }}
                className={` bg-cover bg-no-repeat bg-center before:bg-[rgba(0,0,0,.7)] before:backdrop-saturate-50 py-2 pb-20 scroll-smooth before:backdrop-blur-sm before:inset-0 before:absolute relative min-h-screen w-full font-Signika flex flex-col items-center `}>
                <Info
                    urlImage={urlImage}
                    title={dataChampion?.title}
                    name={dataChampion?.name}
                    tags={dataChampion?.tags}
                    lore={dataChampion?.lore}
                />
                <HabilidadesChamp abilities={dataChampion?.spells} pasiva={dataChampion?.passive} />

            </div>
            <div>
                <Skins skinsData={skinsData} championId={championId} />
            </div>
        </>
    )
}

export default DeatilChamp