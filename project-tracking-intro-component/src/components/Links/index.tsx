interface Links {
  isMobile: boolean
}

const Links: React.FC<Links> = ({ isMobile }) => {
  return (
    <>
      <li className="relative inline-block group">
        <a href="/" className="text-[18px] text-VeryDarkBlue font-bold font-BarlowCondensed cursor-pointer">PRODUCT</a>
        <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-VeryDarkBlue transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
      </li>
      <li className="relative inline-block group">
        <a href="/" className="text-[18px] text-VeryDarkBlue font-bold font-BarlowCondensed cursor-pointer">FEATURES</a>
        <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-VeryDarkBlue transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
      </li>
      <li className="relative inline-block group">
        <a href="/" className="text-[18px] text-VeryDarkBlue font-bold font-BarlowCondensed cursor-pointer">PRICING</a>
        <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-VeryDarkBlue transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
      </li>
      
      {isMobile
        ? (
            <hr className="w-full my-4 border border-LightGrayishBlue" />
          )
        : (
            <div className="w-1.5 h-1.5 rounded-full bg-GrayishBlue"></div>
          )
        }

      <li className="relative inline-block group">
        <a href="/" className="text-[18px] text-GrayishBlue font-bold font-BarlowCondensed cursor-pointer">LOGIN</a>
        <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-GrayishBlue transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
      </li>
    </>
  )
}

export { Links }