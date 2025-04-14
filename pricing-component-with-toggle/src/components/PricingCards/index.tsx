import { PricingCard } from '../../types';

interface PricingProps {
  isMonthly: boolean
}

const PricingCards: React.FC<PricingProps> = ({ isMonthly }) => {
  const PRICING_CARDS: PricingCard[] = [
    {
      title: "Basic",
      price: {
        monthly: 19.99,
        annually: 199.99
      },
      features: [
        "500 GB Storage",
        "2 Users Allowed",
        "Send up to 3 GB"
      ],
    },
    {
      title: "Professional",
      price: {
        monthly: 24.99,
        annually: 249.99
      },
      features: [
        "1 TB Storage",
        "5 Users Allowed",
        "Send up to 10 GB"
      ],
      isPopular: true
    },
    {
      title: "Master",
      price: {
        monthly: 39.99,
        annually: 399.99
      },
      features: [
        "2 TB Storage",
        "10 Users Allowed",
        "Send up to 20 GB"
      ],
    }
  ];


  return (
    <section className="flex flex-col items-center justify-center gap-8 w-full mt-20">
      {PRICING_CARDS.map((pricing: PricingCard) => (
        <div
          key={pricing.title}
          className={`${pricing.isPopular ? 'bg-BluePurple text-white' : 'bg-white text-GrayishBlue'} flex flex-col justify-center w-full px-7 py-8 text-center rounded-[10px] shadow-2xl/10`}
        >
          <h2 className='mb-6 text-[1.125rem]'>
            {pricing.title}
          </h2>
          <p className={`${pricing.isPopular ? 'text-white' : 'text-DarkGrayishBlue'} flex items-center justify-evenly mb-8 text-[4.5rem]`}>
            <span className='text-[2.5rem]'>$</span>{isMonthly ? pricing.price.monthly : pricing.price.annually}
          </p>
          <div className='flex flex-col items-center justify-center gap-3'>
            <hr className='w-full h-[1px] bg-LightGrayishBlue opacity-25' />
            <p className='text-[0.9375rem]'>{pricing.features[0]}</p>
            <hr className='w-full h-[1px] bg-LightGrayishBlue opacity-25' />
            <p className='text-[0.9375rem]'>{pricing.features[1]}</p>
            <hr className='w-full h-[1px] bg-LightGrayishBlue opacity-25' />
            <p className='text-[0.9375rem]'>{pricing.features[2]}</p>
            <hr className='w-full h-[1px] bg-LightGrayishBlue opacity-25' />
          </div>
          <button className={`${pricing.isPopular ? "bg-white text-BluePurple hover:border-white hover:border hover:text-white hover:bg-transparent" : "bg-linear-to-br to-BluePurple from-LightPurple text-white hover:border-BluePurple hover:text-BluePurple hover:border hover:bg-linear-br hover:to-white hover:from-white"} mt-8 w-full h-11 text-[0.8125rem] tracking-[1.39px] rounded-[6px] cursor-pointer`}>
            LEARN MORE
          </button>
        </div>
      ))}
    </section>
  )
}

export { PricingCards }