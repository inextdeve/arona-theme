"use client";

import { FC } from "react";
import { Youtube, Twitter, Facebook, Mail } from "lucide-react";

const CardSocial: FC = () => {
  return (
    <div className="CardSocial relative flex h-[50px] w-[200px] items-center justify-center overflow-hidden bg-[#e7e7e7] shadow-md transition-all duration-300 hover:shadow-xl group">
      {/* Left & Right animated backgrounds */}
      <div className="absolute left-0 flex h-full w-1/2 justify-end bg-[#4d60b6] transition-all duration-200 opacity-100 group-hover:-translate-y-full group-hover:opacity-50 z-10" />
      <div className="absolute right-0 flex h-full w-1/2 justify-start bg-[#4453a6] transition-all duration-200 opacity-100 group-hover:translate-y-full group-hover:opacity-50 z-10" />

      {/* "Social" label */}
      <span className="social-label absolute z-20 flex h-full w-full items-center justify-center font-mono text-2xl font-bold text-white transition-opacity duration-200 group-hover:opacity-0">
        Social
      </span>

      {/* Icon Buttons */}
      <a className="social-btn" href="#">
        <Youtube className="h-6 w-6" />
      </a>

      <a className="social-btn" href="#">
        <Twitter className="h-6 w-6" />
      </a>

      <a className="social-btn" href="#">
        <Facebook className="h-6 w-6" />
      </a>

      <a className="social-btn" href="#">
        <Mail className="h-6 w-6" />
      </a>
    </div>
  );
};

export default CardSocial;
