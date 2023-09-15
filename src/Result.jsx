import React from "react";

const Result= (props)=>{

    const img = `https://source.unsplash.com/random/220x250/?${props.name}`;
    return(
        <>
            <div>
                <img src={img} alt="error"/>
            </div>
        </>
    )
}

export default Result;

// https://api.unsplash.com/search/photos?query=minimal