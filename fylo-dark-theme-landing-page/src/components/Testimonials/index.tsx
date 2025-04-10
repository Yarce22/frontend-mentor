import Comillas from "public/images/bg-quotes.png";
import SatishPhoto from "public/images/profile-1.jpg";
import BrucePhoto from "public/images/profile-2.jpg";
import IvaPhoto from "public/images/profile-3.jpg";

const Testimonials = () => {
  const testimonials = [
    {testimonial: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.", photo: SatishPhoto, author: "Satish Patel", position: "Founder & CEO", company: "Huddle"},
    {testimonial: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.", photo: BrucePhoto, author: "Bruce McKenzie", position: "Founder & CEO", company: "Huddle"},
    {testimonial: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.", photo: IvaPhoto, author: "Iva Boyd", position: "Founder & CEO", company: "Huddle"},

  ]

  return (
    <section className="lg:relative px-12 lg:px-36 pt-40 pb-[338px] bg-DarkBlue-MainBg">
      <div className="w-6 h-5 pl-2 lg:absolute lg:z-10 lg:top-32 lg:left-32 lg:w-12 lg:h-10">
        <img src={Comillas} alt="comillas-icons" className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-6 lg:relative lg:z-20 lg:flex-row">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col py-6 px-5 text-white text-[10px] lg:text-[14px] font-OpenSans rounded-lg bg-DarkBlue-TestimonialBg">
            <p className="">{testimonial.testimonial}</p>
            <div className="flex items-center gap-2 mt-4">
              <img src={testimonial.photo} alt={`${testimonial.author}'s photo`} className="w-6 h-6 rounded-full" />
              <div>
                <h3 className="font-bold lg:text-[10px]">{testimonial.author}</h3>
                <p className="text-[7px]">{testimonial.position}, {testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { Testimonials }