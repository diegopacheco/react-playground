import React from 'react';
import PrettyRating from "pretty-rating-react";
import {
  faHeart,
  faStar,
  faHeartBroken,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";

const icons = {
  star: {
    complete: faStar,
    half: faStarHalfAlt,
    empty: farStar,
  },
  heart: {
    complete: faHeart,
    half: faHeartBroken,
    empty: farHeart,
  },
};

const colors = {
 star: ['#d9ad26', '#d9ad26', '#434b4d'],
 heart: ['#9b111e', '#a83f39'],
};

const Main = () => (
 <div>
  <div>
   <h1>Assesment</h1>
   <PrettyRating value={5} icons={icons.star} colors={colors.star} />
  </div>

  <div>
   <h1>Assesment</h1>
   <PrettyRating value={3.5} icons={icons.star} colors={colors.star} />
  </div>

  <div>
   <h1>6.5/10 life points</h1>
   <PrettyRating value={6.5} icons={icons.heart} colors={colors.heart} max={10} />
  </div>

  <div>
   <h1>Full life points</h1>
   <PrettyRating value={10} icons={icons.heart} colors={colors.heart} max={10} />
  </div>
 </div>
);

export default Main;