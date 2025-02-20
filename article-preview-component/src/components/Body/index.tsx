import { Info } from "../Info"

interface BodyProps {
  openShareMedia: () => void
}

const Body: React.FC<BodyProps> = ({ openShareMedia }) => {
  return (
    <section className='lg:flex lg:flex-col lg:justify-between px-7 py-9 lg:px-[40px] lg:py-8 lg:w-[445px]'>
      <h1 className='font-bold text-[17px] lg:text-[21px] text-Very-Dark-Grayish-Blue '>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
      <p className='text-[13.8px] font-medium text-Desaturated-Dark-Blue mb-[32px] lg:mb-0'>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
      <Info openShareMedia={openShareMedia}/>
    </section>
  )
}

export { Body }
