import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data,setData] = useState(null);

    const [isLoading,setIsLoading] = useState(true);
  
    const [error,setError] = useState(null);
  
    useEffect(()=>{
      fetch(url)
      .then((response)=> {
          if(!response.ok)
          {
            throw new Error("Couldn't connect to the resources.")
          }
          return response.json()
      })
      .then((data)=>{
        setData(data);
        setIsLoading(false);
        setError(null)
      })
      .catch(err=> {
        setIsLoading(false)
        setError(err.message)
      });
    }, [url]);

    return {data, isLoading, error};
}
 
export default useFetch;