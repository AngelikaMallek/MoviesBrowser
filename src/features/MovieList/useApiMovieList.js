import axios from 'axios';
import { useState, useEffect } from "react";
import { popularMoviesURL } from "../../common/API/APIData";
import { usePagination } from '../../common/Pagiation/usePagination';

export const useApiMovieList = () => {
    const [movieList, setMovieList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	
	const page = usePagination();

    useEffect(() => {
        const fetchApiMovieList = async () => {
            try {
                const response = await axios.get(page ? popularMoviesURL + `&page=${page}` : popularMoviesURL);
                setMovieList(response.data);
                setLoading(false);
            } catch {
                setError(true);
                setLoading(false);
            }
        }

        setLoading(true);
        setTimeout(fetchApiMovieList, 2000);
    },[page]);

    return {movieList, loading, error};
}


