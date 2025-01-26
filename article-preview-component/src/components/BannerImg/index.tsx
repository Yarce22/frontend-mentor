import drawersImg from '../../assets/images/drawers.jpg'

const BannerImg = () => {
  return (
    <div className='w-full h-[200px] rounded-t-[10px]'>
      <img className='w-full h-full rounded-t-[10px] object-cover' src={drawersImg} alt="drawers-img" />
    </div>
  )
}

export {BannerImg}