import React, { useContext, useState } from 'react'
import { GetSW } from './api'
import { caminhoContext } from '../App'
export default function GetVeiculos(){
    const [veiculos,setVeiculos] = useState([])
    const {informacoes,setInformacoes} = useContext(caminhoContext)
    const {caminho,setCaminho} = useContext(caminhoContext)
    const onClickHandler= async ()=>{
        try{
            const response = await GetSW("vehicles")
        
        setVeiculos(response.results)
        console.log("Veiculos: ",veiculos)

        }catch(e){
            console.log(e)
        }
        
    }
    const searchVeiculos = async (m)=>{
        try{
            const response = await GetSW(m.slice(27,38))
            console.log(response)
            setInformacoes(response)
            console.log("Caminho:",caminho)
        }catch(e){
            console.log(e)
        }
        
        
    }
    return(
        <div className='veiculos-container'>
            <div className='veiculos-container-btn'>
                <button className='listar-btn' onClick={onClickHandler}>Mostrar veiculos</button>
            </div>
            
            <div className='veiculos-nome-container'>
                <div  className='veiculos'>{veiculos.map(v=><p onClick={()=>{
                    setCaminho(v.url.slice(27,38))
                    searchVeiculos(v.url)
                }} className='name-item' key={v.name}>{v.name} </p>)}</div>
            </div>
        </div>
    )
}