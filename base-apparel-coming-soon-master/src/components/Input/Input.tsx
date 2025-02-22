import rightArrow from '../../../public/images/icon-arrow.svg'

const Input = () => {
  return (
    <form>
      <input type="text" placeholder='Email Address' />
      <button>
        <img src={rightArrow} alt="Right-Arrow" />
      </button>
    </form>
  )
}

export { Input }