"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  LayoutGrid,
  Map,
  PackagePlus,
  PieChart,
  Settings2,
  SquareTerminal,
  Store,
} from "lucide-react";

import { CollapsibleNav } from "./collapsible-nav";
import { SimpleNav } from "./simple-nav";
import { NavUser } from "./nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ThemeSwitcher } from "./theme-switcher";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  themes: [
    {
      name: "E-Commerce",
      logo: Store,
      plan: "Plateform",
    },
    {
      name: "Apps",
      logo: LayoutGrid,
      plan: "Startup",
    },
  ],
  apps: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  eCommerce: [
    {
      name: "Dashboard",
      url: "/ecommerce/dashboard",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "/ecommerce/marketing",
      icon: PieChart,
    },
    {
      name: "Add Product",
      url: "/ecommerce/add-product",
      icon: PackagePlus,
    },
  ],
};
export type ThemeType = {
  name: string;
  logo: React.ElementType;
  plan: string;
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeTheme, setActiveTheme] = React.useState(data.themes[0]);

  const handleThemeChange = (theme: ThemeType) => {
    setActiveTheme(theme as (typeof data.themes)[0]);
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ThemeSwitcher
          activeTheme={activeTheme}
          setActiveTheme={handleThemeChange}
          themes={data.themes}
        />
      </SidebarHeader>
      <SidebarContent>
        <SimpleNav title={"E-Commerce"} items={data.eCommerce} />
        <CollapsibleNav items={data.apps} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
