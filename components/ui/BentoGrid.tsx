'use client'

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import {GlobeDemo} from "./GridGlobe";
import animationData from '@/data/confetti.json';
import Lottie from "react-lottie";
import { useState } from "react";
import { MagicButton } from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  moreInfo,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  moreInfo?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('amincharepoo@gmail.com');

    setCopied(true);
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(84,9,121,0.7455357142857143) 35%, rgba(0,212,255,1) 100%)',
      }}
    >
        <div className={`${id === 6 && 'flex justify-center'} h-full}`}>
            <div className="w-full h-full absolute">
                {img && (
                    <img 
                        src={img}
                        alt={img}
                        className={cn(imgClassName, 'object-cover, object-center')}
                    />
                )}
            </div>
            <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                {spareImg && (
                    <img 
                        src={spareImg}
                        alt={spareImg}
                        className={'object-cover, object-center w-full h-full'}
                    />
                )}
            </div>
            {id === 6 && (
                <BackgroundGradientAnimation>
                    {/* <div className="absolute z-10 flex items-center justify-center text-white font-bold"/> */}
                </BackgroundGradientAnimation>
            )}

            <div className={cn(
                titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col padding-x-5 lg:p-10 md:pl-10 pl-5 ' )}>
                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 whitespace-pre-line">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>
                    <div  className="font-sans text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 whitespace-pre-line ml-0 mt-4 mb-4  ">
                      {moreInfo}
                    </div>
              {id === 2 && <GlobeDemo />}

              {id === 3 && (
                <div className="flex gap-1 lg:gap-2 w-fit absolute -top-2 lg:-right-2 mt-4">
                  <div className="flex flex-col gap-3 lg:gap-5">
                    {['React.js', 'Next.js', 'TypeScript'].map((item) => (
                      <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-ceenter bg-[#10132E]">
                        {item}
                      </span>
                    ))}
                    <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                  </div>
                  <div className="flex flex-col gap-3 lg:gap-5">
                    <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                    {['JavaScript', 'Python', 'Java'].map((item) => (
                      <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-ceenter bg-[#10132E]">
                        {item}
                      </span>
                    ))}
                    
                  </div>
                </div>
              )}

            

            {id === 6 && (
              <div className="mt-5 relative">
                <div className={`absolute -bottom-5 right-0`}>
                  <Lottie options={{
                    loop: copied, 
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYmid slice', 
                    }
                  }} />
                </div>

                <MagicButton 
                  title={copied ? 'Email Copied' : 'Copy my email'}
                  icon={<IoCopyOutline />}
                  position="left"
                  otherClasses="!bg-[#161a31]"
                  handleClick={handleCopy}
                />
              </div>                
            )}
          </div>
      </div>
    </div>
  );
};
