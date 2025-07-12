interface LinksProps {
  isInMobileMenu?: boolean
}

const Links: React.FC<LinksProps> = ({ isInMobileMenu = false }) => {
  return (
    <>
      <li>
        <a href="">{isInMobileMenu ? "ABOUT" : "About"}</a>
      </li>
      <li>
        <a href="">{isInMobileMenu ? "CAREERS" : "Careers"}</a>
      </li>
      <li>
        <a href="">{isInMobileMenu ? "EVENTS" : "Events"}</a>
      </li>
      <li>
        <a href="">{isInMobileMenu ? "PRODUCTS" : "Products"}</a>
      </li>
      <li>
        <a href="">{isInMobileMenu ? "SUPPORT" : "Support"}</a> 
      </li>
    </>
  )
}

export default Links