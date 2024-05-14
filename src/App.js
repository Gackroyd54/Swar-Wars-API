
import './App.css';
import { GetSW } from './Components/api';
import logo from './sw.png'
import { createContext, useEffect, useState } from 'react';
import GetPlanetas from './Components/Planetas';
import GetFilmes from './Components/Filmes';
import GetNaves from './Components/Naves';
import GetPeople from './Components/People';
import GetVeiculos from './Components/Veiculos';
import GetEspecies from './Components/Especies';
import SearchSW from './Components/Searchbar';

export const caminhoContext = createContext("")

function App() {
  const [caminho,setCaminho] = useState()
  const [informacoes,setInformacoes] = useState()
  return (
    <caminhoContext.Provider value={{caminho,setCaminho,informacoes,setInformacoes}}>
    <div className="App">
      <header className='header'>
        <img src={logo}/>
        {/* < button onClick = {redirect}>ZAp ZAp</button> */}
      </header>
          <div className="consulta-sw">
              <GetPeople/>
              <GetPlanetas/>
              <GetFilmes/>
              <GetNaves/>
              <GetVeiculos/>
              <GetEspecies/>
          </div>
          <SearchSW/>
        </div>
    </caminhoContext.Provider>
  );
}

export default App;
