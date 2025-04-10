import AccessIcon from "../../../public/icons/icon-access-anywhere.svg"
import SecurityIcon from "../../../public/icons/icon-security.svg"
import RealTimeIcon from "../../../public/icons/icon-collaboration.svg"
import StoreIcon from "../../../public/icons/icon-any-file.svg"


const Features: React.FC = () => {
  const FeaturesData = [
    {logo: AccessIcon, title: "Access your files, anywhere", description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."},
    {logo: SecurityIcon, title: "Security you can trust", description: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."},
    {logo: RealTimeIcon, title: "Real-time collaboration", description: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."},
    {logo: StoreIcon, title: "Store any type of file", description: "Whether you’re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."},
  ]

  return (
    <section id="features" className="grid grid-cols-1 pt-10 lg:pt-0 lg:px-[280px] place-items-center lg:grid-cols-2 bg-DarkBlue-MainBg">
      {FeaturesData.map((feature, index) => (
        <div key={index} className="flex flex-col items-center justify-center w-[87.76%] mb-20">
          <div className="w-16 h-16 mt-6 mb-8 lg:w-20 lg:h-20">
            <img src={feature.logo} alt="feature-logo" className="object-contain w-full h-full" />
          </div>
          <h2 className="font-Raleway font-bold text-[18px] lg:text-[20px]">{feature.title}</h2>
          <p className="font-OpenSans text-[14px] text-center mx-1">{feature.description}</p>
        </div>
      ))}
    </section>
  )
}

export { Features }