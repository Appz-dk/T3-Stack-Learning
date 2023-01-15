import Head from "next/head";
import React from "react";
import RaceCard from "../components/RaceCard";

const FindBuildsPage = () => {
  return (
    <>
      <Head>
        <title>SC2 Build Order Manager</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full flex-col items-center justify-center gap-8 text-black dark:bg-gray-800 dark:text-white">
        <h1 className="mb-2 text-2xl">Choose your race</h1>
        <ul className="grid grid-cols-3 gap-4">
          <li>
            <RaceCard raceImgSrc={"/zerg.jpg"} raceName="zerg" />
          </li>
          <li>
            <RaceCard raceImgSrc={"/terran.jpg"} raceName="tarran" />
          </li>
          <li>
            <RaceCard raceImgSrc={"/protoss.jpg"} raceName="protoss" />
          </li>
        </ul>
      </main>
    </>
  );
};

export default FindBuildsPage;
