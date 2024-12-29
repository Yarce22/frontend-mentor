import { useContext } from 'react'
import { Context } from '../../assets/Providers'
import PropTypes from 'prop-types'
import './style.css'

const Rating = ({number, id}) => {
  const {optionSelected} = useContext(Context)

 return (
  <>
    <input type="radio" id={id} name='options' className='hidden' />
    <label
      htmlFor={id}
      className='grid place-items-center w-[42px] h-[42px] font-bold text-LightGrey bg-DarkBlue rounded-full hover:bg-Orange hover:text-DarkBlue'
      onClick={() => optionSelected(number)}
    >
      <p>
        {number}
      </p>
    </label>
  </>
 )
}

Rating.propTypes = {
  number: PropTypes.number,
  id: PropTypes.string
}

export default Rating