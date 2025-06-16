import React, { useState, useEffect } from "react";
import MovieCards from "../MovieCards/MovieCards";
import { useQuery } from "@tanstack/react-query";
import "./Dashboard.css";
const Dashboard = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");
const apiKey = import.meta.env.VITE_API_KEY
console.log("import.meta.env",import.meta)
  const { isPending, error, data } = useQuery({
    queryKey: ["movies-list"],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      ).then((res) => res.json()),
    //.then(d=>setMovieList(d))
  });

  useEffect(() => {
    if (searchedValue.trim() === "") {
      setMovieList(data?.results);
    }
  }, [data]);

  useEffect(() => {
    if (searchedValue.trim() === "") {
      setMovieList(data?.results);
    }
  }, [searchedValue]);
  const handleSearchChange = (e) => {
    if (searchedValue.trim() === "") {
      setMovieList(data?.results);
    } else if (e.target.value.trim() !== "") {
      let filteredData = data?.results?.filter((d) =>
        d.original_title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setMovieList(filteredData);
    }
  };

  return (
    <>
      <div>
        <div className="title-search-container">
          <h2 className="section-title">Movies List</h2>
          <input
            placeholder="Search movie title here"
            onChange={(e) => {
              setSearchedValue(e.target.value);
              handleSearchChange(e);
            }}
          />
        </div>

        <MovieCards movieList={movieList || []} />
      </div>
    </>
  );
};
export default Dashboard;
