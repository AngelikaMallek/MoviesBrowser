import axios from 'axios';
import { useState, useEffect } from "react";
import { popularMoviesURL } from "../../common/API/APIData";
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export const useApiMovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("page");
    console.log(query);

    useEffect(() => {
        const fetchApiMovieList = async () => {
            try {
                const response = await axios.get(popularMoviesURL + `&page=${query}`);
                console.log(popularMoviesURL + `${query}`);
                setMovieList(response.data);
                setLoading(false);
            } catch {
                setError(true);
                setLoading(false);
            }
        }

        setTimeout(fetchApiMovieList, 2000);
    },[query]);

    return {movieList, loading, error};
}


