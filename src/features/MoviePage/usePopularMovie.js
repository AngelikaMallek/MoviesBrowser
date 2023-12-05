import axios from 'axios';
import { useState, useEffect } from "react";
import { URL, key } from "../../common/API/APIData";

export const usePopularMovie = (movieId) => {
	const [popularMovie, setPopularMovie] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const fetchingURL = `${URL}/movie/${movieId}?api_key=${key}&language=en-US&`

	useEffect(() => {
        const fetchPopularMovie = async () => {
            try {
                const response = await axios.get(fetchingURL)
                setPopularMovie(response.data)
                setLoading(false);
            } catch {
                setError(true);
                setLoading(false);
            }
    }

        setTimeout(fetchPopularMovie, 2000);
    },[]);

	return { popularMovie, loading, error };
};
