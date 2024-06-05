interface MovieProps {
    poster?: string;
}

export default function Movie(props: MovieProps) {
    return (
        <div className="border-solid border-2 border-white w-40 h-64">
            <img src={`https://image.tmdb.org/t/p/w500/${props.poster}`} alt="Movie Poster" />
        </div>
    )
}