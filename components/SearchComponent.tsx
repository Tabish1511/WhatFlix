"use client"

import axios from "axios";
import { useState } from "react";
import { InputBox } from "./InputBox";
import SubHeadingComponent from "./SubHeadingComponent";
import { Button } from "./Button";
import Movie from "./Movie";
import Movies from "./Movies";

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
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    return (
        <div className="border-solid border-4 border-green-500 flex flex-col justify-center">
            <div id="SearchComponent" className="border-solid border-4 border-red-500 flex flex-col justify-center h-svh">
                <div className="flex justify-center m-4">
                    <SubHeadingComponent />
                </div>
                <div className="flex justify-center m-4">
                    <InputBox
                        name="Keywords"
                        placeholder="Keywords search..."
                        onChange={e => setKeywords(e.target.value)}
                    />
                    <Button onClick={handleSearch} label="Search" />
                </div>
            </div>
            <div id="MovieComponent" className="h-svh">
                <Movies hasSearched={hasSearched} movies={movies}/>
            </div>
        </div>
    );
}



























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