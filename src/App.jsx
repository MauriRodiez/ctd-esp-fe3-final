
import { Route, Routes } from "react-router-dom";
import { routes } from "./Utils/routes";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail"
import Layout from "./Layout/Layout";
import Error404 from "./Routes/Error404";


function App() {

  return (
      <div>          
          <Routes>
            <Route path={ routes.home } element={ <Layout /> } >
              <Route path={ routes.home } element={ <Home /> } />
              <Route path={ routes.contact } element={ <Contact /> } />
              <Route path={ routes.favourite } element={ <Favs /> } />
              <Route path={ routes.details } element={ <Detail /> } />
              <Route path={ routes.e404 } element={ <Error404 /> } />
            </Route>
          </Routes>
      </div>
  );
}

export default App;
