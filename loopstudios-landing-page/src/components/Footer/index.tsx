import Links from "../Links";
import logo from "@assets/images/logo.svg";
import facebook from "@assets/images/icon-facebook.svg";
import twitter from "@assets/images/icon-twitter.svg";
import instagram from "@assets/images/icon-instagram.svg";
import pinterest from "@assets/images/icon-pinterest.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-Black flex flex-col items-center gap-10 p-14 mt-24">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      
      <ul className="flex flex-col gap-5 text-White text-center font-Alata font-regular text-[0.9375rem]">
        <Links />
      </ul>

      <div className="flex gap-4">
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
        <img src={instagram} alt="Instagram" />
        <img src={pinterest} alt="Pinterest" />
      </div>

      <span className="text-White text-center font-Alata font-regular text-[0.9375rem] opacity-50">© 2021 Loopstudios. All rights reserved.</span>
    </footer>
  )
}

export default Footer;