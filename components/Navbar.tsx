import Link from "next/link";
import { FunctionComponent } from "react";
import SwitchThemeButton from "./buttons/SwitchTheme";
import { Button } from "./ui/button";
import DropdownNavMenu from "./DropdownNavMenu";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import SheetSideBar from "./SheetSideBar";
import LoginSignup from "./LoginSignup";

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
        {/* <li> */}
        {/*   <Button variant="outline"> */}
        {/*     <Link href="/login">Login</Link> */}
        {/*   </Button> */}
        {/* </li> */}
        {/* <li> */}
        {/*   <Button size="sm"> */}
        {/*     <Link href="/register">Sign Up</Link> */}
        {/*   </Button> */}
        {/* </li> */}
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
