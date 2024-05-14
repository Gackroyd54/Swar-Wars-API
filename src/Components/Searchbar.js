import React, { useContext, useState } from 'react'
import { GetSW } from './api'
import { caminhoContext } from '../App'
export default function SearchSW(){
    const {caminho,setCaminho} = useContext(caminhoContext)
    const {informacoes,setInformacoes} = useContext(caminhoContext)
    const [species,setSpecies] = useState([])
    const [planeta,setPlaneta] = useState("")
    const [vehicles,setVehicles] = useState("")
    let aVehicles=[]



    const getPlaneta = async (path)=>{
        try{
        const response = await GetSW(path)
         //console.log("planeta getplaneta:",response.name)
         setPlaneta(response.name)
        }catch(e){
            //console.log("Erro de planeta:",e)
        }
    }


    const getSpecies=async (path)=>{
        try{
            const response = await GetSW(path)
            //console.log("Especie:",response.name)
            setSpecies(response.name)
        }catch(e){
            console.log(e)
        }
    }


    const getVehicles= async (path)=>{
        const response = await GetSW(path)
        console.log(response.name)
        aVehicles.push(response.name)
        //aVehicles.map(v=>setVehicles(v))
        //setVehicles(aVeicles)
        //setVehicles(response.name)
        

        }

    if(informacoes&&informacoes.url.includes("people")){
        getPlaneta(informacoes.homeworld.slice(27,37))
        getSpecies(informacoes.species[0].slice(27,36))
        
        //getStarships()
        //getMovies()
        let caminhos = informacoes.vehicles
        caminhos.map(link=>getVehicles(link.slice(27,38)))
        
        }
    if(informacoes&&informacoes.url.includes("planets")){
        //getMovies()
        //getResidents()
    }
    if(informacoes&&informacoes.url.includes("films")){
        //getCharacters()
        //getPlanetas() ver se eu posso reaproveitar a funcao
        //getSpecies()
        //getStarships()
        //getVehicles()
    }
    if(informacoes&&informacoes.url.includes("starships")){
        //getPilots()
        //getFilms()
    }
    if(informacoes&&informacoes.url.includes("vehicles")){
        //getPilots()
        //getFilms()
    }
    if(informacoes&&informacoes.url.includes("people")){
        //getPeople()
        //getFilms()
        //getPlaneta()
    }
    
    const planets={"Name":informacoes?informacoes.name:"",
    "Clima":informacoes?informacoes.climate:"","Diameter":informacoes?informacoes.diameter:"",
    "Population":informacoes?informacoes.population:"",
    "Orbital Period":informacoes?informacoes.orbital_period:"",
    "Rotational Period":informacoes?informacoes.rotation_period:"",
    "Terrain":informacoes?informacoes.terrain:""}
    
    const people = {"Name":informacoes?informacoes.name:"",
    "Eyes Color":informacoes?informacoes.eye_color:"",
    "Hair Color":informacoes?informacoes.hair_color:"",
    "Planet":planeta,
    "Weight":informacoes?informacoes.mass:"",
    "Height":informacoes?informacoes.height:"",
    "Skin Color":informacoes?informacoes.skin_color:"",
    "Birth Year":informacoes?informacoes.birth_year:"",
    "Specie":species,
    "Vehicles":"aVehicles"
             } 
                        
    const movies = {"Title":informacoes?informacoes.title:"",
    "Personagens":informacoes?informacoes.title:"",
    "Director":informacoes?informacoes.director:""
    ,"Episode Id":informacoes?informacoes.episode_id:"",
    'Opening crawl':informacoes?informacoes.opening_crawl:"",
    "Release Date":informacoes?informacoes.release_date:"",
    "Producer":informacoes?informacoes.producer:""
                    
    }
    const naves = {
    'Name':informacoes?informacoes.name:"",
    'MGLT(megalight por hour)':informacoes?informacoes.MGLT:"",
    'Cargo Capacity':informacoes?informacoes.cargo_capacity:"",
    "Consumables":informacoes?informacoes.consumables:"",
    'Cost in Credits':informacoes?informacoes.cost_in_credits:"",
    'Crew':informacoes?informacoes.crew:"",
    'Length':informacoes?informacoes.length:"",
    'Hyperdrive Rating':informacoes?informacoes.hyperdrive_rating:"",
    'Manufacturer':informacoes?informacoes.manufacturer:"",
    'Model':informacoes?informacoes.model:"",
    'Passengers':informacoes?informacoes.passengers:"",
    'Starship Class':informacoes?informacoes.starship_class:""
}
const veiculos = {
    'Name':informacoes?informacoes.name:"",
    'Cargo Capacity':informacoes?informacoes.cargo_capacity:"",
    'Cost in Credits':informacoes?informacoes.cost_in_credits:"",
    "Consumables":informacoes?informacoes.consumables:"",
    'Crew':informacoes?informacoes.crew:"",
    'Length':informacoes?informacoes.length:"",
    'Manufacturer':informacoes?informacoes.manufacturer:"",
    'Model':informacoes?informacoes.model:"",
    'Passengers':informacoes?informacoes.passengers:"",
    'Vehicle Class':informacoes?informacoes.vehicle_class:""
}
const especies={"Name":informacoes?informacoes.name:"",
"Average Lifespan":informacoes?informacoes.average_lifespan:"",
"Average Hight":informacoes?informacoes.average_hight:"",
"Classification":informacoes?informacoes.classification:"",
"Designation":informacoes?informacoes.designation:"",
"Eye color":informacoes?informacoes.eye_colors:"",
"Hair Color":informacoes?informacoes.hair_colors:"",
//"Films":films
"Language":informacoes?informacoes.language:"",
//"People":people
"Skin Color":informacoes?informacoes.skin_colors:""
}

//console.log("Classe:",informacoes.vehicle_class)
{/* people = [Name: ",'Eye Color:','Hair Color:','Planet:','Weight:','Height:','Skin color:','Birth Year:','Specie:',"Movies:","Starships","Vehicles"] */}
// planets=[Name,Clima,diametro,filmes,population,residentes,periodo orbital,periodo rotacional,terrain]
//movies = [title,personagens,director,Episode Id,opening crawl,planets, Release Date,Starships,Vehicles,Species]
//naves=[MGLT(megalight por hour),cargo capacity,cost in credits,crew,length,films,hyperdrive rating,name,manufacturer,model,passengers,pilots,starship class]
//veiculos=[]
//especies=[Name,Average Lifespan,Classificarion,Designation,Eye color,Hair Color,films,homeworld,language,people,skinColor]
        return (   
    <div className='informacoes'>
        <div className='informacoes-personagem'>   
            {informacoes&&informacoes.url.includes("people")?
            Object.keys(people).map(k=><p>{k}:{people[k]}</p>)
            :"" }
        </div>
        <div className='informacoes-planetas'>
            {informacoes&&informacoes.url.includes("planets")?
            Object.keys(planets).map(p=><p>{p}:{planets[p]}</p>)   
            :""}
        </div>
        <div className='informacoes-filmes'>
            {informacoes&&informacoes.url.includes("films")?
            Object.keys(movies).map(k=><p>{k}:{movies[k]}</p>)
            :""}
        </div>
        <div className='informacoes-naves'>
            {informacoes&&informacoes.url.includes("starships")?
            Object.keys(naves).map(n=><p>{n}:{naves[n]}</p>)
        :""}
        </div>
        <div className='informacoes-veiculos'>
            {informacoes&&informacoes.url.includes("vehicles")?
            Object.keys(veiculos).map(n=><p>{n}:{veiculos[n]}</p>)
        :""}
        </div>
        <div className='informacoes-especies'>
            {informacoes&&informacoes.url.includes("species")?
            Object.keys(especies).map(s=><p>{s}:{especies[s]}</p>)
        :""}
        </div>
        
    </div>
    )
}