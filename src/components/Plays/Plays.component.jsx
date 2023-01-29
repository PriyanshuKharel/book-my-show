import React from "react";

const Plays = (props) => {
  return (
    <>
      <div className="flex flex-col items-start gap-2 px-1 md:px-3">
        <div className="h-40 md:h-80">
          <img
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt="Playing Movie"
            className="rounded w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <h3 className="text-xl text-gray-500">{props.title}</h3>
    </>
  );
};

export default Plays;
