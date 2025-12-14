"use client";

import { FC, useState } from "react";

const CardHover: FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const items = [
    { color: "bg-rose-500", title: "Hover Me", text: "Lorem Ipsum" },
    { color: "bg-blue-500", title: "Hover Me", text: "Lorem Ipsum" },
    { color: "bg-green-500", title: "Hover Me", text: "Lorem Ipsum" },
  ];

  return (
    <div className="flex flex-col gap-4">
      {items.map((card, i) => {
        const isHovered = hovered === i;
        const blurred = hovered !== null && hovered !== i;

        return (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`
              flex flex-col items-center justify-center text-center 
              h-[100px] w-[250px] rounded-lg text-white cursor-pointer 
              transition-all duration-300 ${card.color}
              ${isHovered ? "scale-110" : ""}
              ${blurred ? "blur-sm scale-90" : ""}
            `}
          >
            <p className="text-base font-bold">{card.title}</p>
            <p className="text-[0.7em]">{card.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CardHover;
