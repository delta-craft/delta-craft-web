import classNames from "classnames";
import React from "react";
import styles from "../../styles/Jumbotron.module.css";

interface IProps {
  imageUri?: string;
}

const Jumbotron: React.FC<IProps> = ({ children, imageUri }) => {
  return (
    <section>
      <div
        className={classNames("text-center bg-image parallax", styles.height)}
        style={{
          backgroundImage: imageUri && `url('/img/${imageUri}')`,
        }}
      >
        <div
          className="mask"
          style={{ backgroundColor: imageUri ? "rgba(0,0,0,.4)" : "" }}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
