import React, { useContext, useEffect, useState } from "react"
import { BsFillPlayCircleFill } from "react-icons/bs"
import { MdOpenInNew } from "react-icons/md"
import { GetThemeValues } from "../context/ThemeContext"
import { WordContext } from "../context/SearchContext"

const CardDetails = () => {

  const { darkTheme } = GetThemeValues() 
  const { results } = useContext(WordContext)
  const [sourceLink, setSourceLink] = useState("")

  useEffect(() => {
    if(results && results.length > 0) {
      const firstResult = results[0]
      setSourceLink(firstResult.sourceLink || "")
    }
  }, [results])

  if(!results || results.length === 0) {
    return <p className={`${darkTheme ? "text-white" : "text-[#2D2D2D]"} text-lg font-bold mt-6`}>No results found</p>
  }

  const firstResult = results[0]
  
  return (
    <div className="text-left">
      <div className="md:mt-[2.813rem] mt-[1.5rem] flex justify-between items-center">
        <p className={`${ 
          darkTheme ? "text-white" : "text-[#2D2D2D]"} 
          md:text-[4rem] text-2xl font-bold`}>
          {firstResult.word}
        </p> 
        <BsFillPlayCircleFill 
         size={35} 
        //  onClick={}
         className={`${ 
          darkTheme ? "text-purple-200 bg-[#A445ED] opacity-70" : "text-purple-200 bg-[#A445ED]"} 
          rounded-full cursor-pointer`} 
        />
      </div>
      <p className="text-[#A445ED] md:text-[1.5rem] text-[1.125rem] font-normal md:mt-[2rem] mt-[0.5rem]">
       {firstResult.phonetics ? firstResult.phonetics[0].text : ""}
      </p>
      {firstResult.meanings && (
        <>
          {firstResult.meanings.map((meaning, index) => (
            <div key={index}>
              <p className={`${darkTheme ? "text-white" : "text-[#2D2D2D]"} md:text-[1.5rem] text-[1.125rem] font-bold italic mt-[2.5rem]`}>
                {meaning.partOfSpeech}
              </p>
              <p className={`${darkTheme ? "text-white" : "text-[#757575]"} md:text-[1.25rem] text-base font-normal mt-[2.5rem]`}>Meaning</p>
              <ul className={`${darkTheme ? "text-white" : "text-[#2D2D2D]"} list-disc px-10`}>
                {meaning.definitions.map((definition, index) => (
                  <li key={index} className="md:text-[1.125rem] text-base leading-[24px] font-normal mt-[2.5rem]">
                    {definition.definition}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      )}
      <p className="mt-8 text-[#757575] md:text-[1.25rem] text-base font-normal">
        Synonyms 
        {firstResult.synonyms && firstResult.synonyms.length > 0 && (
        <p className="mt-8 text-[#757575] md:text-[1.25rem] text-base font-normal">
          Synonyms
          <span className="ml-5 text-[#A445ED] md:text-[1.25rem] text-base font-bold">
            {firstResult.synonyms.join(", ")}
          </span>
        </p>
      )}

      </p>
      {firstResult.verb && (
        <>
          <div>
            <p className={`${ 
            darkTheme ? "text-white" : "text-[#2D2D2D"}
            md:text-[1.5rem] text-[1.125rem] font-bold italic mt-[2.5rem]`}>
            verb
          </p>
         <p className="text-[#757575] md:text-[1.25rem] text-base font-normal mt-[2.5rem]">Meaning</p>
           <ul className=" ml-10">
             <li className={`${ 
             darkTheme ? "text-white" : "text-[#2D2D2D]"} 
             list-disc md:text-[1.125rem] text-base leading-[24px] font-normal mt-[2.5rem]`}>
             {firstResult.verb.definition}
             </li>
           </ul>
           {/* not working */}
           <p className="text-[#757575] md:text-[1.125rem] text-base leading-[24px] font-normal mt-5">
            {firstResult.verb.examples[0]?.text}
           </p>
        </div>
        </>
      )}
      <div className="flex mt-[3.75rem]">
       <p className="text-[#757575] text-sm font-normal underline">Source</p>
        <a 
         href={sourceLink}
         target="_blank"
         rel="noopener noreferrer"
         className={`${ 
         darkTheme ? "text-white" : "text-[#2D2D2D]"} 
         ml-2 text-sm font-normal underline`}>
         {sourceLink || "Unknown Source"}
        </a>
      <MdOpenInNew size={20} className="ml-1 text-[#757575]" />
      </div>
    </div>
  )
}

export default CardDetails