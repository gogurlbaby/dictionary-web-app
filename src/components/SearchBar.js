import React from "react"
import { GoSearch } from "react-icons/go"

const SearchBar = () => {
  return (
    <div className="md:mt-[3.25rem] mt-[1.75rem]">
      <div className="w-full flex">
        <input 
         type="text"
         name="dictionary"
        //  value={}
        //  onChange={}
        className="w-full px-6 bg-[#F4F4F4] focus:outline-none rounded-2xl md:h-16 h-12"
        />
        <GoSearch size={16} className="relative right-14 md:top-6 top-4"/>
      </div>
    </div>
  )
}

export default SearchBar