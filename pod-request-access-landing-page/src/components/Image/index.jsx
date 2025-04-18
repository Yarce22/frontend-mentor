import ImgMobile from '../../assets/mobile/image-host.jpg'
import ImgTable from '../../assets/tablet/image-host.jpg'
import ImgDesktop from '../../assets/desktop/image-host.jpg'

const Image = () => {
  return(
    <>
      <picture className='absolute w-full h-full z-0 md:w-[67%] md:-right-16 md:pb-[180px] lg:py-[153px]'>
        <source media='(min-width: 1048px)' srcSet={ImgDesktop} />
        <source media='(min-width: 768px)' srcSet={ImgTable} />
        <img className='w-full h-full' src={ImgMobile} alt="image-description" />
      </picture>
    </>
  )
}

export { Image }