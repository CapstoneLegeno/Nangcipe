//import logo from './logo.svg';
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
//import { Link } from 'react-router-dom';
import RegistrationPage from "./components/ResgistrationPage/RegistrationPage";
import Allrecipe from "./components/Allrecipe/Allrecipe";
import Detailrecipe from "./components/detailrecipe/detailrecipe.js"
import { MainPage } from "./components/MainPage/MainPage";
import Login from "./components/Login";
import Recipesearch from "./components/recipesearch/Recipesearch";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/allrecipe" element={<Allrecipe />} />
        <Route path="/allrecipe/:recipe" element={<Detailrecipe />} />
        <Route path="/favorite" element={<Allrecipe />} />
        <Route path="/recipesearch" element={<Recipesearch />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
