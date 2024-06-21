
import { Route, Routes } from "react-router-dom";
import { routes } from "./Utils/routes";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail"
import Layout from "./Layout/Layout";


function App() {

  return (
      <div className="h-screen flex w-16 md:w-32 lg:w-48">          
          <Routes>
            <Route path={routes.home} element={<Layout />} >
              <Route path={routes.home} element={<Home />} />
              <Route path={routes.contact} element={<Contact />} />
              <Route path={routes.favourite} element={<Favs />} />
              <Route path={routes.details} element={<Detail />} />
              <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
            </Route>
          </Routes>
      </div>
  );
}

export default App;
