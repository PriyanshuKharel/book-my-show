import React, { useState, useEffect } from "react";
import DefaultlayoutHoc from "../layout/Default.layout";
import axios from "axios";
import Slider from "react-slick";
import Plays from "../components/Plays/Plays.component";

const Playpage = () => {
  // const { id } = useParams();

  const [playingMovies, setplayingMovies] = useState([]);
  useEffect(() => {
    const requestStreamingMovies = async () => {
      const getStreamingMovies = await axios.get("/movie/now_playing");
      setplayingMovies(getStreamingMovies.data.results);
    };
    requestStreamingMovies();
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 4,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-gray-800 ml-10">
          Plays in Kathmandu
        </h1>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <div className="flex gap-3">
          <Slider {...settings}>
            {playingMovies.map((each) => (
              <Plays
                // key={index}
                // image={each.poster_path}
                title={each.original_title}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default DefaultlayoutHoc(Playpage);
