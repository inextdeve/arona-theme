"use client";

export default function CardPricing() {
  return (
    <div className="flex flex-col bg-white rounded-3xl shadow-sm">
      <div className="px-6 py-8 sm:p-10 sm:pb-6">
        <div className="grid items-center justify-center w-full grid-cols-1 text-left">
          {/* Title + Subtitle */}
          <div>
            <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
              Starter
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Suitable to grow steadily.
            </p>
          </div>

          {/* Price */}
          <div className="mt-6">
            <p>
              <span className="text-5xl font-light tracking-tight text-black">
                $25
              </span>
              <span className="text-base font-medium text-gray-500"> /mo </span>
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex px-6 pb-8 sm:px-8">
        <a
          href="#"
          aria-describedby="tier-company"
          className="
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
    </div>
  );
}
