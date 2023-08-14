"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { iconComponents, sideBarList } from "./SideBar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { Fragment } from "react";

const SheetSideBar = () => {
  const pathname = usePathname();
  const hideSidebar =
    pathname.includes("/login") || pathname.includes("/register");

  return (
    <Sheet>
      <SheetTrigger>
        <div
          className={`${
            hideSidebar ? "hidden" : ""
          } md:hidden`}
        >
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side={"left"} className={`w-[18rem] p-0 dark:bg-zinc-900 `}>
        <>
          <aside
            className={` 
              "block" 
            }
        dark:bg-zinc-900 pl-10 min-w-[18rem] border-r-2 border-r-zinc-100 dark:border-none h-[90svh] sticky top-[4.5rem] md:block`}
          >
            <ul className="pt-6">
              {sideBarList.map((section, index) => (
                <Fragment key={index}>
                  {Object.entries(section).map(([sectionName, items]) => (
                    <Fragment key={sectionName}>
                      {sectionName !== "home" && (
                        <li className="pl-8 rounded-sm flex gap-2 text-gray-400">
                          <p>{sectionName.toLocaleUpperCase()}</p>
                        </li>
                      )}
                      <ul>
                        {items.map((item, idx) => {
                          const isActive = pathname === item.to;
                          return (
                            <li
                              key={idx}
                              className={`${
                                isActive
                                  ? "border-r-4 dark:border-red-800 border-red-600 dark:bg-zinc-700 bg-zinc-100 font-semibold"
                                  : ""
                              } dark:hover:bg-zinc-700 hover:bg-zinc-100 py-3 pl-8`}
                            >
                              <Link href={item.to}>
                                <SheetClose>
                                  <div className="flex gap-2">
                                    {item.icon
                                      ? iconComponents[item.icon] &&
                                        React.createElement(
                                          iconComponents[item.icon]
                                        )
                                      : item.indent && (
                                          <div className="w-[1.5rem] h-[1.5rem]"></div>
                                        )}
                                    {item.display}
                                  </div>
                                </SheetClose>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </Fragment>
                  ))}
                </Fragment>
              ))}
            </ul>
          </aside>
        </>
      </SheetContent>
    </Sheet>
  );
};

export default SheetSideBar;
