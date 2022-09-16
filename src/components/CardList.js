import './App.css';
const   CardList=({personajes})=>{
    return(
        <div className="container">
            {
            personajes?.map(personaje =>{

                return (
                <div className="container-card">
                    <h4 className='name'>{personaje.name}</h4>
                    <img className='img' src={personaje.image} alt={personaje.name} />
                </div>
                )
            })}
        </div>
    )
}

export default CardList;