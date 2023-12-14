import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const usePagination = (query) => {
  const pageFromParam = parseInt(query);
	const [page, setPage] = useState(pageFromParam || 1);
  const history = useHistory();
  const location = useLocation();

  const onInputChange = () => {  
    const searchParams = new URLSearchParams(location.search);  

    if(page === 1) {
      searchParams.delete("page");
    } else {
      searchParams.set("page", page);
    }

    history.push(`${location.pathname}?${searchParams}`);
  }

  const pagePrevious = () => {
    setPage((page) => page - 1);
    onInputChange();
  };
   
  const pageNext = () => {
    setPage((page) => page + 1);
    onInputChange();
  };
    
  const setFirstPage = () => {
    setPage((page) => (page = 1));
    onInputChange();
  };
    
  const setLastPage = () => {
    setPage((page) => (page = 500));
    onInputChange();
  };
      
	return { page, pagePrevious, pageNext, setFirstPage, setLastPage };
};