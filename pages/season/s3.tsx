import Head from "next/head";
import React from "react";
import { Jumbotron } from "../../components/hero";
import { MainLayout } from "../../components/layout";

const Page: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>DeltaCraft</title>
      </Head>
      <Jumbotron />
      <div className="container">

      </div>
      
    </MainLayout>
  );
};

export default Page;
