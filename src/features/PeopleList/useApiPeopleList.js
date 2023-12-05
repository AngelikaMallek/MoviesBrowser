import axios from 'axios';
import { useState, useEffect } from "react";
import { popularPeoplesURL } from "../../common/API/APIData";

export const useApiPeopleList = () => {
    const [peopleList, setPeopleList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchApiPeopleList = async () => {
            try {
                const response = await axios.get(popularPeoplesURL)
                setPeopleList(response.data)
                setLoading(false);
            } catch {
                setError(true);
                setLoading(false);
            }
        }

        setTimeout(fetchApiPeopleList, 2000);
    },[]);

    return {peopleList, loading, error};
}


