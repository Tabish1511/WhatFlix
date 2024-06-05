import Movie from "./Movie";

interface MoviesProps {
    hasSearched?: boolean;
    movies?: any;
}

export default function Movies(props: MoviesProps) {
    return (
        <div>
            {props.hasSearched &&
                <div className="flex justify-center">
                    {props.movies.length > 0 ? ( 
                    <div className="w-1/2">
                        {props.movies.map((movie:any, index:number) => (
                            <Movie key={index} poster={movie.poster_path} name={movie.title} description={movie.overview}/>
                        ))}
                    </div>
                    ) : ( <div>No movies found</div> )}
                </div>}
        </div>
    )
}