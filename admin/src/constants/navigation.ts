import {
  ClipboardList,
  Database,
  Handshake,
  ImageIcon,
  LayoutDashboard,
  LucideIcon,
  MessageSquare,
  Settings,
  Settings2,
  ShoppingBag,
  Users,
} from "lucide-react";

export type NavigationItemType = {
  title: string;
  href?: string;
  icon: LucideIcon;
  items?: NavigationItemType[];
};

const navigationItems: NavigationItemType[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Media",
    href: "/media",
    icon: ImageIcon,
  },
  {
    title: "Management",
    icon: Settings2,
    items: [
      {
        title: "Users",
        href: "/management/users",
        icon: Users,
      },

      {
        title: "Database",
        href: "/management/database",
        icon: Database,
      },
    ],
  },
  {
    title: "Collaboration",
    icon: Handshake,
    items: [
      {
        title: "Chat",
        href: "/collaboration/chat",
        icon: MessageSquare,
      },

      {
        title: "Tasks",
        href: "/collaboration/tasks",
        icon: ClipboardList,
      },
    ],
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default navigationItems;
