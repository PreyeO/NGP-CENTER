import React from "react";

const NGPLogo = ({ className }) => {
  return (
    <div className="flex items-center space-x-4  bg-transparent rounded-full">
      {/* Logo Icon */}
      <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-2xl">N</span>
      </div>

      {/* Logo Text */}
      <div className={`${className}`}>
        <div className="text-3xl font-semibold leading-tight">NGP</div>
        <div className="text-emerald-400 text-lg font-medium">
          Correctional Center
        </div>
      </div>
    </div>
  );
};

export default NGPLogo;
