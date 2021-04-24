import Link from "next/link";
import React from "react";

interface IProps {
  title: string;
  desc: string;
  icon?: JSX.Element;
  link?: string;
}

const JoinUsCard: React.FC<IProps> = ({ title, desc, icon, link = "" }) => {
  return (
    <Link href={link}>
      <a target="_blank">
        <div className="card" style={{ minHeight: 150 }}>
          <div className="card-body hover-shadow d-flex flex-column align-items-center">
            <div className="display-5 text-black">{icon}</div>
            <h4 className="card-title text-black">{title}</h4>
            <p className="card-text text-black">{desc}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default JoinUsCard;
