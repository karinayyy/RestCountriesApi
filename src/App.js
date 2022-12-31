import Navbar from "./Components/Navbar";
import Countries from "./Components/Countries";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Error from "./Components/Error";
import CountriesPage from "./Pages/CountriesPage";
import CountryPage from "./Pages/CountryPage";
import HomePage from "./Pages/HomePage";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<CountriesPage />} />
              <Route path="/:name" element={<CountryPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="*" element={<Error />} />
          </Routes>
      </BrowserRouter>

  );
}

export default App;
