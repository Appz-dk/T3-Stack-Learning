import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Layout from "../components/layout/Layout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <Layout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  );
};

export default trpc.withTRPC(MyApp);
