import {cloneElement} from "react";
import FacebookIcon from "../Icons/FacebookIcon"
import TwitterIcon from "../Icons/TwitterIcon"
import InstagramIcon from "../Icons/InstagramIcon"
import "./styles.css"

const Footer = () => {
  const socialMedia = [
    { name: "Facebook", icon: <FacebookIcon />, alt: "facebook-icon" },
    { name: "Twitter", icon: <TwitterIcon />, alt: "twitter-icon" },
    { name: "Instagram", icon: <InstagramIcon />, alt: "instagram-icon" },
  ];

  return (
    <footer>
      <div className="flex gap-4 items-center justify-center">
      {socialMedia.map(({ name, icon }) => (
          <div key={name} className="socialMedia-container w-8 h-8 p-2 border-Media-Border border rounded-full cursor-pointer bg-white">
            {cloneElement(icon, { className: 'w-full h-full' })}
          </div>
        ))} 
      </div>
      <p className="front-light text-[10px] text-Gray mt-7">© Copyright Ping. All rights reserved.</p>
    </footer>
  )
}

export { Footer }