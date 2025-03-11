import React from 'react'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact" style={{backgroundImage: "url('/footer-grid.svg')"}}>
        {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
            <img 
                src="/footer-grid.svg"
                alt="grid"
                className="w-full h-full opacity-50"
            />
        </div> */}
        
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
                Ready to take <span className="text-purple">your</span> digital presence to the next level?
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">
                Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
            </p>
            <a href="mailto:amincharepoo@gmail.com">
                <MagicButton 
                    title="Let's get in touch" 
                    icon={<FaLocationArrow />} 
                    position={'right'}                
                />
            </a>
        </div>

        <div >
            <div className="flex justify-center items-center md:gap-3 gap-6 mt-10">
                {socialMedia.map((profile) => (
                    <a href={profile.link}>
                        <div key={profile.id} className="w-16 h-16 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                            <img src={profile.img} width={32} height={32}/>
                        </div>
                    </a>
                    
                ))}
            </div>

            <div className="flex mt-10 md:flex-row flex-col justify-center items-center mb-10">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2025 Amin
                </p>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer

