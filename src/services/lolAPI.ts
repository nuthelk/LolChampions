import axios from "axios";
import { Champion, Results } from '../interfaces/Champions';

const dataAPI = async(state: any)  => {
    const {data} = await (await axios.get<Results>("https://ddragon.leagueoflegends.com/cdn/13.1.1/data/es_MX/champion.json")).data
    const api = Object.values(data)
    state(api)
}


export default dataAPI