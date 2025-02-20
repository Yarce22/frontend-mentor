import shareIconWhite from '../../assets/images/icon-share-white.svg'
import fbIcon from '../../assets/images/icon-facebook.svg'
import twitterIcon from '../../assets/images/icon-twitter.svg'
import pinterestIcon from '../../assets/images/icon-pinterest.svg'
import { ButtonMedia } from '../../types'

interface ShareMediaProps extends ButtonMedia {
  closeShareMedia: () => void
}

const socialMedia = [fbIcon, twitterIcon, pinterestIcon]

const ShareMedia: React.FC<ShareMediaProps> = ({ isOpen, closeShareMedia }) => {
  return (
    <div className={`${isOpen ? "flex" : "hidden"} absolute rounded-b-[10px] bottom-0  justify-between items-center w-full px-[32px] py-[22px] bg-Very-Dark-Grayish-Blue`}>
      <div className='flex'>
        <p className='pr-5 text-Grayish-Blue tracking-[0.31rem]'>SHARE</p>
        <div className='flex gap-4'>
          {socialMedia.map((item, index) => (
            <img
              key={index}
              src={item}
              alt="socialMedia-icon"
              className='cursor-pointer w-5 h-5'
            />
          ))}
        </div>
      </div>
      <button onClick={closeShareMedia} className='cursor-pointer grid place-items-center w-8 h-8 bg-Desaturated-Dark-Blue rounded-full'>
        <img className='' src={shareIconWhite} alt="share-icon" />
      </button>
    </div>
  )
}

export { ShareMedia }