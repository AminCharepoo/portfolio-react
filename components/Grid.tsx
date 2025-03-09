import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'



const Grid = () => {
  return (
   <section id="about">
    <BentoGrid>
        {gridItems.map(({ id, title, description, moreInfo, className, img, imgClassName, titleClassName, spareImg}) => (
            <BentoGridItem 
                id={id}
                key={id}
                title={title}
                description={description}
                moreInfo={moreInfo}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
            />
        ))}
    </BentoGrid>
   </section>
  )
}

export default Grid
