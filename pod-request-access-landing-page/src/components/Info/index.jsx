import { InputEmail } from "../InputEmail"
import { SocialLogos } from "../SocialLogos"
import spotifyLogo from "../../assets/desktop/spotify.svg"
import applePodcastLogo from "../../assets/desktop/apple-podcast.svg"
import googlePodcastLogo from "../../assets/desktop/google-podcasts.svg"
import pocketPodcastLogo from "../../assets/desktop/pocket-casts.svg"

const Logos = [
  {src: spotifyLogo, alt: "spotify-logo"},
  {src: applePodcastLogo, alt: "apple-podcast-logo"},
  {src: googlePodcastLogo, alt: "google-podcast-logo",  w: '73px', h: '10px'},
  {src: pocketPodcastLogo, alt: "pocket-podcast-logo"},
]

const Info = () => {
  return (
    <>
      <section className="">
        <h1 className="mt-14 mb-4 leading-9 text-[2rem] text-center text-Green font-light">PUBLISH YOUR PODCAST <span className="text-White">EVERYWHERE.</span></h1>

        <p className="text-Blue300 text-center text-sm font-extralight">Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>

        <div className="flex justify-between items-center h-4 my-10">
          {Logos.map((logo) => (
            <SocialLogos 
              key={logo.alt}
              logoIcon={logo.src}
              logoName={logo.alt}
              w={logo.w}
              h={logo.h}
            />
          ))}
        </div>

        <InputEmail />
      </section>
    </>
  )
}

export { Info }