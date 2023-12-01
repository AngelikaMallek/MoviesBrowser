import { useState, useEffect } from "react";
import axios from 'axios'

const URL = "https://api.themoviedb.org/3/movie/popular?api_key=7027d867fdeb289f18a3c6278583d82d&language=en-US";

export const useRepositories = () => {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const response = await axios.get(URL)
                setRepositories(response.data)
                setLoading(false);
            } catch {
                setError(true);
                setLoading(false);
            }
        }

        setTimeout(fetchRepositories, 2000);
    },[]);

    return {repositories, loading, error};
}


