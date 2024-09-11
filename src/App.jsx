import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import "./App.css/";
import { Route, Routes } from "react-router-dom";
import CountryPage from "./components/countryPage/CountryPage.jsx";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/country-page" element={<CountryPage />} />
      </Routes>
    </>
  );
}
