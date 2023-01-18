import { PropsWithChildren } from "react";
import Navbar from "../Navbar";

const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className="flex h-screen flex-col bg-gray-800">
      <Navbar />
      <main className="flex-grow">{props.children}</main>
    </div>
  );
};

export default Layout;
