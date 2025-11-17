"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Search,
  Menu,
  Mail,
  Bell,
  CalendarDays,
  Globe,
  Moon,
  Sun,
  User,
  Settings,
  LogOut,
  MessageCircle,
  Info,
} from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-neutral-900 mb-4 rounded-xl border p-3">
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
          {/* Mobile Burger */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
          {/* Sidebar Trigger */}
          <SidebarTrigger className="-ml-1" />
          {/* Search */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search here..." className="pl-10" />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Choose Language</DropdownMenuLabel>
              <ScrollArea className="max-h-64">
                <DropdownMenuItem>
                  <Image
                    src="/country/usa.png"
                    width={24}
                    height={24}
                    alt="usa"
                    className="rounded-full"
                  />
                  <span className="ml-2">English</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Image
                    src="/country/australia.png"
                    width={24}
                    height={24}
                    alt="australia"
                    className="rounded-full"
                  />
                  <span className="ml-2">Australia</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Image
                    src="/country/spain.png"
                    width={24}
                    height={24}
                    alt="spain"
                    className="rounded-full"
                  />
                  <span className="ml-2">Spanish</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Image
                    src="/country/france.png"
                    width={24}
                    height={24}
                    alt="france"
                    className="rounded-full"
                  />
                  <span className="ml-2">France</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Image
                    src="/country/germany.png"
                    width={24}
                    height={24}
                    alt="germany"
                    className="rounded-full"
                  />
                  <span className="ml-2">Germany</span>
                </DropdownMenuItem>
              </ScrollArea>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Dark / Light Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </Button>

          {/* Calendar */}
          <Link href="/calendar">
            <Button variant="ghost" size="icon">
              <CalendarDays className="w-5 h-5" />
            </Button>
          </Link>

          {/* Messages Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Mail className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
                  5
                </span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-80 p-0">
              <div className="flex justify-between items-center px-4 py-2 border-b">
                <span className="font-medium">Messages (5)</span>
                <button className="text-primary text-sm">
                  Mark all as read
                </button>
              </div>

              <ScrollArea className="max-h-72">
                {[1, 2, 3].map((i) => (
                  <DropdownMenuItem key={i} className="p-0">
                    <Link href="/chat" className="flex gap-3 p-3 w-full">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={`/user${i}.jpg`} />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>

                      <div>
                        <p className="font-medium text-sm">User {i}</p>
                        <span className="text-xs opacity-70">
                          Message preview...
                        </span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </ScrollArea>

              <DropdownMenuItem className="text-center text-primary justify-center">
                <Link href="/chat">See All Messages</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notifications Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
                  3
                </span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-80 p-0">
              <div className="flex justify-between items-center px-4 py-2 border-b">
                <span className="font-medium">Notifications (3)</span>
                <button className="text-primary text-sm">Clear All</button>
              </div>

              <ScrollArea className="max-h-72">
                <DropdownMenuItem className="flex gap-3 p-3">
                  <MessageCircle className="text-primary w-5 h-5" />
                  <div>
                    <p className="font-medium">Withdrawal requested</p>
                    <span className="text-xs opacity-70">2 hrs ago</span>
                  </div>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex gap-3 p-3">
                  <User className="text-blue-500 w-5 h-5" />
                  <div>
                    <p className="font-medium">New user added</p>
                    <span className="text-xs opacity-70">3 hrs ago</span>
                  </div>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex gap-3 p-3">
                  <Mail className="text-green-500 w-5 h-5" />
                  <div>
                    <p className="font-medium">You have a new message</p>
                    <span className="text-xs opacity-70">1 day ago</span>
                  </div>
                </DropdownMenuItem>
              </ScrollArea>

              <DropdownMenuItem className="text-center text-primary justify-center">
                <Link href="/notifications">See All Notifications</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Admin Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/admin.png" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/admin.png" />
                </Avatar>
                <div>
                  <p className="font-medium text-sm">Mateo Luca</p>
                  <span className="text-xs opacity-70">Admin</span>
                </div>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuItem asChild>
                <Link href="/my-profile" className="flex gap-2 items-center">
                  <User className="w-4 h-4" />
                  My Profile
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/settings" className="flex gap-2 items-center">
                  <Settings className="w-4 h-4" />
                  Settings
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/support" className="flex gap-2 items-center">
                  <Info className="w-4 h-4" />
                  Support
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/logout" className="flex gap-2 items-center">
                  <LogOut className="w-4 h-4" />
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
