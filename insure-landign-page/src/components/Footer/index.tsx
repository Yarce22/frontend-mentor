import patternMobile from "@assets/images/bg-pattern-footer-mobile.svg";
import patternDesktop from "@assets/images/bg-pattern-footer-desktop.svg";
import Logo from "../../assets/icons/Logo";
import FbIcon from "../../assets/icons/FbIcon";
import IgIcon from "../../assets/icons/IgIcon";
import PinterestIcon from "../../assets/icons/PinterestIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";

const FooterLinks = [
  {id: 1, title: "Our Company", links: ["How We Work", "Why Insure?", "Check price", "Reviews"]},
  {id: 2, title: "Help Me", links: ["FAQ", "Terms of use", "Privacy policy", "Cookies"]},
  {id: 3, title: "Contact", links: ["Sales", "Support", "Live chat"]},
  {id: 4, title: "Others", links: ["Careers", "Press", "Licenses"]},
]

const Footer: React.FC = () => {
  return (
    <footer className="relative flex flex-col items-center py-[88px] px-6 lg:px-[165px] bg-VeryLightGray">
      <picture className="absolute top-0 left-0">
        <source media="(min-width: 1024px)" srcSet={patternDesktop} />
        <img src={patternMobile} alt="pattern" />
      </picture>

      <div className="flex relative z-20 flex-col justify-center items-center lg:flex-row lg:justify-between lg:w-full">
        <div className="mb-8">
          <Logo />
        </div>

        <div className="flex gap-4 items-center">
          <FbIcon fill="#837D88" className="transition-colors duration-200 ease-in-out cursor-pointer hover:fill-DarkPurple" />
          <TwitterIcon fill="#837D88" className="transition-colors duration-200 ease-in-out cursor-pointer hover:fill-DarkPurple" />
          <PinterestIcon fill="#837D88" className="transition-colors duration-200 ease-in-out cursor-pointer hover:fill-DarkPurple" />
          <IgIcon fill="#837D88" className="transition-colors ease-in-out cursor-pointer hover:fill-DarkPurple duration-201" />
        </div>
      </div>

      <hr className="w-full my-10 border-b border-[#DADADA]" />

      <div className="flex flex-col gap-10 lg:flex-row lg:justify-start lg:w-full lg:gap-48">
        {FooterLinks.map((link) => (
          <div key={link.id} className="flex flex-col gap-4 items-center lg:items-start font-Karla font-bold text-[0.8125rem] text-DarkGray tracking-[1.5px]">
            <h4 className="mb-9 text-DarkGray">{link.title.toUpperCase()}</h4>
            {link.links.map((li, i) => (
              <a href="" key={i} className="text-DarkPurple hover:underline">{li.toUpperCase()}</a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer