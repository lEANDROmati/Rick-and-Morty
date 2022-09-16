import {useEffect, useState} from "react"
import CardList from "./CardList";
import './App.css';
const Card =({page})=>{

  const [personajes , setPersonaje] = useState()
  
  
  useEffect(()=>{
    fetchData();
  },[page])

  const fetchData = async ()=>{
    const respuesta = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    const data = await respuesta.json();
    setPersonaje(data.results)
    
  }

    return(
        <div className="container-cards" key={personajes?.id} >
             <CardList  personajes={personajes} />
        </div>
    )
}

export default Card;