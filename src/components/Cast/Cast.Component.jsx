import React from "react";

const Cast = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <img
          src={`https://image.tmdb.org/t/p/original${props.image}`}
          alt="Cast Crew"
          className="w-full h-full rounded object-cover object-center"
        />
      </div>
      <h1 className="text-xl text-gray-700">{props.castName}</h1>
      <h3 className="text-sm text-gray-500">{props.role}</h3>
    </div>
  );
};

export default Cast;
