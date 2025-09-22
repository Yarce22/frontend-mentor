interface LinksProps {
  isInMobileMenu?: boolean
}

const Links: React.FC<LinksProps> = ({ isInMobileMenu = false }) => {
  return (
    <>
      <li className="flex flex-col items-center group">
        <a href="">{isInMobileMenu ? "ABOUT" : "About"}</a>
        <span className="w-[50%] transition-all duration-300 h-0.5 mt-2 bg-White scale-x-0 group-hover:scale-x-100"></span>
      </li>
      <li className="flex flex-col items-center group">
        <a href="">{isInMobileMenu ? "CAREERS" : "Careers"}</a>
        <span className="w-[50%] transition-all duration-300 h-0.5 mt-2 bg-White scale-x-0 group-hover:scale-x-100"></span>
      </li>
      <li className="flex flex-col items-center group">
        <a href="">{isInMobileMenu ? "EVENTS" : "Events"}</a>
        <span className="w-[50%] transition-all duration-300 h-0.5 mt-2 bg-White scale-x-0 group-hover:scale-x-100"></span>
      </li>
      <li className="flex flex-col items-center group">
        <a href="">{isInMobileMenu ? "PRODUCTS" : "Products"}</a>
        <span className="w-[50%] transition-all duration-300 h-0.5 mt-2 bg-White scale-x-0 group-hover:scale-x-100"></span>
      </li>
      <li className="flex flex-col items-center group">
        <a href="">{isInMobileMenu ? "SUPPORT" : "Support"}</a> 
        <span className="w-[50%] transition-all duration-300 h-0.5 mt-2 bg-White scale-x-0 group-hover:scale-x-100"></span>
      </li>
    </>
  )
}

export default Links