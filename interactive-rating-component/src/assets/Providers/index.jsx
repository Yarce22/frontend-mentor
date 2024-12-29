import { createContext, useState } from "react"
import PropTypes from "prop-types"

const Context = createContext()

const Provider = ({ children }) => {

  const [isQualified, setIsQualified] = useState(true)
  const [qualification, setQualification] = useState(null)

  const qualified = () => {
    setIsQualified(true)
  }

  const optionSelected = (numb) => {
    setQualification(numb)
  }

  return (
    <Context.Provider value={{isQualified, setIsQualified, setQualification, qualification, qualified, optionSelected}}>
      {children}
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node
}

export { Context, Provider }