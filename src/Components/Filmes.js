import React, { useContext, useState } from 'react'
import { GetSW } from './api'
import { caminhoContext } from '../App'

export default function GetFilmes(){
    const [click,setClick] = useState("")
    const [url,setUrl] = useState("")
    const {informacoes,setInformacoes} = useContext(caminhoContext)
    const {caminho,setCaminho} = useContext(caminhoContext)
    const [filmes,setFilmes] = useState([])
    const onClickHandle = async ()=>{
        try{
        const filmes = await GetSW("films")
        console.log("Filmes: ",filmes.results)
        setFilmes(filmes.results)
        //filmes.map(f=>console.log(f))
        }catch(e){
            console.log(e)
        }
    }
    const searchFilm = async (m)=>{
        try{
        const response = await GetSW(m.slice(27,38))
        setInformacoes(response)
        console.log(response)
        console.log("Caminho:",caminho)
        }catch(e){
            console.log(e)
        }
        
    }
    return(


        <div className = "films-container">
            
            <div className='film-container-btn'>
                <button className='listar-btn' onClick={onClickHandle}>Mostrar filmes</button>

            </div>
            <div className='films-list-container'>
               
                <div>
                    
                    {filmes.map(f=><p className='name-item' onClick={()=>{
                    setCaminho(f.url.slice(27,38))
                    searchFilm(f.url)}} key={f.title}>{!f.title.includes("Awakens")?f.title:""}</p>)}
                </div>
                


            </div>
        </div>
    )
}