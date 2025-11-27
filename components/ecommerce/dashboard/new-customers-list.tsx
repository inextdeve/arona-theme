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
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

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
        <div className="flex flex-col">
          {users.map((u, index) => (
            <Label
              key={index}
              className="flex items-center gap-4 p-2 hover:bg-accent/50 has-aria-checked:bg-blue-100  dark:has-aria-checked:bg-blue-950"
            >
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
            </Label>
          ))}
        </div>
      </CardContent>

      {/* FOOTER ICONS */}
      <CardFooter className="flex justify-between px-5 py-3 border-t">
        <Button
          variant="link"
          className="cursor-pointer text-muted-foreground hover:text-primary transition"
        >
          <Share2 className="w-5 h-5" />
        </Button>

        <Button
          variant="link"
          className="cursor-pointer text-muted-foreground hover:text-green-500 transition"
        >
          <MessageCircle className="w-5 h-5" />
        </Button>

        <Button
          variant="link"
          className="cursor-pointer text-muted-foreground hover:text-yellow-500 transition"
        >
          <Mail className="w-5 h-5" />
        </Button>

        <Button
          variant="link"
          className="cursor-pointer text-muted-foreground hover:text-blue-500 transition"
        >
          <Paperclip className="w-5 h-5" />
        </Button>

        <Button
          variant="link"
          className="cursor-pointer text-muted-foreground hover:text-red-500 transition"
        >
          <Calendar className="w-5 h-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}
