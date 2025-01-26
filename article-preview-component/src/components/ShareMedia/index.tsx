import shareIconWhite from '../../assets/images/icon-share-white.svg'
import fbIcon from '../../assets/images/icon-facebook.svg'
import twitteIcon from '../../assets/images/icon-twitter.svg'
import pinterestIcon from '../../assets/images/icon-pinterest.svg'

const socialMedia = [fbIcon, twitteIcon, pinterestIcon]

const ShareMedia = () => {
  return (
    <div className='relative bottom-0 flex justify-between px-[32px] py-[22px] bg-Very-Dark-Grayish-Blue'>
      <div className='flex'>
        <p>share</p>
        {socialMedia.map(item => (
          <img src={item} alt="socialMedia-icon" />
        ))}
      </div>
      <div className='fill-white'>
        <img className='fill-white' src={shareIconWhite} alt="share-icon" />
      </div>
    </div>
  )
}

export { ShareMedia }