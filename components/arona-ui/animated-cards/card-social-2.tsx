"use client";

import { Instagram, Twitter, Linkedin, Phone } from "lucide-react";

export default function CardSocial2() {
  return (
    <div
      className="
        flex items-center justify-center gap-5 
        p-6 bg-[#eeeeee] shadow-[0_0_20px_rgba(0,0,0,0.05)]
      "
    >
      {/* Instagram */}
      <a
        href="#"
        className="
          w-[52px] h-[52px] bg-[#2c2c2c] flex items-center justify-center 
          transition-all duration-300 overflow-hidden active:scale-90
          hover:bg-[#d62976] group relative
        "
      >
        <Instagram
          className="
            w-[17px] text-white group-hover:animate-top-down"
        />
      </a>

      {/* Twitter */}
      <a
        href="#"
        className="
          w-[52px] h-[52px] bg-[#2c2c2c] flex items-center justify-center 
          transition-all duration-300 overflow-hidden active:scale-90
          hover:bg-[#00acee] group
        "
      >
        <Twitter
          className="
            w-[17px] text-white group-hover:animate-top-down"
        />
      </a>

      {/* LinkedIn */}
      <a
        href="#"
        className="
          w-[52px] h-[52px] bg-[#2c2c2c] flex items-center justify-center 
          transition-all duration-300 overflow-hidden active:scale-90
          hover:bg-[#0072b1] group
        "
      >
        <Linkedin
          className="
            w-[17px] text-white group-hover:animate-top-down"
        />
      </a>

      {/* WhatsApp → Using Phone icon (closest lucide icon) */}
      <a
        href="#"
        className="
          w-[52px] h-[52px] bg-[#2c2c2c] flex items-center justify-center 
          transition-all duration-300 overflow-hidden active:scale-90
          hover:bg-[#128C7E] group
        "
      >
        <Phone className="w-[17px] text-white group-hover:animate-top-down" />
      </a>
    </div>
  );
}
