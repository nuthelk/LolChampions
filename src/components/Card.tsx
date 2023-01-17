import React, { FC } from 'react'
import { Champion } from '../interfaces'
import { Link } from "react-router-dom";

interface Props {
    name: string;
    id: string;
}


const Card: FC<Props> = ({ name, id }) => {
    return (


        <div className='w-36 h-52 md:w-40 md:h-64 lg:w-48 lg:h-72 relative m-auto mt-10 rounded-md divPadre cursor-pointer'>
            <Link to={`/champion/${id}`}>
                <div className='h-full w-full overflow-hidden rounded-md '>
                    <img className='h-full w-full object-cover object-top scale-110 hover:scale-100 transition-all duration-500' src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`} alt="img" />
                </div>

                <div className='flex w-full h-10 rounded-b-md absolute bg-primary bottom-0 items-center'>
                    <h1 className='text-white font-Signika font-bold uppercase text-lg ml-2 transition-all duration-500'>{name}</h1>
                </div>
            </Link>
        </div >


    )
}

export default Card

{/* <div className='h-full w-full overflow-hidden rounded-t-md'>
            <img className='h-full w-full object-cover object-top scale-110 hover:scale-100 transition-all duration-500' src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg" alt="img" />
        </div>

        <div className='bg-primary h-10 rounded-b-md'>
            <h1 className='text-white uppercase font-semibold'>Nombre</h1>
        </div> */}