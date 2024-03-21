import React, { useState, useEffect } from 'react'
import {ArrowLeft, ArrowRight} from '../Components/Svg'

const data = [
    'https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg',
    'https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg',
    'https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg',
]

const Banner = () => {

    const [current, setCurrent] = useState(() => {return 0})

    const prevSlide = () =>{
        setCurrent(current === 0 ? data.length - 1 : current - 1)
    }

    const nextSlide = () =>{
        setCurrent(current === data.length - 1  ? 0 : current + 1)
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
          nextSlide();
        }, 5000); // Adjust the interval duration as needed (in milliseconds)
    
        return () => {
          clearInterval(intervalId); // Clean up the interval on component unmount
        };
      }, [current]);

return (
    <div className = 'w-full'>
        <div className='w-full h-auto overflow-hidden'>
            <div className='w-full h-[550px] relative'>
                <div className='400-[400] h-full flex transition:transform duration-1000' 
                    style={{transform: `translateX(-${current * 100}vw)`}}>
                        {data.map((imgSrc, index) => (
                                <img key={index} src={imgSrc} alt={`Slide ${index}`} className="w-screen h-full object-cover" loading="priority" />
                                ))}
                </div>
                <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
                    <div onClick = {prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center
                        hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                        <ArrowLeft />
                    </div>
                    <div onClick = {nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center
                        hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                        <ArrowRight />
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Banner