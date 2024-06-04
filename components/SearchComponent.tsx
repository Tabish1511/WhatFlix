"use client"

import axios from "axios";
import { useState } from "react";
import { InputBox } from "./InputBox";
import SubHeadingComponent from "./SubHeadingComponent";
import { Button } from "./Button";

export default function SearchComponent(){
    const [Keywords, setKeywords] = useState("");
    const [movies, setMovies] = useState<any[]>([]);
      
    const getRandomMovies = (results: any, count: number) => {
        const shuffled = results.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    return (
        <div className="border-solid border-2 border-white ">
            <SubHeadingComponent />
            <InputBox name="Keywords" placeholder="Keywords search..." onChange={e => {
                setKeywords(e.target.value);
            }}/>
            <Button
                onClick={async () => {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/search/movie?query=${Keywords}&api_key=f8e8d5d414e06e7340cee310b81b0690`
                );

                const movieResponse = response.data.results;
                // console.log(movieResponse[0].title);

                
                const randomMovies = getRandomMovies(movieResponse, 3);
                // console.log(randomMovies[0].title)

                //@ts-ignore
                setMovies(prevMovies => [...prevMovies, ...randomMovies.map(movie => movie)]);
                console.log(movies);

                //@ts-ignore
                // console.log(randomMovies.map(movie => movie)); // This will log the new movies being added
                }}
                label="Search"/>
        </div>
    )
}



// https://image.tmdb.org/t/p/w500/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg  //  <<== USE POSTER PATH


                            // console.log(response.data.results[0].title);    //<<== Gives name of first movie
                            // console.log(response.data.results[1].title);    //<<== Gives name of first movie
                            // console.log(response.data.results[2].title);    //<<== Gives name of first movie