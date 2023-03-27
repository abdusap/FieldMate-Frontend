import React from "react";
import HomeCard from "./HomeCard";

function HomeSectionProperty() {
  return (
    <div className="flex w-fill bg-white md:flex-row flex-col py-10">
      <HomeCard
        path="/image/search.png"
        head="Search"
        body="Are you looking to play after work, organize your Sunday Fives football match ? Explore the largest network of sports facilities whole over the India"
      />
      <HomeCard
        path="/image/book.png"
        head="Book"
        body="Once you’ve found the perfect ground, court or gym, Connect with the venue through the Book Now Button to make online booking & secure easier payment"
      />
      <HomeCard
        path="/image/play.png"
        head="Play"
        body="You’re the hero, you’ve found a stunning turf or court, booked with ease and now its time to play. The scene is set for your epic match."
      />
    </div>
  );
}

export default HomeSectionProperty;
