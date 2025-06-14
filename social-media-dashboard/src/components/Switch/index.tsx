interface SwitchProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Switch: React.FC<SwitchProps> = ({ theme, setTheme }) => {

  return (
    <div className="flex items-center justify-between">
      <p className={`font-bold text-[0.875rem] text-DarkGrayishBlue lg:mr-3.5 ${theme === "light" ? "text-DarkGrayishBlue" : "text-White"}`}>Dark Mode</p>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`flex items-center w-12 h-6 py-[3px] px-1 ${theme === 'light' ? "bg-toggleLight" : "bg-linear-to-tr from-toggleDark to-toggleDark2"} rounded-full cursor-pointer transition-color duration-300 ease-in-out hover:bg-linear-to-tr from-toggleDark to-toggleDark2`}
      >
        <div className={` w-[18px] h-[18px] rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${theme === 'light' ? 'translate-x-5.5 bg-White' : 'translate-x-0 bg-VeryDarkBlue hover:bg-DarkDesaturatedBlue'}`}></div>
      </button>
    </div>
  )
}

export default Switch
