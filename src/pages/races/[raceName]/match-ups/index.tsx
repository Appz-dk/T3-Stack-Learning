import Head from "next/head";
import { useRouter } from "next/router";
import RaceCard from "../../../../components/RaceCard";

const MatchUpsPage = () => {
  const { raceName } = useRouter().query;
  return (
    <>
      <Head>
        <title>SC2 Build Order Manager</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex h-full flex-col items-center justify-center text-black dark:bg-gray-800 dark:text-white">
        <h1 className="mb-2 text-2xl">Choose Opponent's race</h1>
        <ul className="grid grid-cols-3 gap-4">
          <li>
            <RaceCard
              raceImgSrc={"/zerg.jpg"}
              raceName={`${raceName}`}
              opponentRace="zerg"
            />
          </li>
          <li>
            <RaceCard
              raceImgSrc={"/terran.jpg"}
              raceName={`${raceName}`}
              opponentRace="terran"
            />
          </li>
          <li>
            <RaceCard
              raceImgSrc={"/protoss.jpg"}
              raceName={`${raceName}`}
              opponentRace="protoss"
            />
          </li>
        </ul>
      </section>
    </>
  );
};

export default MatchUpsPage;
