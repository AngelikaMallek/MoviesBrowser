import axios from 'axios';
import { useState, useEffect } from "react";
import { URL, key } from "../../common/API/APIData";

export const usePopularPerson = (personId) => {
	const [popularPerson, setPopularPerson] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const fetchingURL = `${URL}/person/${personId}?api_key=${key}&language=en-US`;

	useEffect(() => {
        const fetchPopularPerson = async () => {
            try {
                const response = await axios.get(fetchingURL)
                setPopularPerson(response.data);
                setLoading(false);
            } catch {
                setError(true);
                setLoading(false);
            }
    }

        setTimeout(fetchPopularPerson, 2000);
    },[]);

	return { popularPerson, loading, error };
};
