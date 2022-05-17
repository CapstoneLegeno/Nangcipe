//import logo from './logo.svg';
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
//import { Link } from 'react-router-dom';
import RegistrationPage from "./components/ResgistrationPage/RegistrationPage";
import Allrecipe from "./components/Allrecipe/Allrecipe";
import { MainPage } from "./components/MainPage/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/allrecipe" element={<Allrecipe />} />
        <Route path="/favorite" element={<Allrecipe />} />
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
