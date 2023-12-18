import { useLocation } from "react-router-dom";

export const usePagination = () => {
  
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const queryPage = searchParams.get("page") || 1;
	const page = parseInt(queryPage);

	return page;
};