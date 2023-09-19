import { BrowserRouter, Routes, Route } from "react-router-dom";
//import "./App.css";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import SideBar from "./pages/SideBar";
import { AppProvider } from "./utils/AppContext";
import Favorite from "./pages/Favorite";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";





function App() {
  return (
   
     <div className="flex flex-col min-h-screen">
      <AppProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/genre" element={<SideBar />} />
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
