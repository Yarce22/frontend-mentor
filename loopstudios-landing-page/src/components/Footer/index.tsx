import Links from "../Links";
import logo from "@assets/images/logo.svg";
import facebook from "@assets/images/icon-facebook.svg";
import twitter from "@assets/images/icon-twitter.svg";
import instagram from "@assets/images/icon-instagram.svg";
import pinterest from "@assets/images/icon-pinterest.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-Black grid items-center md:grid-cols-2 md:grid-rows-2 gap-10 p-14 mt-24">
      <div className="md:order-1 place-content-center md:place-content-start">
        <img src={logo} alt="Logo" />
      </div>
      
      <ul className="flex flex-col md:flex-row gap-5 md:gap-4 text-White text-center font-Alata font-regular text-[0.9375rem] md:order-3 place-content-center md:place-content-start">
        <Links />
      </ul>

      <div className="flex gap-4 md:order-2 place-content-center md:place-content-end">
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
        <img src={instagram} alt="Instagram" />
        <img src={pinterest} alt="Pinterest" />
      </div>

      <span className="text-White text-center md:text-end font-Alata font-regular text-[0.9375rem] opacity-50 md:order-4 place-content-center md:place-content-end">© 2021 Loopstudios. All rights reserved.</span>
    </footer>
  )
}

export default Footer;