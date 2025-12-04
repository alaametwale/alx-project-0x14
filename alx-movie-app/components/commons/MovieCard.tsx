import React from "react";

interface MovieCardProps {
  title: string;
  overview: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, overview }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold text-lg">{title}</h3>
      <p>{overview}</p>
    </div>
  );
};

export default MovieCard;
