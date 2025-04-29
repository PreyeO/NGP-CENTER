import React from "react";

const NGPLogo = () => {
  return (
    <div className=" space-x-4 bg-gray-900 p-6 rounded-full shadow-2xl">
      {/* Logo Icon */}

      {/* Logo Text */}
      <div className="text-white">
        <div className="flex  items-center">
          <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <div className="text-3xl font-semibold">NGP</div>
        </div>

        <div className="flex text-xl font-medium text-emerald-400 text-center">
          <p> Correctional Center</p>
        </div>
      </div>
    </div>
  );
};

export default NGPLogo;
