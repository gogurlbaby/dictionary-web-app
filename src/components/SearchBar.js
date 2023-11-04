import React, { useContext } from "react"
import { GoSearch } from "react-icons/go"
import { WordContext } from "../context/SearchContext"
import { GetThemeValues } from "../context/ThemeContext"

const SearchBar = () => {
  
  const { word, setWord, getDictionaryResults } = useContext(WordContext)

  const { darkTheme } = GetThemeValues()

  const handleSearch = () => {
    if (!word) {
      alert("Enter a word")
    } else {
      getDictionaryResults()
    }
  }

  return (
    <div className="md:mt-[3.25rem] mt-[1.75rem]">
      <div className="w-full flex">
        <input 
         type="text"
         name="dictionary"
         value={word}
         onChange={(e) => setWord(e.target.value)}
        className={`${ 
          darkTheme ? "bg-[#1F1F1F] text-white" : "bg-[#F4F4F4] text-[#2D2D2D]"} 
          w-full px-6 focus:outline-none rounded-2xl md:h-16 h-12`}
        />
        <GoSearch 
         onClick={handleSearch}
         size={20} 
         className={`${ 
          darkTheme ? "text-[#A445ED]" : "text-[#2D2D2D]"} 
          relative right-14 md:top-6 top-4`}/>
      </div>
    </div>
  )
}

export default SearchBar