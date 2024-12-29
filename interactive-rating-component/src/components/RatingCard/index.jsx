import { useContext } from 'react'
import { Context } from '../../assets/Providers'
import Rating from '../Rating/'
import starIcon from '../../assets/images/icon-star.svg'

const RatingCard = () => {
  const { isQualified, qualified } = useContext(Context)

  const ratings = [1, 2, 3, 4, 5]

  
  return (
    <main className={`p-6 rounded-2xl bg-gradient-to-b from-[#232A34] to-[#181E27] ${isQualified ? 'hidden' : 'block'}`}>
        <div className='grid place-items-center w-10 h-10 bg-DarkBlue rounded-full'>
          <img src={starIcon} alt="star-icon" />
        </div>
        <h1 className='py-4 text-White text-2xl font-bold'>How did we do?</h1>
        <p className='text-LightGrey text-sm leading-6'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className='flex justify-between py-6 cursor-pointer'>
          {ratings.map((rating) => (
            <Rating key={rating} number={rating} id={`option${rating}`} />
          ))}
        </div>
        <button className='w-full h-11 bg-Orange rounded-3xl font-bold text-DarkBlue text-sm tracking-widest hover:bg-White' onClick={qualified}>SUBMIT</button>
      </main>
  )
}

export default RatingCard