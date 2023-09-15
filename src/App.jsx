import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import { AppProvider } from "./utils/AppContext";
import Favorite from "./pages/Favorite";
import Footer from "./components/Footer";




const NotFound = () => <h1>404 no content found!</h1>;

function App() {
  return (
   
     <div className="flex flex-col min-h-screen">
      <AppProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/detail/:id" element={<MovieDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </AppProvider>
     </div>
   
  );
}

export default App;
