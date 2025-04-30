import React from "react";

const NGPLogo = ({ className }) => {
  return (
    <div className="flex items-center md:space-x-4  bg-transparent rounded-full">
      {/* Logo Icon */}
      <div className="md:w-14 md:h-14 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-white font-bold md:text-2xl text-lg">N</span>
      </div>

      {/* Logo Text */}
      <div className={`${className}`}>
        <div className="md:text-3xl text-xl font-semibold leading-tight">
          NGP
        </div>
        <div className="md:flex text-emerald-400 md:text-lg text-sm font-medium">
          Correctional Center
        </div>
      </div>
    </div>
  );
};

export default NGPLogo;
