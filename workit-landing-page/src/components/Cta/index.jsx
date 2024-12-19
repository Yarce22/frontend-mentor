import founder from '../../assets/images/image-founder.webp'
import Button from '../Button'

const Cta = () => {
  return (
    <section className="pt-28 px-5">
      <div className='flex flex-col'>
        <img src={founder} alt="founder-photo" />
        <article className='flex flex-col items-center z-20 gap-8 -mt-14 p-8 text-White bg-Purple900 '>
          <h3 className='font-Frauces font-medium text-2xl'>Be the first to test</h3>
          <p className='text-center font-Manrope font-medium text-[15px] leading-7'>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and i'll be in touch to schedule a call.</p>
          <Button 
            text='Apply for access'
          />
        </article>
      </div>
    </section>
  )
}

export default Cta