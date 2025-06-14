"use client";

import {
  SidebarMenu,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import navigationItems, { NavigationItemType } from "@/constants/navigation";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type NavigationItemProps = {
  item: NavigationItemType;
  pathname: string;
  level?: number;
};

function SidebarNavigation() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <SidebarGroup>
      <SidebarMenu>
        {navigationItems.map((item) => (
          <NavigationItem key={item.title} item={item} pathname={pathname} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

export default SidebarNavigation;

const NavigationItem = ({ item, pathname, level = 0 }: NavigationItemProps) => {
  const IconComponent = item.icon;
  const href = item.href;
  const isActive = href
    ? href === "/"
      ? pathname === "/"
      : pathname.startsWith(href)
    : false;
  const hasSubItems = item.items && item.items.length > 0;

  const hasActiveChild =
    hasSubItems &&
    item.items?.some((subItem) => {
      const subHref = subItem.href;
      return subHref
        ? subHref === "/"
          ? pathname === "/"
          : pathname.startsWith(subHref)
        : false;
    });

  if (level === 0) {
    return (
      <Collapsible
        className="group/collapsible"
        key={item.title}
        defaultOpen={hasActiveChild}
      >
        <SidebarMenuItem>
          {!hasSubItems && href ? (
            <SidebarMenuButton isActive={isActive} tooltip={item.title} asChild>
              <Link href={href}>
                <IconComponent className="mr-2" />
                {item.title}
              </Link>
            </SidebarMenuButton>
          ) : (
            <CollapsibleTrigger asChild>
              <SidebarMenuButton
                isActive={isActive || hasActiveChild}
                tooltip={item.title}
              >
                <IconComponent className="mr-2" />
                {item.title}
                {hasSubItems && (
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                )}
              </SidebarMenuButton>
            </CollapsibleTrigger>
          )}

          {hasSubItems && (
            <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden">
              <SidebarMenuSub>
                {item.items?.map((subItem) => (
                  <NavigationItem
                    key={subItem.title}
                    item={subItem}
                    pathname={pathname}
                    level={1}
                  />
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          )}
        </SidebarMenuItem>
      </Collapsible>
    );
  }

  // Render sub-items
  const subHref = item.href;
  const isSubActive = subHref
    ? subHref === "/"
      ? pathname === "/"
      : pathname.startsWith(subHref)
    : false;

  return (
    <SidebarMenuSubItem key={item.title}>
      <SidebarMenuSubButton isActive={isSubActive} asChild={!!subHref}>
        {subHref ? (
          <Link href={subHref}>
            <IconComponent className="mr-2" />
            {item.title}
          </Link>
        ) : (
          <>
            <IconComponent className="mr-2" />
            {item.title}
          </>
        )}
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
};
