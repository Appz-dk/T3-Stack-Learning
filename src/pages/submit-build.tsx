import { type NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import React, { useState } from "react";
import { useRouter } from "next/router";

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
      <section className="flex h-full flex-col items-center justify-center gap-8 text-black dark:text-white">
        <h1 className="text-xl text-white">Upload a Build Order</h1>

        <form
          className="flex w-3/4 flex-col items-center justify-center gap-2"
          onSubmit={(e) => handleSubmitBuildOrder(e)}
        >
          <fieldset className="flex w-full max-w-[420px] justify-evenly">
            <label
              className="mb-2 text-center font-medium text-gray-900 dark:text-white"
              htmlFor="match-up-select"
            >
              Match up
              <select
                className="mt-1 block w-16 rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white  dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:w-32"
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
            </label>

            <label
              className="mb-2 text-center font-medium text-gray-900 dark:text-white"
              htmlFor="build-type-select"
            >
              Build type
              <select
                className="mt-1 block rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white  dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:w-32"
                name="buildType"
                id="build-type-select"
                value={buildType}
                onChange={(e) => setBuildType(e.target.value)}
                required
              >
                <option value="economic">Economic</option>
                <option value="all-in">All-In</option>
                <option value="cheesy">Cheese</option>
                <option value="timing-attack">Timing Attack</option>
                <option value="co-op">Co-op</option>
              </select>
            </label>
          </fieldset>

          <fieldset className="flex w-full max-w-[420px] justify-evenly">
            <label
              htmlFor="title"
              className="mb-2 block text-center font-medium text-gray-900 dark:text-white"
            >
              Title
              <input
                className="mt-1 block rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white  dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:w-32"
                name="title"
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </label>

            <label
              htmlFor="author"
              className="mb-2 block text-center font-medium text-gray-900 dark:text-white"
            >
              Author
              <input
                className="mt-1 block rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white  dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:w-32"
                name="author"
                id="author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
            </label>
          </fieldset>

          <label
            htmlFor="Description"
            className="mb-2 block text-center font-medium text-gray-900 dark:text-white"
          >
            Description
            <textarea
              className="mx-auto mt-1 block w-auto max-w-full resize rounded-lg border p-2.5 text-sm  font-normal text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:min-h-[5rem] md:w-2/5 md:min-w-[15rem]"
              name="description"
              id="description"
              placeholder="Your description..."
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>

          <label
            htmlFor="build-order"
            className="mb-2 block w-3/4 text-center font-medium text-gray-900 dark:text-white"
          >
            Build
            <textarea
              className="mx-auto mt-1 block h-24 w-4/5 max-w-full resize rounded-lg  border p-2.5 text-sm font-normal text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:min-h-[10rem] md:min-w-[15rem]"
              name="build-order"
              id="build-order"
              placeholder="Build order..."
              rows={10}
              value={build}
              onChange={(e) => setBuildOrder(e.target.value)}
              required
            ></textarea>
          </label>
          <button className="mb-2 w-40 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-400">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default SubmitBuildPage;
