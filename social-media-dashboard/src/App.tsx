import { useState } from "react";
import Switch from "./components/Switch";
import ResumeCard from "./components/ResumeCard";
import OverviewCard from "./components/OverviewCard";
import arrowUp from "./assets/images/icon-up.svg";
import arrowDown from "./assets/images/icon-down.svg";
import facebookIcon from "./assets/images/icon-facebook.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";
import instagramIcon from "./assets/images/icon-instagram.svg";
import youtubeIcon from "./assets/images/icon-youtube.svg";


const ResumeCards = [
  {topColor: "facebook", iconMedia: facebookIcon, nickname: "@nathanf", numFollows: "1987", numToday: "12", arrow: arrowUp, arrowColor: "lime-green" },
  {topColor: "twitter", iconMedia: twitterIcon, nickname: "@nathanf", numFollows: "1044", numToday: "99", arrow: arrowUp, arrowColor: "lime-green" },
  {topColor: "instagram", iconMedia: instagramIcon, nickname: "@realnathanf", numFollows: "11K", numToday: "1099", arrow: arrowUp, arrowColor: "lime-green" },
  {topColor: "youtube", iconMedia: youtubeIcon, nickname: "@Nathan F.", numFollows: "8239", numToday: "144", arrow: arrowDown, arrowColor: "bright-red" },
]; 

const OverviewCards = [
  {title: "Page Views", num: "87", icon: facebookIcon, arrow: arrowUp, arrowColor: "lime-green", percent: "3%" },
  {title: "Likes", num: "52", icon: facebookIcon, arrow: arrowDown, arrowColor: "bright-red", percent: "2%" },
  {title: "Likes", num: "5462", icon: instagramIcon, arrow: arrowUp, arrowColor: "lime-green", percent: "2257%" },
  {title: "Profile Views", num: "52K", icon: instagramIcon, arrow: arrowUp, arrowColor: "lime-green", percent: "1375%" },
  {title: "Retweets", num: "117", icon: twitterIcon, arrow: arrowUp, arrowColor: "lime-green", percent: "303%" },
  {title: "Likes", num: "507", icon: twitterIcon, arrow: arrowUp, arrowColor: "lime-green", percent: "553%" },
  {title: "Likes", num: "107", icon: youtubeIcon, arrow: arrowDown, arrowColor: "bright-red", percent: "19%" },
  {title: "Total Views", num: "1407", icon: youtubeIcon, arrow: arrowDown, arrowColor: "bright-red", percent: "12%" },
];

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <main className={`relative px-6 py-9 lg:px-[165px] lg:pt-9 lg:pb-[75px] font-inter ${theme === "light" ? "bg-VeryPaleBlue" : "bg-VeryDarkBlue"}`}>
      <div className={`absolute top-0 left-0 w-full h-[9%] md:h-[20%] lg:h-[30%] ${theme === "light" ? "bg-VeryPaleBlue" : "bg-VeryDarkBlue2"} rounded-b-[20px]`}></div>

      <div className={`relative z-20 lg:flex items-center justify-between`}>
        <div>
          <h1 className={`font-bold text-2xl text-VeryDarkBlue ${theme === "light" ? "text-VeryDarkBlue" : "text-White"}`}>Social Media Dashboard</h1>
          <h2 className="font-bold text-[0.875rem] text-DarkGrayishBlue">Total Followers: 23,004</h2>
        </div>

        <hr className="border-b border-DarkGrayishBlue w-full mt-6 mb-4 lg:hidden" />

        <Switch theme={theme} setTheme={setTheme} />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-6">
        {ResumeCards.map((card, index) => (
          <ResumeCard key={index} {...card} theme={theme} />
        ))}
      </div>
      
      <h2 className="font-bold text-2xl text-DarkGrayishBlue mt-12 mb-7">Overview - Today</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {OverviewCards.map((card, index) => (
          <OverviewCard key={index} {...card} theme={theme} />
        ))}
      </div>
    </main>
  )
}

export default App
