import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import { AppProvider } from "./utils/AppContext";
import Favorite from "./pages/Favorite";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";




<<<<<<< HEAD

const NotFound = () => <h1>404 no content found!</h1>;
=======
>>>>>>> daae95ac5c60213efd038403072ccec5cff56327

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
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </AppProvider>
     </div>
   
  );
}

export default App;
