import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";

import SidebarCollapseButton from "./sidebar-collapse-button";
import SidebarNavigation from "./sidebar-navigation";
import ThemeToggle from "./theme-toggle";

function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader />

      <SidebarContent>
        <SidebarNavigation />
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <ThemeToggle />
          <SidebarCollapseButton />
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
