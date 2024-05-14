import axios from 'axios'
import React from 'react'
export async function GetSW(tipoPesquisa){
    const response = await axios.get(`http://swapi.py4e.com/api/${tipoPesquisa}/`)
    //console.log(response.data)
    return response.data
}