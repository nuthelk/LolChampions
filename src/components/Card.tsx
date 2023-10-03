import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { motion, useAnimationControls } from 'framer-motion';
import { Champion } from '../interfaces';



interface Props {
    name: string;
    id: string;
    data: Champion[];
}


const Card: FC<Props> = ({ name, id, data }) => {

    const controls = useAnimationControls()

    useEffect(() => {
        controls.set({opacity: 0, scale:0.8})
        controls.start({ opacity: 1, scale: 1 })
      }, [data])

    return (
        <motion.div
        initial={{opacity: 0, scale: 0.8}}
        animate={controls}
        transition={{duration: 0.8, delay: 0.3, ease: [0, 0.71, 0.2, 1.01]}}
        viewport={{once: true}}
        className='w-36 h-52 md:w-40 md:h-64 lg:w-48 lg:h-72 relative m-auto mt-10 rounded-md divPadre cursor-pointer'>
            <Link to={`/champion/${id}`}>
                <div className='h-full w-full overflow-hidden rounded-md bg-primary  '>
                    <img className='h-full w-full object-cover object-top scale-110 hover:scale-100 transition-all duration-500' src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`} alt="img" />
                </div>

                <div className='flex w-full h-10 rounded-b-md absolute bg-primary bottom-0 items-center'>
                    <h1 className='text-white font-Signika font-bold uppercase text-lg ml-2 transition-all duration-500'>{name}</h1>
                </div>
            </Link>
        </motion.div >


    )
}

export default Card
