import React from "react";

const MovieCards = ({movieList})=>{
console.log("movie cards component",movieList)
    return(
<p>{movieList.map(d=>d.original_title)}</p>
    )
}

export default MovieCards;