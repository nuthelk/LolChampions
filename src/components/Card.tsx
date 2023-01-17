import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-wrap gap-1 w-4/5 mx-auto'>

        <div className='w-36 h-52 md:w-40 md:h-64 lg:w-48 lg:h-72 relative m-auto mt-10 rounded-md divPadre'>

            <div className='h-full w-full overflow-hidden rounded-md '>
                <img className='h-full w-full object-cover object-top scale-110 hover:scale-100 transition-all duration-500' src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg" alt="img" />
            </div>

            <div className='flex w-full h-10 rounded-b-md absolute bg-primary bottom-0 items-center'>
                <h1 className='text-white uppercase font-medium ml-2 transition-all duration-500'>Nombre</h1>
            </div>
        </div>

    </div>
    
  )
}

export default Card

{/* <div className='h-full w-full overflow-hidden rounded-t-md'>
            <img className='h-full w-full object-cover object-top scale-110 hover:scale-100 transition-all duration-500' src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg" alt="img" />
        </div>

        <div className='bg-primary h-10 rounded-b-md'>
            <h1 className='text-white uppercase font-semibold'>Nombre</h1>
        </div> */}