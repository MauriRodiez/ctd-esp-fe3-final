
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./Utils/routes";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail"


function App() {

  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.contact} element={<Contact />} />
            <Route path={routes.favourite} element={<Favs/>} />
            <Route path={routes.details} element={<Detail/>} />
            <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
