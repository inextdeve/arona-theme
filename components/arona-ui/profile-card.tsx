"use client";

import Image from "next/image";
import { Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

interface ProfileCardProps {
  coverImage: string;
  avatar: string;
  name: string;
  role: string;
  className?: string;
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    youtube?: string;
  };
  stats: {
    posts: string;
    following: string;
    followers: string;
  };
  contact: {
    address: string;
    email: string;
    phone: string[];
  };
}

export default function ProfileCard({
  coverImage,
  avatar,
  name,
  role,
  social,
  stats,
  contact,
  className,
}: ProfileCardProps) {
  return (
    <div className={className}>
      <div className="border rounded-xl overflow-hidden shadow-sm bg-white">
        <div className="p-4">
          {/* Cover + Avatar */}
          <div className="relative">
            <Image
              src={coverImage}
              alt="cover"
              width={1200}
              height={600}
              className="rounded-lg w-full"
            />

            <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                src={avatar}
                alt="avatar"
                width={100}
                height={100}
                className="rounded-full border-4 border-white shadow-md"
              />
            </div>
          </div>

          {/* Name + Role */}
          <div className="text-center mt-12 pt-4">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 my-6">
            {social.linkedin && (
              <a
                href={social.linkedin}
                className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}

            {social.twitter && (
              <a
                href={social.twitter}
                className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}

            {social.facebook && (
              <a
                href={social.facebook}
                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center"
              >
                <Facebook className="w-5 h-5" />
              </a>
            )}

            {social.youtube && (
              <a
                href={social.youtube}
                className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center"
              >
                <Youtube className="w-5 h-5" />
              </a>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-center my-4">
            <div>
              <h4 className="font-semibold">{stats.posts}</h4>
              <p className="text-sm text-muted-foreground">Posts</p>
            </div>
            <div>
              <h4 className="font-semibold">{stats.following}</h4>
              <p className="text-sm text-muted-foreground">Following</p>
            </div>
            <div>
              <h4 className="font-semibold">{stats.followers}</h4>
              <p className="text-sm text-muted-foreground">Followers</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <ul className="border-t divide-y">
          <li className="p-4">
            <p className="font-semibold">Address</p>
            <p className="text-sm text-muted-foreground">{contact.address}</p>
          </li>

          <li className="p-4">
            <p className="font-semibold">Email</p>
            <p className="text-sm text-muted-foreground">{contact.email}</p>
          </li>

          <li className="p-4">
            <p className="font-semibold">Phone</p>
            {contact.phone.map((line, i) => (
              <p key={i} className="text-sm text-muted-foreground">
                {line}
              </p>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
