import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";


const NotFound = () => (<h1>404 no content found!</h1>)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route  path="/movie" element={<Movie />} />
          <Route path="/detail" element={<MovieDetail />} />
        </Route>
        <Route path="*"  element={<NotFound/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
