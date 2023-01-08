import { type NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import React, { useState } from "react";
import { useRouter } from "next/router";

const SubmitBuildPage: NextPage = () => {
  // Communicate frontend to server
  const createBuildMutation = trpc.builds.createBuild.useMutation();

  const [build, setBuildOrder] = useState("");
  const [matchUp, setMatchUp] = useState("zvt");
  const router = useRouter();

  const handleSubmitBuildOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    await createBuildMutation.mutateAsync({
      matchUp,
      build,
    });
    router.push("/builds");
  };

  return (
    <>
      <Head>
        <title>Create a Build Order</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className="text-white">Upload a Build Order</h1>

        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => handleSubmitBuildOrder(e)}
        >
          <label className="text-white" htmlFor="match-up-select">
            Match up
          </label>
          <select
            name="match-up"
            id="match-up-select"
            value={matchUp}
            onChange={(e) => setMatchUp(e.target.value)}
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
          <textarea
            className="p-2"
            name="build-order"
            id="build-order"
            value={build}
            onChange={(e) => setBuildOrder(e.target.value)}
          ></textarea>
          <button className="rounded bg-white p-2 text-black">Submit</button>
        </form>
      </main>
    </>
  );
};

export default SubmitBuildPage;
