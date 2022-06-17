import NavBar from "./components/Layout/NavBar/NavBar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from "./components/Layout/Footer/Footer";
import Conversao from "./components/Sessões/Conversão/Conversao";
import TextoDeConvencimento from "./components/Sessões/texto de convencimento/TextoDeConvencimento";
import Home from "./components/Sessões/Home/Home";
import Investimento from "./components/Sessões/Investimento/Investimento";

function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
            <Route path="/" element={<NavBar/>}/>
          </Routes>
          <Home />
          <TextoDeConvencimento />
          <Investimento />
          <Conversao />
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
