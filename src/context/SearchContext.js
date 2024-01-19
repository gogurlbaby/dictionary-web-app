import React, { createContext, useState } from "react"
import axios from "axios"

export const WordContext = createContext()
const SearchContext = ({children}) => {
    const [word, setWord] = useState("")
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

const getDictionaryResults = async () => {
    try {
        setLoading(true);
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const data = await response.data;
        console.log("data", data);
        setLoading(false);
        setResults(data);
    } catch (error) {
        setError("No result", error);
    } finally {
        setLoading(false);
    }
}


  return (
    <WordContext.Provider 
    value={{
        word, 
        setWord, 
        results, 
        loading, 
        error, 
        getDictionaryResults
    }}>
        {children}
    </WordContext.Provider>
  )
}

export default SearchContext