import Head from "next/head";
import React from "react";
import { Footer } from "../footer";
import { Navbar } from "../navbar";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        <link rel="stylesheet" href="/mdb/mdb.min.css" />
        <script type="text/javascript" src="/mdb/mdb.min.js" defer></script>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
