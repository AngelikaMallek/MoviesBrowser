import axios from 'axios';
import { useState, useEffect } from "react";
import { popularMoviesURL } from "../../common/API/APIData";

export const useApiMovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchApiMovieLis = async () => {
            try {
                const response = await axios.get(popularMoviesURL)
                setMovieList(response.data)
                setLoading(false);
            } catch {
                setError(true);
                setLoading(false);
            }
        }

        setTimeout(fetchApiMovieLis, 2000);
    },[]);

    return {movieList, loading, error};
}


