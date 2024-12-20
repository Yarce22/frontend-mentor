import founder from '../../assets/images/image-founder.webp'
import Button from '../Button'
import pattern3 from '../../assets/images/bg-pattern-3.svg'

const Cta = () => {
  return (
    <section className="pt-28 px-5 md:px-11 lg:px-40">
      <div className='flex flex-col'>
        <div className='w-[477px]'>
          <img src={founder} alt="founder-photo" className='w-full' />
        </div>
        <article className='relative flex flex-col items-center md:items-start z-20 gap-8 -mt-14 md:-mt-28 md:ml-[182px] p-8 md:p-12 lg:p-16 lg:mr-28 lg:-mt-[300px] lg:ml-96 text-White bg-Purple900 '>
          <h3 className='font-Frauces font-medium md:self-center lg:self-start text-2xl md:text-5xl md:text-[56px] md:text-center'>Be the first to test</h3>
          <p className='text-center md:text-left font-Manrope font-medium md:font-normal text-[15px] leading-7'>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and i'll be in touch to schedule a call.</p>
          <Button 
            text='Apply for access'
          />
          <div className='hidden md:block absolute right-4 lg:right-32 -bottom-28 lg:-bottom-16'>
            <img src={pattern3} alt="pattern" className='w-full'/>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Cta