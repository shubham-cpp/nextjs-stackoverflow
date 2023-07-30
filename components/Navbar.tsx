import Link from "next/link";
import { FunctionComponent } from "react";
import SwitchThemeButton from "./buttons/SwitchTheme";
import { Button } from "./ui/button";
import DropdownNavMenu from "./DropdownNavMenu";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
const Navbar: FunctionComponent = () => {
  return (
    <nav className="dark:bg-zinc-900 dark:text-gray-100 bg-zinc-100 flex justify-between items-center py-4 px-4 sm:px-8 sticky top-0">
      <h1 className="text-2xl font-bold hidden sm:block pl-10">
        <Link href="/">StackOverflow</Link>
      </h1>
      <SearchBar />
      <ul className="hidden sm:flex sm:items-center sm:space-x-4">
        <li>
          <Button variant="outline">
            <Link href="/login">Login</Link>
          </Button>
        </li>
        <li>
          <Button size="sm">
            <Link href="/register">Sign Up</Link>
          </Button>
        </li>
        <li>
          <SwitchThemeButton />
        </li>
      </ul>
      <ul className="flex space-x-4 sm:hidden">
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
