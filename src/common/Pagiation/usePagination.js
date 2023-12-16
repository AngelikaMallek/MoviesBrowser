import { useState } from "react";

export const usePagination = (query) => {
  const pageFromParam = parseInt(query);
	const [page, setPage] = useState(pageFromParam || 1);

  const pagePrevious = () => {
    setPage((page) => page - 1);
  };
   
  const pageNext = () => {
    setPage((page) => page + 1);
  };
    
  const setFirstPage = () => {
    setPage((page) => (page = 1));
  };
    
  const setLastPage = () => {
    setPage((page) => (page = 500));
  };
      
	return { page, pagePrevious, pageNext, setFirstPage, setLastPage };
};