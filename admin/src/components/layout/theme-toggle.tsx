"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { useCallback, useEffect, useState } from "react";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

function ThemeToggle() {
  const { setTheme, resolvedTheme, theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = useCallback(
    (e?: React.MouseEvent) => {
      console.log("Toggling theme", resolvedTheme);
      const newMode = resolvedTheme === "dark" ? "light" : "dark";
      const root = document.documentElement;

      if (!document.startViewTransition) {
        setTheme(newMode);
        return;
      }

      // Set coordinates from the click event
      if (e) {
        root.style.setProperty("--x", `${e.clientX}px`);
        root.style.setProperty("--y", `${e.clientY}px`);
      }

      document.startViewTransition(() => {
        setTheme(newMode);
      });
    },
    [resolvedTheme, setTheme],
  );

  if (!mounted) return null;

  const isDarkMode = theme === "dark" || resolvedTheme === "dark";

  return (
    <SidebarMenuItem className="group/toggle">
      <SidebarMenuButton
        tooltip={isDarkMode ? "Dark Mode" : "Light Mode"}
        onClick={handleThemeToggle}
      >
        {isDarkMode ? <Moon /> : <Sun />}
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export default ThemeToggle;
