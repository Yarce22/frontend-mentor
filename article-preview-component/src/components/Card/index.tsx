import { useState } from "react"
import { BannerImg } from "../BannerImg"
import { Body } from "../Body"
import { ShareMedia } from "../ShareMedia"

const Card = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openShareMedia = () => {
    setIsOpen(true)
  }

  const closeShareMedia = () => {
    setIsOpen(false)
  }

  return (
    <article className='relative w-[90%] max-w-[327px] lg:max-w-[730px] lg:h-[280px] flex flex-col lg:flex-row bg-white rounded-[10px]'>
      <BannerImg />
      <Body openShareMedia={openShareMedia}/>
      <ShareMedia isOpen={isOpen} closeShareMedia={closeShareMedia} />
    </article>
  )
}

export { Card }