import { InputEmail } from "../InputEmail"
import spotifyLogo from "../../assets/desktop/spotify.svg"
import applePodcastLogo from "../../assets/desktop/apple-podcast.svg"
import googlePodcastLogo from "../../assets/desktop/google-podcasts.svg"
import pocketPodcastLogo from "../../assets/desktop/pocket-casts.svg"

const Info = () => {
  return (
    <>
      <section className="md:relative md:flex md:flex-col md:pr-36 md:bg-Blue950">
        <h1
          className="mt-14 md:mt-[88px] mb-4 md:mb-6 md:w-[350px] lg:w-[520px] leading-9 md:leading-[3.25rem] text-[2rem] md:text-[44px] text-center md:text-start text-Green font-light md:order-1"
        >PUBLISH YOUR PODCAST <span className="text-White">EVERYWHERE.</span></h1>

        <p
          className="md:w-[440px] md:mb-10 text-Blue300 text-center md:text-start text-sm md:text-lg font-extralight md:order-2"
        >Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>

        <div className="md:absolute md:bottom-0 md:gap-10 flex justify-between items-center h-4 md:h-7 my-10 md:my-0 md:mt-10 md:order-4">
        <img className="h-full" src={spotifyLogo} alt="spotify-logo" />
        <img className="h-full" src={applePodcastLogo} alt="apple-podcast-logo" />
        <img className="w-[73px] h-[10px] md:w-[125px] md:h-[18px]" src={googlePodcastLogo} alt="google-podcast-logo" />
        <img className="h-full" src={pocketPodcastLogo} alt="pocket-podcast-logo" />
        </div>

        <InputEmail />
      </section>
    </>
  )
}

export { Info }