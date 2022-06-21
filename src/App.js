import NavBar from "./components/Layout/NavBar/NavBar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from "./components/Layout/Footer/Footer";
import Conversao from "./components/Sessões/Conversão/Conversao";
import TextoDeConvencimento from "./components/Sessões/texto de convencimento/TextoDeConvencimento";
import Home from "./components/Sessões/Home/Home";
import Investimento from "./components/Sessões/Investimento/Investimento";
import ListaDeVantagens from "./components/Sessões/Listadecoisasinclusas/ListaDeVantagens"
import Comparacao from "./components/Sessões/Comparação/Comparacao";
import FormContato from "./components/Sessões/Entre em contato/FormContato";
import Faq from "./components/Sessões/FAQ/Faq";

function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
            <Route path="/" element={<NavBar/>}/>
          </Routes>
          <Home />
          <TextoDeConvencimento />
          <ListaDeVantagens />
          <Investimento />
          <Conversao />
          <Comparacao />
          <Faq />
          <FormContato />
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
