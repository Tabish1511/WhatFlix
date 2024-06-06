"use client"

import axios from "axios";
import { useState } from "react";
import { InputBox } from "./InputBox";
import SubHeadingComponent from "./SubHeadingComponent";
import { Button } from "./Button";
import Movie from "./Movie";
import Movies from "./Movies";
import { Genres } from "./Genres";

interface MovieInterface {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export default function SearchComponent() {
    const [keywords, setKeywords] = useState<string>('');
    const [movies, setMovies] = useState<MovieInterface[]>([]);
    const [hasSearched, setHasSearched] = useState<boolean>(false);

    const getRandomMovies = (results: MovieInterface[], count: number) => {
        const shuffled = results.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const handleSearch = async () => {
        setHasSearched(true)
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?query=${keywords}&api_key=f8e8d5d414e06e7340cee310b81b0690`
            );

            const movieResponse = response.data.results;
            const randomMovies = getRandomMovies(movieResponse, 3);

            setMovies(randomMovies);

            if(randomMovies.length > 0){
                const target = document.getElementById('MovieComponent');
                if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                }
            }


        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    return (
        <div className="flex flex-col justify-center">
            <div id="SearchComponent" className="flex flex-col justify-center h-svh">
                <div className="flex justify-center m-4">
                    <SubHeadingComponent />
                </div>
                <div className="flex justify-center m-4">
                    <InputBox
                        name="Keywords"
                        placeholder="Keywords search..."
                        onChange={e => setKeywords(e.target.value)}
                    />
                    <Genres label="Genres" genres={genres} />
                    <Button onClick={handleSearch} label="Search" />
                </div>
            </div>
            <div id="MovieComponent" className="">
                <Movies hasSearched={hasSearched} movies={movies}/>
            </div>
        </div>
    );
}

// Usage example
const genres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' }
  ];









































  // const genres = [
//     'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary',
//     'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery',
//     'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western', 'Biography'
//   ];




















// https://image.tmdb.org/t/p/w500/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg  //  <<== USE POSTER PATH

//https://www.youtube.com/watch?v=03FAepR-WVQ&t=519s    //  <<== yt tut

// {movies.length > 0 ? ( 
//     <div>
//     <Movie poster={movies[0].poster_path} />
//     <Movie poster={movies[1].poster_path} />
//     <Movie poster={movies[2].poster_path} /> 
//     </div>
//     ) : ( <div>No movies found</div> )}


                            // console.log(response.data.results[0].title);    //<<== Gives name of first movie
                            // console.log(response.data.results[1].title);    //<<== Gives name of first movie
                            // console.log(response.data.results[2].title);    //<<== Gives name of first movie