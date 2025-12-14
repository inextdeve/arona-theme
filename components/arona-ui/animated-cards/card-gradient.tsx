"use client";

import { AlertTriangle, ArrowRight } from "lucide-react";

export default function CardGradient() {
  return (
    <div
      className="
      relative flex w-80 flex-col rounded-xl 
      bg-linear-to-br from-white to-gray-50 
      text-gray-700 shadow-lg 
      hover:shadow-xl hover:-translate-y-1 
      transition-all duration-300
    "
    >
      <div
        className="
        relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl 
        shadow-lg group
      "
      >
        <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-blue-500 to-indigo-600 opacity-90" />
        <div
          className="
          absolute inset-0 
          bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]
          bg-size-[20px_20px]
          animate-pulse
        "
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <AlertTriangle
            className="
            w-20 h-20 text-white/90
            transform transition-transform duration-300 
            group-hover:scale-110
          "
          />
        </div>
      </div>
      <div className="p-6">
        <h5
          className="
          mb-2 text-xl font-semibold tracking-normal text-gray-900 
          group-hover:text-blue-600 transition-colors duration-300
        "
        >
          Hover experience
        </h5>
        <p className="text-base font-light leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis
          ligula.
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          className="
          group relative w-full inline-flex items-center justify-center 
          px-6 py-3 font-bold text-white rounded-lg 
          bg-linear-to-r from-blue-600 to-blue-500 
          hover:from-blue-700 hover:to-blue-600
          shadow-lg shadow-blue-500/30 
          hover:shadow-blue-500/40 
          transition-all duration-300 
          hover:-translate-y-0.5
        "
        >
          <span className="relative flex items-center gap-2">
            Read More
            <ArrowRight
              className="
              w-5 h-5 transform transition-transform 
              group-hover:translate-x-1
            "
            />
          </span>
        </button>
      </div>
    </div>
  );
}
