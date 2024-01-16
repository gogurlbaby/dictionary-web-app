import React, { useState } from "react"
import logo from "../assets/images/logo.svg"
import { BsCircleFill, BsMoon } from "react-icons/bs"
import { GetThemeValues } from "../context/ThemeContext.js"

const Navigation = () => {
    const [selectedOption, setSelectedOption] = useState("Sans Serif")

    const options = [ "Sans Serif", "Sans", "Mono" ]

    const handleChange = (e) => {
        setSelectedOption(e.target.value)
    }

    const { darkTheme, themeHandler } = GetThemeValues()

  return (
    <div className="flex justify-between items-center">
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
            <option 
             key={index} 
             value={option} 
             className={`${ 
              darkTheme ? " text-[#FFF]" : " text-[#2D2D2D]"} 
              py-8 px-10 md:text-[18px] text-[14px] font-bold`}>
                {option}
            </option>
        ))}
       </select>
     </div>
     <div
      className={`${ 
        darkTheme ? "bg-[#A445ED]" : "bg-[#757575]"} 
        w-12 h-6 rounded-xl flex items-center`}
     >
     <BsCircleFill
      onClick={themeHandler}
      className={`${ 
        darkTheme ? "left-3" : "text-[#757575] right-3"} 
        text-white w-12 h-5 relative cursor-pointer`}
    />
     </div>
     <div>
    <BsMoon
    size={28}
     onClick={themeHandler}
     className={`${ 
      darkTheme ? "text-purple-600" : ""} 
      cursor-pointer`}
    />
    </div>
    </div>
    </div>
  )
}

export default Navigation