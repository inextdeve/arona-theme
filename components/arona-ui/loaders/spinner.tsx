const LoaderSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="relative w-16 h-16">
          <div className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-cyan-500 border-b-cyan-500 animate-spin duration-[3s]"></div>

          <div
            className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-purple-500 animate-spin duration[2s]"
            style={{ animationDirection: "reverse" }}
          ></div>
        </div>

        <div className="absolute inset-0 bg-linear-to-tr from-[#0ff]/10 via-transparent to-[#0ff]/5 animate-pulse rounded-full blur-sm"></div>
      </div>
    </div>
  );
};

export default LoaderSpinner;
