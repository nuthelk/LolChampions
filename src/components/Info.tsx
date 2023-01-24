import { FC } from "react";

interface Props {
    urlImage: string;
    title?: string;
    name?: string;
    tags?: string[];
    lore?: string;
}


const Info: FC<Props> = ({ urlImage, title, name, tags, lore }) => {
    console.log(tags)
    return (
        <div className=' relative mt-14 rounded-lg px-4 text-center flex flex-col justify-center text-white '>
            <img src={urlImage} alt="" className='rounded-lg max-h-[600px] imagenChamp' />

            <div className='flex flex-col relative items-center -mt-24 textSombra  '>
                <p className=' italic text-lg md:text-2xl lg:text-4xl textSombra '>{title}</p>
                <h1 className=' italic bottom-4  text-4xl md:text-5xl lg:text-7xl xl:text-8xl uppercase'>{name}</h1>
                <div className=' flex flex-col lg:flex-row items-center py-4  justify-center mt-2 border-[1px] border-slate-600  '>

                    <div className='flex items-center gap-12 g:mt-8 border-b-[1px] pb-4 w-[40%] justify-center lg:border-b-0 lg:w-full bg-transparent'>
                        {
                            tags?.map((tag, i) => (
                                <div key={i}>
                                    <p>#{i+1} Rol</p>
                                    <p className='text-amber-400 md:text-xl'>{tag}</p>
                                </div>
                            ))
                        }

                    </div>
                    <div className='px-8 text-justify flex justify-center items-center max-w-3xl pt-4 border-slate-600 lg:pt-0 lg:w-full lg:border-l-[1px] '>
                        <p>{lore}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info