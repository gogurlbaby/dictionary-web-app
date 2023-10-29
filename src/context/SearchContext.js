import React, { createContext, useState } from "react"
// import axios from "axios"

export const SearchContext = createContext()
const Context = ({children}) => {
    const [word, setWord] = useState("")
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // const DictionaryToken = "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"

    // Import the necessary modules
const axios = require("axios");

// Your CORS proxy server URL (replace with your server's URL)
const corsProxyUrl = "http://your-proxy-server-domain-or-ip:8080/";

const getDictionaryResults = async () => {
    try {
        setLoading(true);
        const response = await axios.get(`${corsProxyUrl}https://dictionaryapi.dev/${word}`);
        const data = response.data;
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
    <SearchContext.Provider value={{
        word, setWord, results, loading, error, getDictionaryResults
    }}>
        {children}
    </SearchContext.Provider>
  )
}

export default Context