import Logo from "public/images/logo.svg";
import LocationIcon from "public/icons/icon-location.svg";
import PhoneIcon from "public/icons/icon-phone.svg";
import EmailIcon from "public/icons/icon-email.svg";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import TwitterIcon from "@/components/Icons/TwitterIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import { cloneElement } from "react";
import "./styles.css"

const Footer = () => {
  const socialMedia = [
    { name: "Facebook", icon: <FacebookIcon />, alt: "facebook-icon" },
    { name: "Twitter", icon: <TwitterIcon />, alt: "twitter-icon" },
    { name: "Instagram", icon: <InstagramIcon />, alt: "instagram-icon" },
  ];

  return (
    <footer className="pt-[253px] px-7 pb-14 bg-DarkBlue-FooterBg">
      <div className="w-[108px] h-[31px] mb-9 pl-3">
        <img src={Logo} alt="logo" className="w-full h-full" />
      </div>

      <div className="flex flex-col text-white">
        <div className="flex gap-5">
          <img src={LocationIcon} alt="location-icon" className="w-4 h-4 mt-2" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>

        <div className="flex gap-4 mt-4">
          <img src={PhoneIcon} alt="phone-icon" className="w-4 h-4 mt-1" />
          <p>+1-543-123-4567</p>
        </div>

        <div className="flex gap-4 mt-4">
          <img src={EmailIcon} alt="phone-icon" className="w-5 h-4 mt-1" />
          <p>example@fylo.com</p>
        </div>

        <ul className="flex flex-col gap-4 mt-12">
          <li className="inline transition-all duration-200 ease-in-out hover:font-bold">About Us</li>
          <li className="inline transition-all duration-200 ease-in-out hover:font-bold">Jobs</li>
          <li className="inline transition-all duration-200 ease-in-out hover:font-bold">Press</li>
          <li className="inline transition-all duration-200 ease-in-out hover:font-bold">Blog</li>
        </ul>

        <ul className="flex flex-col gap-4 mt-12">
          <li className="inline transition-all duration-200 ease-in-out hover:font-bold">Contact Us</li>
          <li className="inline transition-all duration-200 ease-in-out hover:font-bold">Terms</li>
          <li className="inline transition-all duration-200 ease-in-out hover:font-bold">Privacy</li>
        </ul>

        <div className="flex items-center justify-center gap-4 mt-12">
          {socialMedia.map(({ name, icon }) => (
              <div key={name} id="socialMedia-container" className="w-8 h-8 p-2 border border-white rounded-full cursor-pointer hover:border-Cyan">
                {cloneElement(icon, { className: 'w-full h-full' })}
              </div>
          ))} 
        </div>
      </div>
    </footer>
  )
}

export { Footer }