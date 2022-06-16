import NavBar from "./components/Layout/NavBar/NavBar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from "./components/Layout/Footer/Footer";
import Depoimentos from "./components/Layout/Depoimentos/Depoimentos";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<NavBar/>}/>
          </Routes>
          <Depoimentos />
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
