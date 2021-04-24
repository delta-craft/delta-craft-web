import React from "react";
import { SeasonCard } from ".";

const SeasonContainer: React.FC = () => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-around">
      <div className="p-5">
        <SeasonCard
          title="Season 1"
          imageUri="jumbotrons/Season_1_Banner.png"
          link="/season/s1"
        />
      </div>
      <div className="p-5">
        <SeasonCard
          title="Season 2"
          imageUri="jumbotrons/Season_2_Banner.png"
          link="/season/s2"
        />
      </div>
      <div className="p-5">
        <SeasonCard
          title="Season 3"
          imageUri="jumbotrons/Season_3_Banner.png"
          link="/season/s3"
        />
      </div>
    </div>
  );
};

export default SeasonContainer;
