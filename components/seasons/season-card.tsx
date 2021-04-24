import React from "react";
import Link from "next/link";

interface IProps {
  imageUri: string;
  title: string;
  link: string;
}

const SeasonCard: React.FC<IProps> = ({ imageUri, title, link }) => {
  return (
    <Link href={link}>
      <div className="card cursor-pointer">
        <div
          className="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img src={`/img/${imageUri}`} className="img-fluid" />
          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </Link>
  );
};

export default SeasonCard;
