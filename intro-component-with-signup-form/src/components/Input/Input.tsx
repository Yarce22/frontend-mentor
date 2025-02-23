interface InputProps {
  type: string,
  placeholder: string,
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full mb-4 pl-5 border h-14 border-[#DEDEDE] rounded-[5px] placeholder-Dark-blue-placeholder text-[14px] font-semibold text-Dark-blue"
    />
  )
}

export { Input }