import { Instagram, Facebook, Twitter } from "lucide-react";
import Image from "next/image";
interface ProfileCard2Props {
  img: string;
  name: string;
  role: string;
  stats: {
    posts: number;
    following: string;
    followers: string;
  };
}
const ProfileCard2 = ({ img, name, role, stats }: ProfileCard2Props) => {
  const socialIcons = [
    { icon: Instagram, bg: "bg-pink-600" },
    { icon: Facebook, bg: "bg-blue-600" },
    { icon: Twitter, bg: "bg-black" },
  ];

  return (
    <div className="border rounded-xl shadow-sm p-5 bg-white">
      {/* Avatar */}
      <div className="relative text-center grid justify-center">
        <Image
          src={img}
          width={100}
          height={100}
          className="rounded-full shadow bg-white"
          alt={name}
        />
      </div>

      {/* Name & Role */}
      <div className="text-center mt-4">
        <h5 className="mb-1 font-semibold">{name}</h5>
        <p className="text-gray-500">{role}</p>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-around mt-6">
        <div className="flex flex-col items-center">
          <h5 className="font-semibold">{stats.posts}</h5>
          <p className="text-gray-500 text-sm">Posts</p>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="font-semibold">{stats.following}</h5>
          <p className="text-gray-500 text-sm">Following</p>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="font-semibold">{stats.followers}</h5>
          <p className="text-gray-500 text-sm">Followers</p>
        </div>
      </div>

      <hr className="my-5" />

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-3">
        {socialIcons.map((S, index) => {
          const IconComponent = S.icon;
          return (
            <div
              key={index}
              className={`w-12 h-12 ${S.bg} flex items-center justify-center 
              rounded-full text-white cursor-pointer hover:opacity-80 transition`}
            >
              <IconComponent size={22} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileCard2;
