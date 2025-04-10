import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Logo from "public/images/logo.svg";
import LocationIcon from "public/icons/icon-location.svg";
import PhoneIcon from "public/icons/icon-phone.svg";
import EmailIcon from "public/icons/icon-email.svg";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import TwitterIcon from "@/components/Icons/TwitterIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import { cloneElement } from "react";
import "./styles.css";
const Footer = () => {
    const socialMedia = [
        { name: "Facebook", icon: _jsx(FacebookIcon, {}), alt: "facebook-icon" },
        { name: "Twitter", icon: _jsx(TwitterIcon, {}), alt: "twitter-icon" },
        { name: "Instagram", icon: _jsx(InstagramIcon, {}), alt: "instagram-icon" },
    ];
    return (_jsxs("footer", { className: "lg:w-full pt-[253px] px-7 lg:px-[120px] pb-14 bg-DarkBlue-FooterBg", children: [_jsx("div", { className: "w-[108px] h-[31px] mb-9 pl-3", children: _jsx("img", { src: Logo, alt: "logo", className: "w-full h-full" }) }), _jsxs("div", { className: "flex flex-col text-white lg:flex-row", children: [_jsxs("div", { className: "flex gap-5 lg:w-[379px]", children: [_jsx("img", { src: LocationIcon, alt: "location-icon", className: "w-4 h-4 mt-2" }), _jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" })] }), _jsxs("div", { className: "lg:ml-10", children: [_jsxs("div", { className: "flex gap-4 mt-4 lg:mt-0", children: [_jsx("img", { src: PhoneIcon, alt: "phone-icon", className: "w-4 h-4 mt-1" }), _jsx("p", { children: "+1-543-123-4567" })] }), _jsxs("div", { className: "flex gap-4 mt-4", children: [_jsx("img", { src: EmailIcon, alt: "phone-icon", className: "w-5 h-4 mt-1" }), _jsx("p", { children: "example@fylo.com" })] })] }), _jsxs("ul", { className: "flex flex-col gap-4 mt-12 lg:mt-0 lg:ml-[146px]", children: [_jsx("li", { className: "inline transition-all duration-200 ease-in-out hover:font-bold", children: "About Us" }), _jsx("li", { className: "inline transition-all duration-200 ease-in-out hover:font-bold", children: "Jobs" }), _jsx("li", { className: "inline transition-all duration-200 ease-in-out hover:font-bold", children: "Press" }), _jsx("li", { className: "inline transition-all duration-200 ease-in-out hover:font-bold", children: "Blog" })] }), _jsxs("ul", { className: "flex flex-col gap-4 mt-12 lg:ml-10 lg:mt-0", children: [_jsx("li", { className: "inline transition-all duration-200 ease-in-out hover:font-bold", children: "Contact Us" }), _jsx("li", { className: "inline transition-all duration-200 ease-in-out hover:font-bold", children: "Terms" }), _jsx("li", { className: "inline transition-all duration-200 ease-in-out hover:font-bold", children: "Privacy" })] }), _jsx("div", { className: "flex items-center justify-center gap-4 mt-12 lg:items-start lg:mt-0 lg:ml-[146px]", children: socialMedia.map(({ name, icon }) => (_jsx("div", { id: "socialMedia-container", className: "w-8 h-8 p-2 border border-white rounded-full cursor-pointer hover:border-Cyan", children: cloneElement(icon, { className: 'w-full h-full' }) }, name))) })] })] }));
};
export { Footer };
