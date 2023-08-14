import Link from "next/link";
import type { FunctionComponent } from "react";
import DropdownNavMenu from "./DropdownNavMenu";
import LoginSignup from "./LoginSignup";
import SearchBar from "./SearchBar";
import SheetSideBar from "./SheetSideBar";
import SwitchThemeButton from "./buttons/SwitchTheme";

const Navbar: FunctionComponent = () => {
  return (
    <nav className="sticky top-0 flex items-center justify-between bg-zinc-100 px-3 py-4 dark:bg-zinc-900 dark:text-gray-100 sm:px-8">
      <SheetSideBar />
      <h1 className="hidden pl-10 text-2xl font-bold sm:block">
        <Link href="/">StackOverflow</Link>
      </h1>
      <div className="hidden sm:block">
        <SearchBar />
      </div>
      <ul className="hidden sm:flex sm:items-center sm:space-x-4">
        <LoginSignup />
        <li>
          <SwitchThemeButton />
        </li>
      </ul>
      <ul className="flex items-center space-x-2 sm:hidden">
        <li>
          <SearchBar />
        </li>
        <li>
          <SwitchThemeButton />
        </li>
        <li>
          <DropdownNavMenu />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
