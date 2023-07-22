"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DarkModeContext } from "@/providers/ThemeProvider";
import { MoonStar, Sun } from "lucide-react";
import { FunctionComponent, useContext } from "react";
interface Props {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | null;
}
const SwitchThemeButton: FunctionComponent<Props> = ({ size = "default" }) => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" onClick={toggleDarkMode} size={size}>
            {isDarkMode ? <MoonStar size={16} /> : <Sun size={16} />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Switch to {isDarkMode ? "light" : "dark"} mode</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SwitchThemeButton;
