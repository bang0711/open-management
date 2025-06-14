"use client";

import {
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

import { ChevronsLeft } from "lucide-react";

function SidebarCollapseButton() {
  const { toggleSidebar, state } = useSidebar();
  return (
    <SidebarMenuItem>
      <SidebarMenuButton tooltip={"Toggle Sidebar"} onClick={toggleSidebar}>
        <ChevronsLeft
          className={`transition-all duration-200 ${state === "collapsed" ? "rotate-180" : ""}`}
        />
        Collapse
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export default SidebarCollapseButton;
