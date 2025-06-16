import React,{useState, useEffect} from 'react';
import MovieCards from '../MovieCards/MovieCards';
import { useQuery } from '@tanstack/react-query';
import "./Dashboard.css"
const Dashboard = ()=>{
    const [movieList, setMovieList]=useState([]);

    const { isPending, error, data } = useQuery({
        queryKey: ['movies-list'],
        queryFn: () =>
          fetch('https://api.themoviedb.org/3/movie/popular?api_key=ca7d605fdfb23f314b8d71d185209d56').then((res) =>
            res.json(),
          ).then(d=>setMovieList(d))
      })


    return(
        <>
        <div>
        <h2 className='section-title'>Movies List</h2>
        
        <MovieCards movieList={movieList?.results || []}/>
        </div>
        </>
    )
}
export default Dashboard;