import React, { useContext } from 'react'
import { GetSW } from './api'
import { useState } from 'react'
import { caminhoContext } from '../App'
export default function GetPlanetas(){
    const [planetas,setPlanetas] = useState([])
    const {informacoes,setInformacoes}=useContext(caminhoContext)
    const {caminho,setCaminho} = useContext(caminhoContext)
    const onClickHandle = async ()=>{
        try{
        const listaPlanetas = await GetSW("planets")
        setPlanetas(listaPlanetas.results)
        console.log("Planetas: ",planetas)
        }catch(e){
            console.log(e)
        }
        
    }
    const searchPlanetas = async (m)=>{
        try{
        const response = await GetSW(m.slice(27,38))
        setInformacoes(response)
         console.log("informação:",response)
        // console.log("url:",m.slice(27,38))
        // console.log("Caminho:",caminho)

        }catch(e){
            console.log(e)
        }
        
        //console.log("URL:",url.slice(27,36))
        
    }
    return(
        <div className='planetas'>
                <button className='listar-btn' onClick={onClickHandle}>Mostrar Planetas</button>
                
                <div className='nome-planetas-container'>{planetas.map(p=>
                    <p onClick={()=>{
                        setCaminho(p.url.slice(27,38))
                        searchPlanetas(p.url)
                    }} className='name-item' key={p.name}>{p.name}</p>
                )}</div>

        </div>
    )

}