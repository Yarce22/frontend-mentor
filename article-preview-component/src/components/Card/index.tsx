import { BannerImg } from "../BannerImg"
import { Body } from "../Body"
import { ShareMedia } from "../ShareMedia"

const Card = () => {
  return (
    <article className='absolute flex flex-col bg-white rounded-[10px]'>
      <BannerImg />
      <Body />
      <ShareMedia />
    </article>
  )
}

export { Card }