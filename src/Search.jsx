import React from 'react';
import { useState } from 'react';
import './App.css';
import Result from './Result';

const Search = ()=>{

    const [img,setImg] = useState('');

    const searchEvent = (event)=>{
        const data = event.target.value;
        console.log(data);
        setImg(data);
    }

    return(
        <>
            <div className='searchbar'>
                <input type="text" placeholder='Search'
                    value={img}
                    onChange={searchEvent}
                />
               {img === "" ? null :<Result name={img}/>};     
            </div>
            
        </>
    )
}
export default Search;