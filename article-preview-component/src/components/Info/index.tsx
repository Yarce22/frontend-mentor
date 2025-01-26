import shareIcon from '../../assets/images/icon-share.svg'
import avatarImg from '../../assets/images/avatar-michelle.jpg'

const Info = () => {
  return (
    <div className='flex justify-between items-center pb-5'>
      <div className='flex'>
        <div className='w-[40px] h-[40px] mr-4 rounded-full'>
          <img className='w-full h-full rounded-full' src={avatarImg} alt="profile-photo" />
        </div>
        <div>
          <p className='font-bold text-Very-Dark-Grayish-Blue'>Michelle Appleton</p>
          <p className='text-Grayish-Blue'>28 Jun 2020</p>
        </div>
      </div>
      <button className='grid place-items-center w-[32px] h-[32px] bg-Light-Grayish-Blue rounded-full'>
        <img src={shareIcon} alt="share-icon" />
      </button>
    </div>
  )
}

export { Info }
