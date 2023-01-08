import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="absolute top-0 w-full">
      <nav className="flex items-center justify-center border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center gap-24">
          <Link href="/">
            <span className="text-xl font-semibold dark:text-white">
              SC2 Build Order Manager
            </span>
          </Link>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              className="
            flex flex-col rounded-lg border border-gray-100 bg-gray-50 py-1 dark:border-gray-700 dark:bg-gray-800 md:mt-1 md:flex-row md:space-x-4 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900"
            >
              <li className="flex items-center">
                <Link
                  href="/races"
                  className=" p-2 text-black hover:text-blue-500 dark:text-white"
                  aria-current="page"
                >
                  Find Build
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/submit-build"
                  className=" p-2 text-black hover:text-blue-500 dark:text-white"
                  aria-current="page"
                >
                  Create Build
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
