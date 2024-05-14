import React, { useContext, useState } from 'react'
import { GetSW } from './api'
import { caminhoContext } from '../App'

export default function GetPeople(){
    const [people,setPeople] = useState([])
    const [url,setUrl] = useState("")
    const {caminho,setCaminho} = useContext(caminhoContext)
    const {informacoes,setInformacoes} = useContext(caminhoContext)
    const onClickHandle = async()=>{
        try{
        const response = await GetSW("people")
        setPeople(response.results)
        console.log("Personagens: " ,response)
        
        //people.map(p=>console.log(p))
        }catch(e){
            console.log(e)
        }
        
        
    }
    const searchPeople=async (m)=>{
        try{
        const response = await GetSW(m.slice(27,38))
        setInformacoes(response)

        console.log(response)
        console.log("caminho:",caminho)

        }catch(e){
            console.log(e)
        }
        
    }
    return(
        
        <div className="people-container">
            <div className='people-container-btn'>
                <button className='listar-btn' onClick={onClickHandle}>Mostrar Personagens</button>
            </div>
            
            <div className='personagens'>
                <p className='people-name'>{people.map(p=><p onClick = {()=>{
                    setCaminho(p.url.slice(27,38)) 
                    searchPeople(p.url)

                }}className='name-item' key={p.name}>{p.name}</p>)}</p>
            </div>
            
        </div>
    )
}