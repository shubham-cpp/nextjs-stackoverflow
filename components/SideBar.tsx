"use client";

import React, { Fragment, FunctionComponent } from "react";
import { Globe2, Sparkles, Briefcase } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const sideBarList = [
  {
    home: [
      {
        to: "/",
        display: "Home",
        icon: "",
        indent: false,
      },
    ],
    public: [
      {
        to: "/questions",
        display: "Questions",
        icon: "Globe2",
        indent: true,
      },
      {
        to: "/tags",
        display: "Tags",
        icon: "",
        indent: true,
      },
      {
        to: "/users",
        display: "Users",
        icon: "",
        indent: true,
      },
      {
        to: "/companies",
        display: "Companies",
        icon: "",
        indent: true,
      },
    ],
    collectives: [
      {
        to: "/collectives",
        display: "Explore Collectives",
        icon: "Sparkles",
        indent: false,
      },
    ],
    teams: [
      {
        to: "/createFreeTeams",
        display: "Create Free Team",
        icon: "Briefcase",
        indent: false,
      },
    ],
  },
];

export interface IconComponents {
  [key: string]: React.ElementType;
}

export const iconComponents: IconComponents = {
  Globe2,
  Sparkles,
  Briefcase,
};

const SideBar: FunctionComponent = () => {
  const pathname = usePathname();
  const hideSidebar =
    pathname.includes("/login") || pathname.includes("/register");

  return (
    <aside
      className={cn([
        { "hidden md:hidden": hideSidebar },
        "sticky top-[4.5rem] hidden h-[calc(100vh-4.5rem)] min-w-[18rem] border-r-2 border-r-zinc-100 pl-10 dark:border-none dark:bg-zinc-900 md:block",
      ])}
    >
      <ul className="pt-6">
        {sideBarList.map((section, index) => (
          <Fragment key={index}>
            {Object.entries(section).map(([sectionName, items]) => (
              <Fragment key={sectionName}>
                {sectionName !== "home" ? (
                  <li className="flex gap-2 rounded-sm pl-8 text-gray-400">
                    <p>{sectionName.toLocaleUpperCase()}</p>
                  </li>
                ) : (
                  <> </>
                )}
                <ul>
                  {items.map((item, idx) => {
                    const isActive = pathname === item.to;
                    return (
                      <li
                        key={idx}
                        className={cn([
                          "py-3 pl-8 hover:bg-zinc-100 dark:hover:bg-zinc-700",
                          {
                            "border-r-4 border-red-600 bg-zinc-100 font-semibold dark:border-red-800 dark:bg-zinc-700":
                              isActive,
                          },
                        ])}
                      >
                        <Link href={item.to}>
                          <div className="flex gap-2">
                            {item.icon
                              ? iconComponents[item.icon] &&
                                React.createElement(iconComponents[item.icon])
                              : item.indent && (
                                  <div className="h-[1.5rem] w-[1.5rem]"></div>
                                )}
                            {item.display}
                          </div>
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
  );
};

export default SideBar;
