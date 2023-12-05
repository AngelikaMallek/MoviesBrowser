import axios from "axios";
import { useState, useEffect } from "react";
import { URL, key } from "../../common/API/APIData";

export const useCredits = (movieId) => {
	const [credits, setCredits] = useState(null);
	const fetchingURL = `${URL}/movie/${movieId}/credits?api_key=${key}&language=en-US&`

	useEffect(() => {
        const fetchCredits = async () => {
            try {
                const response = await axios.get(fetchingURL)
                setCredits(response.data)
            } catch {
                
            }
    }

        setTimeout(fetchCredits, 2000);
    },[movieId]);


	return { credits };
};
