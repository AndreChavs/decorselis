import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { _subRotas } from "./Apis/Rotas";
import Home from './components/Pages/Home'
import Pagina404 from './components/Pages/Pagina404'
import Sobre from './components/Pages/Sobre'
import Produtos from './components/Pages/Produtos'
import Contato from "./components/Pages/Contato"
import Blog from './components/Pages/Blog'

function App() {
  return <>
    <BrowserRouter>
      <Header className='header' id='header' />
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="produtos/*" >
          {_subRotas.map( rota => {
            return <Route key={rota.id} path={rota.path} element={<Produtos />} />
          })}
          <Route path="*" element={<Pagina404 />}/>
        </Route>
        <Route path="sobre" element={<Sobre />} />
        <Route path="blog" element={<Blog />}/>
        <Route path="contato" element={<Contato />}/>
        <Route path="*" element={<Pagina404 />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App;
