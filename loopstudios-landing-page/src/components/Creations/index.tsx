import earth from "@assets/images/mobile/image-deep-earth.jpg"
import earthTablet from "@assets/images/tablet/deep-earth.jpg"
import earthDesktop from "@assets/images/desktop/image-deep-earth.jpg"
import arcade from "@assets/images/mobile/image-night-arcade.jpg"
import arcadeTablet from "@assets/images/tablet/arcade.jpg"
import arcadeDesktop from "@assets/images/desktop/image-night-arcade.jpg"
import soccer from "@assets/images/mobile/image-soccer-team.jpg"
import soccerTablet from "@assets/images/tablet/soccer.jpg"
import soccerDesktop from "@assets/images/desktop/image-soccer-team.jpg"
import grid from "@assets/images/mobile/image-grid.jpg"
import gridTablet from "@assets/images/tablet/grid.jpg"
import gridDesktop from "@assets/images/desktop/image-grid.jpg"
import above from "@assets/images/mobile/image-from-above.jpg"
import aboveTablet from "@assets/images/tablet/up-above.jpg"
import aboveDesktop from "@assets/images/desktop/image-from-above.jpg"
import borealis from "@assets/images/mobile/image-pocket-borealis.jpg"
import borealisTablet from "@assets/images/tablet/borealis.jpg"
import borealisDesktop from "@assets/images/desktop/image-pocket-borealis.jpg"
import curiosity from "@assets/images/mobile/image-curiosity.jpg"
import curiosityTablet from "@assets/images/tablet/curiosity.jpg"
import curiosityDesktop from "@assets/images/desktop/image-curiosity.jpg"
import fisheye from "@assets/images/mobile/image-fisheye.jpg"
import fisheyeTablet from "@assets/images/tablet/fisheye.jpg"
import fisheyeDesktop from "@assets/images/desktop/image-fisheye.jpg"

const creationsPosts = [
  {title: `DEEP EARTH`, img: earth, imgTablet: earthTablet, imgDesktop: earthDesktop, width: "w-30"},
  {title: "NIGHT ARCADE", img: arcade, imgTablet: arcadeTablet, imgDesktop: arcadeDesktop, width: "w-30"},
  {title: "SOCCER TEAM VR", img: soccer, imgTablet: soccerTablet, imgDesktop: soccerDesktop, width: "w-30"},
  {title: "THE GRID", img: grid, imgTablet: gridTablet, imgDesktop: gridDesktop, width: "w-20"},
  {title: "FROM UP ABOVE VR", img: above, imgTablet: aboveTablet, imgDesktop: aboveDesktop, width: "w-40"},
  {title: "POCKET BOREALIS", img: borealis, imgTablet: borealisTablet, imgDesktop: borealisDesktop, width: "w-30"},
  {title: "THE CURIOSITY", img: curiosity, imgTablet: curiosityTablet, imgDesktop: curiosityDesktop, width: "w-30"},
  {title: "MAKE IT FISHEYE", img: fisheye, imgTablet: fisheyeTablet, imgDesktop: fisheyeDesktop, width: "w-50"}
]

const Creations: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[1fr_10fr] justify-center items-center mt-24 mx-6 lg:mt-46 lg:mx-40">
      <h2 className="font-Josefin font-light text-[2rem] md:text-5xl text-center lg:text-start leading-[1] lg:col-start-1 lg:row-start-1 lg:self-start">OUR CREATIONS</h2>

      <section className="grid lg:grid-cols-4 gap-6 w-full mt-12 md:mt-8 lg:col-start-1 lg:row-start-2 lg:col-span-2">
        {creationsPosts.map(post => (
          <div key={post.title} className="relative w-full h-[120px] lg:h-[450px] lg:w-[256px]">
            <picture className="absolute top-0 left-0 w-full h-full after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-black/50 after:to-black/0">
            <source media="(min-width: 1024px)" srcSet={post.imgDesktop} />
            <source media="(min-width: 768px)" srcSet={post.imgTablet} />
              <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
            </picture>
            <h3 className={`${post.width} absolute bottom-5 left-5 md:left-9.5 text-White font-Josefin font-light text-2xl leading-[1]`}>{post.title}</h3>
          </div>
        ))}
      </section>

      <button className="font-Alata justify-self-center font-regular text-[0.875rem] tracking-[5px] py-2 px-9 border-2 border-Black mt-8 lg:col-start-2 lg:row-start-1 lg:col-span-2 max-w-[157px] max-h-10 lg:self-start lg:justify-self-end lg:m-0">SEE ALL</button>
    </section>
  )
}

export default Creations;