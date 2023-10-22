import React, { useState } from "react"
import logo from "../assets/images/logo.svg"
import moon from "../assets/images/icon-moon.svg"
import { IoToggleSharp } from "react-icons/io5"

const Navigation = () => {
    const [selectedOption, setSelectedOption] = useState("Sans Serif")

    const options = ["Sans Serif", "Sans", "Mono"]

    const handleChange = (e) => {
        setSelectedOption(e.target.value)
    }

  return (
    <div className="flex justify-between">
     <div>
        <img src={logo} alt="logo" className="" />
     </div>
    <div className="flex gap-8">
    <div className="relative inline-block">
       <select
        className="inline-block bg-transparent px-2 py-1 pr-3 leading-tight focus:outline-none "
        value={selectedOption}
        onChange={handleChange}
       >
        {options.map((option, index) => (
            <option key={index} value={option} className="py-8 px-10 text-[#2D2D2D] md:text-[18px] text-[14px] font-bold">
                {option}
            </option>
        ))}
       </select>
     </div>
     <IoToggleSharp size={35} className="text-[#757575]"/>
     <img src={moon} alt="moon" />
    </div>
    </div>
  )
}

export default Navigation