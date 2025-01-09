import PropTypes from "prop-types"
import { createContext, useState } from "react"

const Context = createContext()

const Provider = ({ children }) => {
  const [inputValue, setInputValue] = useState('') 
  const [validEmail, setValidEmail] = useState(true) 

  return(
    <Context.Provider value={{inputValue, setInputValue, validEmail, setValidEmail}}>
      {children}
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node
}

export { Context, Provider }