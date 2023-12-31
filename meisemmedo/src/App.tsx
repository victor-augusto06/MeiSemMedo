import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import {Routes,Route} from 'react-router-dom';
import FuncaoGov from './Pages/FuncaoGov';
import Gerenciamento from './Pages/Gerenciamento';
import Tutorial from './Pages/Tutorial';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import NotFound from './Pages/NotFound';
import PaginaComponenteAgenda from './Pages/PaginaComponenteAgenda';
import PaginaComponenteEntradaeSaida from './Pages/PaginaComponenteEntradaeSaida';
import PaginaComponenteHistorico from './Pages/PaginaComponenteHistorico';
import PaginaComponenteRelatorio from './Pages/PaginaComponenteRelatorio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<NotFound/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/gov' element={<FuncaoGov/>}></Route>
        <Route path='/gen' element={<Gerenciamento/>}></Route>
        <Route path='/tutorial' element={<Tutorial/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cadastro' element={<Cadastro/>}></Route>
        <Route path='/agenda' element={<PaginaComponenteAgenda/>}></Route>
        <Route path='/entrada_saida' element={<PaginaComponenteEntradaeSaida/>}></Route>
        <Route path='/historico' element={<PaginaComponenteHistorico/>}></Route>
        <Route path='/relatorio' element={<PaginaComponenteRelatorio/>}></Route>
        
        
      </Routes>
    </div>
  );
}

export default App;
