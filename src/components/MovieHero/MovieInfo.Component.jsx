import React, { useContext } from "react";
import { useState } from "react";
import { MovieContext } from "../../context/Movie.context";
import PaymentModel from "../PaymentModal/Payment.Component";

const MovieInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const { movie } = useContext(MovieContext);
  const genres = movie.genres?.map(({ name }) => name).join(", ");

  const rentMovie = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovie = () => {
    setIsOpen(true);
    setPrice(599);
  };

  return (
    <>
      <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div className="flex flex-col gap-8">
        <h1 className="text-white font-bold text-5xl">
          {movie.original_title}
        </h1>
        <div className="text-white flex flex-col gap-2">
          <h3>5k rating</h3>
          <h3>Nepali, English, Hindi, Japanese, Spanish</h3>
          <h3>
            {movie.runtime} | {genres}
          </h3>
        </div>
      </div>
      <div className="flex gap-3 items-center w-full">
        <button className="bg-red-400 w-full rounded-lg text-white py-3 font-semibold">
          Rent रु 149
        </button>
        <button className="bg-red-400 w-full rounded-lg text-white py-3 font-semibold">
          Buy रु 599
        </button>
      </div>
    </>
  );
};

export default MovieInfo;
