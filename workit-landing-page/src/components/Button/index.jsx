import PropTypes from "prop-types"

const Button = ({ text }) => {
  return (
    <button className='py-3 px-7 md:px-8 md:text-lg bg-Green text-Purple900 font-bold border border-Green hover:bg-Purple900 hover:text-Green'>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string
}

export default Button