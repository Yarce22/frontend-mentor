import PropTypes from "prop-types"

const Button = ({ text }) => {
  return (
    <button className='w-[151px] h-[53px] bg-Green text-Purple900 font-bold'>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string
}

export default Button