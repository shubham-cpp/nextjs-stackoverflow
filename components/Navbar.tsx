import Link from "next/link";
import { FunctionComponent } from "react";
import SwitchThemeButton from "./buttons/SwitchTheme";
import { Button } from "./ui/button";
const Navbar: FunctionComponent = () => {
  return (
    <nav className="dark:bg-zinc-900 dark:text-gray-100 bg-zinc-100 flex justify-between items-center py-4 px-8">
      <h1 className="text-2xl font-bold">
        <Link href="/">StackOverflow</Link>
      </h1>
      <ul className="flex items-center space-x-4 ">
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
    </nav>
  );
};

export default Navbar;
