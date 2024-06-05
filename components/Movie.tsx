import React, { useEffect, useState } from 'react';

interface MovieProps {
  poster?: string;
  name?: string;
  description?: string;
}

export default function Movie(props: MovieProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`h-40 m-4 ${isVisible ? 'animate-fadeIn' : ''}`}>
      <div className="h-40 w-40 float-left">
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.poster}`}
          alt="Movie Poster"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">{props.name}</h2>
        <p className="text-sm">{props.description}</p>
      </div>
    </div>
  );
}
