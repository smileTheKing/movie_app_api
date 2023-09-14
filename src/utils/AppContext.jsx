import React, { useEffect, useState, createContext, useContext } from "react";
import getApi from "./API";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [search, setSeacrh] = useState("");
  const [error, setError] = useState("");
  const [searchMovie, setSeacrhMovie] = useState([]);

  const [favorite, setFavorite] = useState(false);


  const getMovies = async () => {
    try {
      const result = await getApi.get("", { params: { s: "all" } });
      //result is only resuting a array
      setMovies(result.data.Search);
    } catch (e) {
      console.log(e.message);
    }
  };


  // get for moive by title than return a array 
  const getMovieByTitle = async (title) => {
  
    try {
     // if (search.length < 3) return;
      const result = await getApi.get("", { params: { s: title } });
    
      if (search.length < 3 ) return
    
    setError(result.data.Error)

      if (result.data.Search) {
        setSeacrhMovie(result.data.Search);
      }
     
    } catch (e) {
      console.log(e.message);
     // setError(e.message)
    }
  };


  const getMovieById = async (id) => {
  
    try {
     // if (search.length < 3) return;http://www.omdbapi.com/?i=tt1016150
      const result = await getApi.get("", { params: { i: id } });
    
      if (search.length < 3 ) return
    
    setError(result.data.Error)

      if (result.data.Search) {
        setSeacrhMovie(result.data.Search);
      }
     
    } catch (e) {
      console.log(e.message);
     // setError(e.message)
    }
  };
  useEffect(() => {
    //call getMovie
    getMovies();
  }, []);

  return (
    <AppContext.Provider
      value={{
        movies,
        getMovies,
        getMovieByTitle,
        search,
        setSeacrh,
        searchMovie,
        setSeacrhMovie,
        error,
        favorite, 
        setFavorite
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
