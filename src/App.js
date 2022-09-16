import { useState } from 'react';
import './App.css';
import Card from './components/card';
import Nav from './components/Nav';


function App() {
  const [page , setPage]= useState(1)
  
  return (
    <div className="App">  
       <h1 className='title'>Rick and Morty</h1>
       <Nav 
        page ={page}  setPage={setPage} />
       <Card page = {page} /> 
    </div>
  );
}

export default App;
