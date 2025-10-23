import React from "react";

export default function MyActivity() {
  return (
    <div className="bg-[#e5e2df] min-h-screen flex flex-col justify-center items-center text-[#1a1a1a] font-serif px-6">
      {/* Empty State */}
      <div className="flex flex-col justify-center items-center text-center -mt-10">
        <h2 className="text-3xl font-light mb-3 tracking-wide">
          No Activity Yet
        </h2>
        <p className="text-[#1a1a1a]/70 mb-10 text-sm max-w-md">
          You haven’t created any designs yet. Start creating your first jewelry
          design!
        </p>

        <button
          className="relative px-10 py-3 rounded-full text-white font-medium 
                     bg-gradient-to-br from-[#2E4B45] to-[#1d5049] shadow-lg 
                     hover:scale-[1.04] active:scale-[0.99] transition-all duration-300
                     overflow-hidden border border-[#2E4B45]/40"
        >
          {/* Glossy shine effect */}
          <span className="absolute inset-0 bg-gradient-to-t from-transparent via-white/25 to-transparent opacity-40 rounded-full"></span>
          <span className="relative z-10">Create Your First Design</span>
        </button>
      </div>
    </div>
  );
}
