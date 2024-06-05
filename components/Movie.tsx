interface MovieProps {
    poster?: string;
    name?: string;
    description?: string;
    // genre?: string;
}

export default function Movie(props: MovieProps) {
    return (
        <div className="border-solid border-2 border-white h-40 m-4">
            <div className="h-40 w-40 float-left ">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${props.poster}`}
                    alt="Movie Poster"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-bold">{props.name}</h2>
                <p className="text-sm">{props.description}</p>
                {/* <p>{props.genre}</p> */}
            </div>
        </div>
    )
}
