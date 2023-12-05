import axios from 'axios';
import { useState, useEffect } from "react";
import { genresURL } from './API/APIData';

export const useGenres = () => {
	const [genres, setGenres] = useState(null);

	useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get(genresURL)
                setGenres(response.data)
            } catch {

            }
    }

        setTimeout(fetchGenres, 2000);
    },[]);

	return { genres };
};
