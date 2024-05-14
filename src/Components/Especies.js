import React, { useEffect, useContext,useState } from 'react'
import { GetSW } from './api'
import { caminhoContext } from '../App'
import { SearchSW } from './Searchbar'
export default function GetEspecies() {

    const [especies, setEspecies] = useState([])
    const {informacoes,setInformacoes} = useContext(caminhoContext)
    const {caminho,setCaminho} = useContext(caminhoContext)
    const onClickHandler = async () => {
        
        try {
            const response = await GetSW("species")
            setEspecies(response.results)
            console.log("Especies: ", especies)
            //console.log(response)
        }catch(e){
            console.log(e)
        }
        

    }
    const searchSpecie = async (m)=>{
        try{
        const response = await GetSW(m.slice(27,38))
        setInformacoes(response)
        console.log("response:",response)
        console.log("URL:",m)
        }catch(e){
            console.log(e)
        }
    }
    return (
        <div className='especies-container'>
            <div className='especies-btn'>
                <button className='listar-btn' onClick={onClickHandler}>Mostrar especies</button>
            </div>
            <div className='species-name-list'>
                {especies.map(e=><p  onClick={()=>{
                    setCaminho(e.url.slice(27,38))
                    searchSpecie(e.url)
                }}className='name-item' key={e.created}>{e.name}</p>)}
                
            </div>
        </div>
    )
}