import React, { useContext, useState } from 'react'
import { GetSW } from './api'
import { caminhoContext } from '../App'
export default function GetNaves(){
    const [url,setUrl] = useState("")
    const [naves,setNaves] = useState([])
    const {caminho,setCaminho} = useContext(caminhoContext)
    const {informacoes,setInformacoes} = useContext(caminhoContext)

    const onclickHandle = async()=>{
        try{
            const response = await GetSW("starships")
            console.log("Naves: ",response)
            setNaves(response.results)

        }catch(e){
            console.log(e)
        }
       
    }
    const searchNaves=async(m)=>{
        try{
            const response = await GetSW(m.slice(27,39))
            console.log(response)
            console.log(m.slice(27,39))
            setInformacoes(response)
            //console.log("Informacoes naves:", informacoes)
        }catch(e){
            console.log(e)
            console.log(m)
        }
    }
    return(
        <div className='naves-container'>
            <div className='naves-btn-container' onClick={onclickHandle}>
                <button className='listar-btn'>Mostrar Naves</button>
            </div>
            <div className='naves-list-container'>
                <p className='naves-name' >{naves.map(n=><p onClick = {()=>{
                    setCaminho(n.url.slice(27,38))
                    searchNaves(n.url)
                }}className='name-item' key={n.name}>{n.name}</p>)}</p>

            </div>
        </div>
    )
}