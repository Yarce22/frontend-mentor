import { useState } from "react";
import tanya from "./assets/images/image-tanya.jpg";
import john from "./assets/images/image-john.jpg";
import Image from "./components/Image";
import Text from "./components/Text";
import patternBottom from "./assets/images/pattern-curve.svg";

function App() {
  const [testimonial, setTestimonial] = useState(0)

  const testimonials = [
    {
      image: tanya,
      name: "Tanya Sinclair", 
      job: "UX Engineer",
      testimonial: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"
    },
    {
      image: john,
      name: "John Tarkpor",
      job: "Junior Front-end Developer",
      testimonial: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"
    }
  ]

  return (
    <div className="relative flex flex-col lg:flex-row items-center h-screen overflow-hidden">
      <Image photo={testimonials[testimonial].image} testimonial={testimonial} setTestimonial={setTestimonial} />
      <Text text={testimonials[testimonial].testimonial} author={testimonials[testimonial].name} job={testimonials[testimonial].job} />
      <div className="absolute -bottom-10 md:-left-20 md:-bottom-16 lg:left-0 lg:bottom-0 left-0">
        <img src={patternBottom} alt="pattern-bottom" />
      </div>
    </div> 
  )
}

export default App
