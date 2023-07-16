"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { DarkModeContext } from "@/providers/ThemeProvider";
import { MoonStar, Sun } from "lucide-react";
const SwitchThemeButton = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" onClick={toggleDarkMode} size="icon">
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
