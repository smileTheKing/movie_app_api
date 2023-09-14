import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import { AppProvider } from "./utils/AppContext";



const NotFound = () => <h1>404 no content found!</h1>;

function App() {
  return (
   
     <>
      <AppProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/detail" element={<MovieDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </AppProvider>
     </>
   
  );
}

export default App;
