import { type NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Label from "../components/Label";
import Input from "../components/Input";

export const buildTypes = [
  "Economic",
  "All-In",
  "Timing Attack",
  "Cheese",
] as const;

export const makeSafeBuildTypeString = (buildType: string) => {
  return buildType.toLowerCase().replace(" ", "-");
};

const SubmitBuildPage: NextPage = () => {
  // Communicate frontend to server
  const createBuildMutation = trpc.builds.createBuild.useMutation();

  const [matchUp, setMatchUp] = useState("zvt");
  const [buildType, setBuildType] = useState("economic");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [build, setBuildOrder] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmitBuildOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    await createBuildMutation.mutateAsync({
      matchUp,
      buildType,
      title,
      author,
      build,
      description,
    });
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Create a Build Order</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="mt-10 pb-5 text-center text-black dark:text-white">
        <h1 className="mb-5 text-xl text-white">Upload a Build Order</h1>

        <form
          className="mx-auto flex w-3/4 flex-col items-center justify-center gap-2"
          onSubmit={(e) => handleSubmitBuildOrder(e)}
        >
          <fieldset className="flex w-full max-w-[420px] justify-evenly">
            <Label htmlFor="match-up-select">
              Match up
              <select
                className="mt-1 block w-16 rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:w-32"
                name="match-up"
                id="match-up-select"
                value={matchUp}
                onChange={(e) => setMatchUp(e.target.value)}
                required
              >
                <option value="zvt">ZvT</option>
                <option value="zvp">ZvP</option>
                <option value="zvz">ZvZ</option>
                <option value="pvt">PvT</option>
                <option value="pvp">PvP</option>
                <option value="pvz">PvZ</option>
                <option value="tvt">TvT</option>
                <option value="tvp">TvP</option>
                <option value="tvz">TvZ</option>
              </select>
            </Label>

            <Label htmlFor="build-type-select">
              Build type
              <select
                className="mt-1 block rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:w-32"
                name="buildType"
                id="build-type-select"
                value={buildType}
                onChange={(e) => setBuildType(e.target.value)}
                required
              >
                {buildTypes.map((buildType) => (
                  <option
                    key={buildType}
                    value={makeSafeBuildTypeString(buildType)}
                  >
                    {buildType}
                  </option>
                ))}
              </select>
            </Label>
          </fieldset>

          <fieldset className="flex w-full max-w-[420px] justify-evenly">
            <Label htmlFor="build-title">
              Title
              <Input
                id="build-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Input>
            </Label>

            <Label htmlFor="build-author">
              Author
              <Input
                id="build-author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              ></Input>
            </Label>
          </fieldset>

          <Label htmlFor="build-description">
            Description
            <textarea
              className="dark:placeholder-gray-40 mt-1 block w-auto max-w-full resize rounded-lg border p-2.5  text-sm font-normal text-black dark:border-gray-600 dark:bg-gray-700 dark:text-white md:min-h-[5rem] md:w-2/5 md:min-w-[15rem]"
              name="description"
              id="build-description"
              placeholder="Your description..."
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </Label>

          <Label htmlFor="build-order" className="w-3/4">
            Build
            <textarea
              className="dark:placeholder-gray-40 mx-auto mt-1 block h-24 w-full max-w-full resize  rounded-lg border p-2.5 text-sm font-normal text-black dark:border-gray-600 dark:bg-gray-700 dark:text-white md:min-h-[10rem] md:min-w-[15rem]"
              name="build-order"
              id="build-order"
              placeholder="Build order..."
              rows={10}
              value={build}
              onChange={(e) => setBuildOrder(e.target.value)}
              required
            ></textarea>
          </Label>
          <button className="mb-2 w-40 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-400">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default SubmitBuildPage;
