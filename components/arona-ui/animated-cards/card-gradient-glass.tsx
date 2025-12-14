"use client";

export default function CardProfileHover() {
  return (
    <div
      className="
        group relative w-80 h-72 rounded-2xl overflow-hidden
        bg-slate-50 flex flex-col items-center justify-center gap-2 text-center

        before:content-['']
        before:absolute before:top-0 
        before:w-80 before:h-24 before:rounded-t-2xl
        before:bg-linear-to-bl before:from-sky-200 before:via-orange-200 before:to-orange-700

        before:transition-all before:duration-500
        before:group-hover:scale-95
        before:group-hover:w-80
        before:group-hover:h-44
        before:group-hover:rounded-b-2xl
        shadow-sm
        hover:shadow-md
        hover:scale-[1.09]
        transition-all
        duration-300
      "
    >
      {/* Circle */}
      <div
        className="
          w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10
          transition-all duration-500
          group-hover:scale-150
          group-hover:-translate-x-24
          group-hover:-translate-y-20
          overflow-hidden
        "
      >
        <img src="/assets/images/avatars/03.png" alt="" />
      </div>

      {/* Text */}
      <div
        className="
          z-10 transition-all duration-500 
          group-hover:-translate-y-10
        "
      >
        <span className="text-2xl font-semibold">George Johnson</span>
        <p>Support Specialist</p>
      </div>

      {/* Button */}

      <a
        href="#"
        aria-describedby="tier-company"
        className="
        max-w-[130px]
            flex items-center justify-center w-full px-6 py-2.5 
            text-center text-white text-sm 
            bg-black border-2 border-black rounded-full
            duration-200 hover:bg-transparent hover:text-black 
            hover:border-black 
            focus:outline-none focus-visible:outline-black 
            focus-visible:ring-black
          "
      >
        Get started
      </a>
    </div>
  );
}
