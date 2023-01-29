import React, { useEffect, useState } from "react";
import axios from "axios";

import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarouselComponent";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

import DefaultlayoutHoc from "../layout/Default.layout";

const Homepage = () => {
  const [recommendedMovies, setrecommendedMovies] = useState([]);
  const [premierMovies, setpremierMovies] = useState([]);
  const [onlineStreamEvents, setonlineStreamEvents] = useState([]);
  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setrecommendedMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setpremierMovies(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);

  useEffect(() => {
    const requestTopratedMovies = async () => {
      const getTopratedMovies = await axios.get("/movie/top_rated");
      setonlineStreamEvents(getTopratedMovies.data.results);
    };
    requestTopratedMovies();
  }, []);

  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of Recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>
      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              className="w-full h-full"
              alt="Rupay"
            />
          </div>
          <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
            <PosterSlider
              title="Premiers"
              subtitle="Brand new releases every Friday"
              posters={premierMovies}
              isDark={true}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online Streaming Events"
          subtitle="OSE"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultlayoutHoc(Homepage);
