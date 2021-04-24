import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3">
        © {new Date().getFullYear()} DeltaCraft
      </div>
    </footer>
  );
};

export default Footer;
