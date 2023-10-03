import axios from "axios";
import { DataSingle,ChampionSingle } from "../interfaces";
import { Results } from '../interfaces/Champions';




export const dataAPI = async(state: any)  => {
    const {data} = (await axios.get<Results>("https://ddragon.leagueoflegends.com/cdn/13.1.1/data/es_MX/champion.json")).data
    const api = Object.values(data)
    state(api)
}

export const dataChamp = async(state:any, url: string) => {
    const {data} = (await axios.get(url)).data
    const keyChamp = Object.values(data)[0]
    state(keyChamp)
}



