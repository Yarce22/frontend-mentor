import drawersImg from '../../assets/images/drawers.jpg'

const BannerImg = () => {
  return (
    <div className='relative w-full h-[200px] lg:w-[285px] lg:h-[280px] rounded-t-[10px] lg:rounded-none lg:rounded-l-[10px] overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <img className='w-full h-full rounded-t-[10px] lg:rounded-none lg:rounded-l-[10px] object-cover' src={drawersImg} alt="drawers-img" />
      </div>
    </div>
  )
}

export {BannerImg}