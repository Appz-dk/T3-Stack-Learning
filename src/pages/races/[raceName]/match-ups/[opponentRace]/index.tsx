import { BuildOrder } from "@prisma/client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { trpc } from "../../../../../utils/trpc";

const Build: React.FC<{ build: BuildOrder }> = ({ build }) => {
  return (
    <div className="flex max-w-sm flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 text-sm shadow-md dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {build.title || "No Title"}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {build.description}
      </p>
      <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
        Style
        <span className="ml-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
          {build.buildType}
        </span>
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Created by {build.author || "Anonymous"}
      </p>
      <Link
        href="#"
        className="inline-flex max-w-max items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        View Build
        <svg
          aria-hidden="true"
          className="ml-2 -mr-1 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
    </div>
  );
};

export const buildTypes: string[] = [
  "Economic",
  "Timing Attack",
  "All-In",
  "Cheese",
  "Co-op",
];

const BuildTypeToggles: React.FC<{
  handleBuildTypeChange: (buildType: string) => void;
  selectedBuildType: string;
}> = ({ handleBuildTypeChange: handleBuildTypeChange, selectedBuildType }) => {
  return (
    <fieldset className="w-full">
      <label className="font-bold">Build Type</label>
      <ul className="mt-2 w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:flex">
        {buildTypes.map((buildType) => {
          const buildTypeSafeString = buildType.toLowerCase().replace(" ", "-");
          return (
            <li
              key={buildTypeSafeString}
              className="w-full border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r"
            >
              <div className="flex items-center pl-3">
                <input
                  id={`build-type-${buildTypeSafeString}`}
                  type="radio"
                  value={buildTypeSafeString}
                  checked={buildTypeSafeString === selectedBuildType}
                  onChange={(e) => handleBuildTypeChange(e.currentTarget.value)}
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                />
                <label
                  htmlFor={`build-type-${buildTypeSafeString}`}
                  className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {buildType}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
};

const MatchUpsPage = () => {
  const { raceName = "", opponentRace = "" } = useRouter().query;
  const [selectedBuildType, setSelectedBuildType] = useState(
    buildTypes[0]!.toLowerCase()
  );

  const matchUp = `${raceName![0]?.toLowerCase()}v${opponentRace![0]?.toLowerCase()}`;
  const builds = trpc.builds.getBuildsByMatchUp.useQuery({ matchUp });

  return (
    <>
      <Head>
        <title>SC2 Build Order Manager</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container px-8 pt-4 text-black dark:text-white">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-bold">
            {raceName} vs {opponentRace}
          </h1>

          <BuildTypeToggles
            handleBuildTypeChange={setSelectedBuildType}
            selectedBuildType={selectedBuildType}
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {builds.data?.map((build) => (
              <Build key={build.id} build={build} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MatchUpsPage;
