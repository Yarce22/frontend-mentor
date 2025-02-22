import { useState } from 'react'
import rightArrow from '../../../public/images/icon-arrow.svg'
import error from '../../../public/images/icon-error.svg'

const Input = () => {
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [showMsn, setShowMsn] = useState<boolean | undefined>()

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setIsValidEmail(validateEmail(e.target.value))
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isValidEmail) {
      console.log('Email is valid')
    } else {
      console.log('Email is invalid')
    }
  }

  const onShowMsn = () => {
    if (isValidEmail) {
      setShowMsn(true)
      setEmail('')
    } else {
      setShowMsn(false)
    }
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className='relative mt-8 w-full'
    >
      <input
        type="text"
        placeholder='Email Address'
        onChange={handleChange}
        value={email}
        className={`w-full h-12 pl-6 rounded-[28px] ${showMsn || showMsn === undefined ? 'border-desaturated-red border' : 'border-red-400 border-[3px]'} placeholder-desaturated-red-placeholder`}
      />
      {showMsn === false
        && <img className='absolute right-18 top-3' src={error} alt='error'/>
      }
      <button
        onClick={onShowMsn}
        type='submit'
        className='absolute right-0 w-16 h-12 bg-linear-135 from-[#F8BFBF] to-[#EE8B8B] rounded-3xl shadow-lg cursor-pointer'
      >
        <img className='my-0 mx-auto' src={rightArrow} alt="Right-Arrow" />
      </button>
      {showMsn === undefined && <p></p>}
      {showMsn && <p className='pl-6 pt-2 text-[14px]'>Thank you for send your email!</p>}
      {showMsn === false && <p className='pl-6 pt-2 text-red-500 text-[14px]'>Please provide a valid email</p>}
    </form>
  )
}

export { Input }