import './SearchBar.css'
export default function SearchBar({onSearch}) {
   const searchElement = ()=> onSearch()
   return (
    
      <div className='navbar___search-content'>

         <input type='search' placeholder='search something...'/>
         <button onClick={searchElement}>🔍</button> 
      </div>
     
   );
}
 