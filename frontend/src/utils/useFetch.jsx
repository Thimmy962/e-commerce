import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(() => {return null})
    const [error, setError] = useState(() => {return null})
    const [loading, setLoading] = useState(() => {return true})


    const fetchData = async () => {
      try {
        const response = await fetch(url);



        const result = await response.json();

        setData(result);
      } 
      catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };


    
    useEffect(() =>{
      
      fetchData()

    }, [url])

    return { data, loading, error };
}

export default useFetch