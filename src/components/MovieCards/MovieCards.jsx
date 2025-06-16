import React from "react";
import "./MovieCards.css"
const MovieCards = ({movieList})=>{
console.log("movie cards component",movieList)
    return(
        <>
        {/* <p>{movieList.map(d => d.original_title)}</p> */}
        <div className="card-section-container">
        {movieList.map(d=>(
            <div class="card">
            <img alt="Avatar" src={`https://image.tmdb.org/t/p/w500/${d.poster_path}`} style={{width:'100%'}}/>
                <div class="card-container">
                    <h4><b>{d.original_title}</b></h4>
                    
                </div>
            </div>))}
          </div>
            </>
    )
}

export default MovieCards;