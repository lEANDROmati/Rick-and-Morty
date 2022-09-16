
import './App.css';

const Nav =({page , setPage})=>{
    

    function prevPage(){
        if(page === 1){
            setPage(page+1)
        }else{
            setPage(page-1)
        }
    }

    function netxPage(){
        setPage(page + 1)
    }

    
    return(
        <div className="container-button">
            <button onClick={prevPage}>prevPage:{page - 1}</button>
            <button onClick={netxPage} >netxPage : {page + 1}</button>
        </div>
    )
}
export default Nav;