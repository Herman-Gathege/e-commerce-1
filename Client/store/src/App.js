// import Home from './components/SitePages/HomePage/HomePage';
// import Nav from './Components/Nav';
import { BrowserRouter,Route,Routes, } from 'react-router-dom';
import './App.css';
import { HomePage } from './Components/SitePages/HomePage/HomePage.jsx';
import { NavigationLink } from './Components/SitePages/HomePage/components/NavigationLink.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
    <NavigationLink/>
     <Routes>
      <Route path="/" element={<HomePage />} />

      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/discover" element={<Discover />} /> */}
      
     
     </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App