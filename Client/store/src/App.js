// import Home from './components/SitePages/HomePage/HomePage';
// import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Components/SitePages/HomePage/HomePage.jsx";
import { NewInPage } from "./Components/SitePages/NewInPage/NewInPage.jsx";
import { NavigationBar } from "./Components/NavigationBar/NavigationBar.jsx";
import { AboutUs } from "./Components/SitePages/AboutUs/AboutUs.jsx";
import ContactPage  from "./Components/SitePages/ContactPage/ContactPage.jsx";





function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/newin" element={<NewInPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactPage />} />


     
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
