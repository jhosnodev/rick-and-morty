import './SearchBar.css'
import { useState } from 'react';
export default function SearchBar({onSearch}) {
   const searchElement = ()=> onSearch()
   const [message, setMessage] = useState('');
   const handleChange =(e) => {
      setMessage(e.target.value)
 
   }
   return (
    
      <div className='navbar___search-content'>

         <input type='search' placeholder='search something...' value={message} onChange={handleChange}/>
         <button onClick={searchElement}>🔍</button> 
      </div>
     
   );
}
 