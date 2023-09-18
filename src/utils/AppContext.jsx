import React, { useEffect, useState, createContext, useContext } from "react";
import getApi from "./API";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [searchMovie, setSearchMovie] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const [favorite, setFavorite] = useState(false);


  const getMovies = async (page) => {
    try {
      const result = await getApi.get("", { params: { s: "movie" , page:page} });
      //result is only resulting a array
      if (result.data) {
      setLoading(false);
      setMovies(result.data.Search||[]);
      setTotalResults(parseInt(result.data.totalResults) || 0);
      }
    } catch (e) {
      console.log(e.message);
    }
  };


  // get for movie by title than return a array 
  const getMovieByTitle = async (title) => {
  
    try {
     // if (search.length < 3) return;
      const result = await getApi.get("", { params: { s: title } });
      if (search.length < 3 ) return 
      setError(result.data.Error)
      if (result.data.Search) {
        setMovies(result.data.Search);
      }
     
    } catch (e) {
      console.log(e.message);
     // setError(e.message)
    }
  };

  const scrollTop = ()=>{
    return window.scroll({
      top:0,
      behavior:'smooth'
  })
  }


  useEffect(() => {
    //call getMovie
    getMovies(currentPage);
    scrollTop()
  }, [currentPage]);


  const onPageChange = (page) => {
    if (page >= 1 && page <= Math.ceil(totalResults / 10)) {
      setCurrentPage(page);
    }
  };

  return (
    <AppContext.Provider
      value={{
        movies,
        getMovies,
        getMovieByTitle,
        search,
        setSearch,
        searchMovie,
        setSearchMovie,
        error,
        favorite, 
        setFavorite,
        totalResults,
        currentPage,
        onPageChange,
        loading, 
        setLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);