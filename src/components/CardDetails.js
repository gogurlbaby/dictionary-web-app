import React from "react"
import { BsFillPlayCircleFill } from "react-icons/bs"

const CardDetails = () => {
  return (
    <div className="text-left">
      <div className="md:mt-[2.813rem] mt-[1.5rem] flex justify-between items-center">
        <p className="text-[#2D2D2D] md:text-[4rem] text-2xl font-bold">keyboard</p> 
        <BsFillPlayCircleFill size={35} className="text-[#A445ED]" />
      </div>
      <p className="text-[#A445ED] md:text-[1.5rem] text-[1.125rem] font-normal md:mt-[2rem] mt-[0.5rem]">/ˈkiːbɔːd/</p>
      <p className="text-[#2D2D2D] md:text-[1.5rem] text-[1.125rem] font-bold italic mt-[2.5rem]">noun</p>
      <p className="text-[#757575] md:text-[1.25rem] text-base font-normal mt-[2.5rem]">Meaning</p>
      <ul>
        <li className="text-[#2D2D2D] md:text-[1.125rem] text-base leading-[24px] font-normal mt-[2.5rem]">(etc.) A set of keys used to operate a typewriter, computer etc.</li>
        <li className="text-[#2D2D2D] md:text-[1.125rem] text-base leading-[24px] font-normal">A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
        <li className="text-[#2D2D2D] md:text-[1.125rem] text-base leading-[24px] font-normal">A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li>
      </ul>
    </div>
  )
}

export default CardDetails