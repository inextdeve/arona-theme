"use client";

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import {
  MoreVertical,
  Share2,
  MessageCircle,
  Mail,
  Paperclip,
  Calendar,
} from "lucide-react";

const users = [
  {
    name: "Jordan Meyers",
    username: "jordan_m",
    avatar: "/assets/images/avatars/01.png",
  },
  {
    name: "Samantha Rivera",
    username: "sam_riv",
    avatar: "/assets/images/avatars/02.png",
  },
  {
    name: "Tyler Benson",
    username: "tyler_ben",
    avatar: "/assets/images/avatars/03.png",
  },
  {
    name: "Avery Collins",
    username: "avery_c",
    avatar: "/assets/images/avatars/04.png",
  },
  {
    name: "Nico Hart",
    username: "nico_h",
    avatar: "/assets/images/avatars/05.png",
  },
  {
    name: "Marcos Delgado",
    username: "marcos_d",
    avatar: "/assets/images/avatars/06.png",
  },
  {
    name: "Riley Spencer",
    username: "riley_s",
    avatar: "/assets/images/avatars/08.png",
  },
];

export default function NewCustomersList() {
  return (
    <Card className="w-full rounded-2xl shadow-sm flex flex-col">
      {/* HEADER */}
      <CardHeader className="flex flex-row items-start justify-between pb-3 border-b">
        <h5 className="font-semibold text-lg">New Customers</h5>

        <DropdownMenu>
          <DropdownMenuTrigger className="p-1 hover:bg-accent rounded-md">
            <MoreVertical className="w-5 h-5" />
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem>Action</DropdownMenuItem>
            <DropdownMenuItem>Another action</DropdownMenuItem>
            <DropdownMenuItem>Something else here</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      {/* USERS LIST */}
      <CardContent className="p-0 max-h-[360px] overflow-y-auto">
        <div className="flex flex-col gap-4 p-4">
          {users.map((u, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image
                src={u.avatar}
                width={45}
                height={45}
                alt={u.name}
                className="rounded-full"
              />

              <div className="flex-1">
                <h6 className="font-medium">{u.name}</h6>
                <p className="text-sm text-muted-foreground">{u.username}</p>
              </div>

              <Checkbox />
            </div>
          ))}
        </div>
      </CardContent>

      {/* FOOTER ICONS */}
      <CardFooter className="flex justify-between px-5 py-3 border-t">
        <button className="text-muted-foreground hover:text-primary transition">
          <Share2 className="w-5 h-5" />
        </button>

        <button className="text-muted-foreground hover:text-primary transition">
          <MessageCircle className="w-5 h-5" />
        </button>

        <button className="text-muted-foreground hover:text-primary transition">
          <Mail className="w-5 h-5" />
        </button>

        <button className="text-muted-foreground hover:text-primary transition">
          <Paperclip className="w-5 h-5" />
        </button>

        <button className="text-muted-foreground hover:text-primary transition">
          <Calendar className="w-5 h-5" />
        </button>
      </CardFooter>
    </Card>
  );
}
