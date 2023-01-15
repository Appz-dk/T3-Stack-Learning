import { PropsWithChildren } from "react";
import Navbar from "../Navbar";

const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className="flex h-screen max-h-screen flex-shrink flex-col overflow-y-auto bg-gray-800">
      <Navbar />
      <main className="h-full">{props.children}</main>
    </div>
  );
};

export default Layout;
