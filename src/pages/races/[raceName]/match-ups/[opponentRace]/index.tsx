import Head from "next/head";
import { useRouter } from "next/router";
import { trpc } from "../../../../../utils/trpc";

const MatchUpsPage = () => {
  const { raceName, opponentRace } = useRouter().query;

  const matchUp = `${raceName![0]?.toLowerCase()}v${opponentRace![0]?.toLowerCase()}`;
  const builds = trpc.builds.getBuildsByMatchUp.useQuery({ matchUp });

  return (
    <>
      <Head>
        <title>SC2 Build Order Manager</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 text-black dark:bg-gray-800 dark:text-white">
        <h1>
          {raceName} vs {opponentRace}
        </h1>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Match Up</th>
              <th>Build</th>
            </tr>
          </thead>
          <tbody>
            {builds.data?.map((build) => (
              <tr key={build.id}>
                <td>{build.id}</td>
                <td>{build.matchUp}</td>
                <td>{build.build}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default MatchUpsPage;
