import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { Jumbotron } from "../../components/hero";
import { MainLayout } from "../../components/layout";
import fs from "fs";
import path from "path";

interface IProps {
  photoNames: string[];
}

const Page: React.FC<IProps> = ({ photoNames }) => {
  return (
    <MainLayout>
      <Head>
        <title>Season 2 - DeltaCraft</title>
      </Head>
      <Jumbotron imageUri="jumbotrons/Banner2.webp">
        <div className="d-flex justify-content-center justify-content-md-end align-items-center align-items-md-start h-100 mt-4 p-5">
          <div className="text-white text-md-end font-delta">
            <p>
              <img src="/img/logos/S2-White.svg" className="logo-img" />
            </p>
            {/* <h1 className="display-2 font-weight-bold my-4">DeltaCraft</h1>
            <p className="display-4 font-weight-bold mb-4 pb-2">
              Season 3 - Warmongers
            </p>*/}
          </div>
        </div>
      </Jumbotron>
      <div className="p-5 text-center bg-image" style={{ height: 150 }}>
        <div className="mask" style={{ backgroundColor: "rgba(0,0,0,0)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-black">
              <h1 className="mb-3 mt-5 pt-4">Vaše výtvory</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 fadeIn z-depth-1">
        <div className="lightbox">
          <div className="row">
            {photoNames.map((x, i) => {
              return (
                <div key={`gallery-item-${i}`} className="col-12 col-md-4 p-1">
                  <div className="image-16x9">
                    <img
                      src={`/img/screenshots/s2/${x}`}
                      className="w-100 shadow-1-strong rounded hover-shadow"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<IProps> = async (context) => {
  const p = path.join(process.cwd(), "public", "img", "screenshots", "s2");

  if (!fs.existsSync(p)) {
    return { notFound: true };
  }
  const files = fs.readdirSync(p);

  return {
    props: {
      photoNames: files.filter((x) => x.endsWith(".webp")),
    },
  };
};
