import React, { useEffect, useState } from 'react';

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (urlParams: any) => {
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState({show: false, msg: ''});
    const [data, setData] = useState(null);
    
    const fetchMovie = async (url: any) => {
        setIsloading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.Response === 'True') {
                setData(data.Search || data)
                setError({show: false, msg: ''});
            } else {
                setError({show: true, msg: data.Error})
            }
            setIsloading(false);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMovie(`${API_ENDPOINT}${urlParams}`)
    },[urlParams]);
  return { isLoading, error, data }
}

export default useFetch
