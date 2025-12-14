"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Component,
  Frame,
  GalleryVerticalEnd,
  LayoutGrid,
  ListCheck,
  Map,
  Package,
  PackagePlus,
  PersonStanding,
  PieChart,
  ScanBarcode,
  Settings2,
  SquareTerminal,
  Store,
  User,
  Users,
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
      title: "Components",
      url: "#",
      icon: Component,
      isActive: true,
      items: [
        {
          title: "Cards",
          url: "/components/cards",
        },
        {
          title: "Animated Cards",
          url: "/components/animated-cards",
        },
        {
          title: "Buttons",
          url: "/components/buttons",
        },
        {
          title: "Loaders",
          url: "/components/loaders",
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
    {
      name: "Products",
      url: "/ecommerce/products",
      icon: Package,
    },
    {
      name: "Orders",
      url: "/ecommerce/orders",
      icon: ListCheck,
    },
    {
      name: "Orders details",
      url: "/ecommerce/order-details",
      icon: ScanBarcode,
    },
    {
      name: "Customers",
      url: "/ecommerce/customers",
      icon: Users,
    },
    {
      name: "Customer details",
      url: "/ecommerce/customer-details",
      icon: User,
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
