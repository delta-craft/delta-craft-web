import React from "react";
import Head from "next/head";
import { MainLayout } from "../components/layout";
import { Jumbotron } from "../components/hero";
import { SeasonContainer } from "../components/seasons";
import { JoinUsContainer } from "../components/join-us";

const Page: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>DeltaCraft</title>
      </Head>
      <Jumbotron imageUri="jumbotrons/Banner3.webp">
        <div className="d-flex justify-content-center justify-content-md-end align-items-center align-items-md-end h-100 mt-4 p-5">
          <div className="text-white text-md-end font-delta">
            <p>
              <img src="/img/logos/S3-White.svg" className="logo-img" />
            </p>
            {/* <h1 className="display-2 font-weight-bold my-4">DeltaCraft</h1>
            <p className="display-4 font-weight-bold mb-4 pb-2">
              Season 3 - Warmongers
            </p>*/}
          </div>
        </div>
      </Jumbotron>
      <div className="container my-5 py-5" id="join-us">
        <div className="d-flex justify-content-center flex-column align-items-center h-100 mt-4">
          <h4 className="display-4 font-weight-bold text-black font-delta">
            Přidej se k nám
          </h4>
          <JoinUsContainer />
        </div>
      </div>
      <Jumbotron imageUri="jumbotrons/s2/prlx2.png">
        <div className="d-flex justify-content-center flex-column align-items-center h-100 mt-4">
          <h4 className="display-4 font-weight-bold text-white font-delta">
            DeltaCraft seasons
          </h4>
          <SeasonContainer />
        </div>
      </Jumbotron>
      <div className="container"></div>
    </MainLayout>
  );
};

export default Page;
