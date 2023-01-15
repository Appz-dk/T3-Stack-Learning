import { PropsWithChildren } from "react";
import Navbar from "../Navbar";

const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className="flex h-screen max-h-screen flex-col">
      <Navbar />
      <main className="h-full dark:bg-gray-800">{props.children}</main>
    </div>
  );
};

export default Layout;
