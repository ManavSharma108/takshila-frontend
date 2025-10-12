import React, { useState } from "react";

const jewelleryData = [
  {
    id: 1,
    image: "assets/jewel1.jpg",
    name: "Krishna",
    designer: "Aikansh Tyagi",
    price: "$7263.28",
  },
  {
    id: 2,
    image: "assets/jewel2.jpg",
    name: "Diamond Band",
    designer: "Sanchit",
    price: "$8798.32",
  },
  {
    id: 3,
    image: "assets/jewel3.jpg",
    name: "J's Ring",
    designer: "Jeshl Adeshra",
    price: "$3678.40",
  },
  {
    id: 4,
    image: "assets/jewel4.jpg",
    name: "Cat Elegance",
    designer: "Amara Rao",
    price: "$4920.55",
  },
  {
    id: 5,
    image: "assets/jewel5.jpg",
    name: "Golden Grace",
    designer: "Arnav Kapoor",
    price: "$5999.99",
  },
  {
    id: 6,
    image: "assets/jewel6.jpg",
    name: "Royal Spark",
    designer: "Mira Desai",
    price: "$7645.22",
  },
  {
    id: 7,
    image: "assets/jewel7.jpg",
    name: "Opal Charm",
    designer: "Ananya Jain",
    price: "$5380.00",
  },
  {
    id: 8,
    image: "assets/jewel8.jpg",
    name: "Emerald Glow",
    designer: "Rohit Verma",
    price: "$6890.15",
  },
  {
    id: 9,
    image: "assets/jewel9.jpg",
    name: "Ruby Luxe",
    designer: "Nisha Patel",
    price: "$7220.88",
  },
  {
    id: 10,
    image: "assets/jewel10.jpg",
    name: "Celestial Band",
    designer: "Meera Chauhan",
    price: "$8333.19",
  },
  {
    id: 11,
    image: "assets/jewel11.jpg",
    name: "Aurora Ring",
    designer: "Ishaan Sharma",
    price: "$6900.25",
  },
  {
    id: 12,
    image: "assets/jewel12.jpg",
    name: "Pearl Dusk",
    designer: "Diya Kapoor",
    price: "$4120.70",
  },
  {
    id: 13,
    image: "assets/jewel13.jpg",
    name: "Vintage Muse",
    designer: "Kabir Mehta",
    price: "$5322.90",
  },
  {
    id: 14,
    image: "assets/jewel14.jpg",
    name: "Rose Gold Whisper",
    designer: "Mitali Desai",
    price: "$6305.45",
  },
  {
    id: 15,
    image: "assets/jewel15.jpg",
    name: "Golden Empress",
    designer: "Rajvi Singh",
    price: "$8490.00",
  },
  {
    id: 16,
    image: "assets/jewel16.jpg",
    name: "Crimson Shine",
    designer: "Yash Tandon",
    price: "$5795.55",
  },
  {
    id: 17,
    image: "assets/jewel17.jpg",
    name: "Moonlit Tiara",
    designer: "Reema Bhatia",
    price: "$9600.99",
  },
  {
    id: 18,
    image: "assets/jewel18.jpg",
    name: "Silver Mirage",
    designer: "Aarav Khanna",
    price: "$4775.22",
  },
  {
    id: 19,
    image: "assets/jewel19.jpg",
    name: "Ocean Bloom",
    designer: "Kavya Nair",
    price: "$6350.35",
  },
  {
    id: 20,
    image: "assets/jewel20.jpg",
    name: "Royal Crescent",
    designer: "Tanish Malhotra",
    price: "$7120.50",
  },
  {
    id: 21,
    image: "assets/jewel21.jpg",
    name: "Diamond Crest",
    designer: "Aarohi Ghosh",
    price: "$7921.12",
  },
  {
    id: 22,
    image: "assets/jewel22.jpg",
    name: "Golden Ivy",
    designer: "Ira Sharma",
    price: "$6012.08",
  },
  {
    id: 23,
    image: "assets/jewel23.jpg",
    name: "Petal Radiance",
    designer: "Zara Ali",
    price: "$4780.64",
  },
  {
    id: 24,
    image: "assets/jewel24.jpg",
    name: "Twilight Band",
    designer: "Aryan Dutta",
    price: "$5625.55",
  },
  {
    id: 25,
    image: "assets/jewel25.jpg",
    name: "Halo Whisper",
    designer: "Esha Kapoor",
    price: "$7008.44",
  },
  {
    id: 26,
    image: "assets/jewel26.jpg",
    name: "Eternal Flame",
    designer: "Nikhil Joshi",
    price: "$8433.99",
  },
  {
    id: 27,
    image: "assets/jewel27.jpg",
    name: "Golden Lattice",
    designer: "Ria Patel",
    price: "$6750.22",
  },
  {
    id: 28,
    image: "assets/jewel28.jpg",
    name: "Starlight Charm",
    designer: "Vihaan Mehta",
    price: "$5902.45",
  },
  {
    id: 29,
    image: "assets/jewel29.jpg",
    name: "Enchanted Glow",
    designer: "Tanvi Sood",
    price: "$7600.75",
  },
  {
    id: 30,
    image: "assets/jewel30.jpg",
    name: "Majestic Halo",
    designer: "Devansh Rao",
    price: "$8325.40",
  },
];

export default function Community() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;
  const totalPages = Math.ceil(jewelleryData.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = jewelleryData.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="bg-[#e5e2df] text-gray-900 min-h-screen flex flex-col">
      {/* Page Header */}
      <section className="text-center mt-32 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg tracking-wide">
          Explore the Creations
        </h1>
        <p className="text-gray-300 mt-2 text-sm md:text-base">
          Discover designs crafted by our talented community members.
        </p>
      </section>

      {/* Card Grid */}
      <main className="flex-grow px-6 md:px-10 lg:px-20 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCards.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg 
                         shadow-[0_4px_30px_rgba(255,255,255,0.1)] overflow-hidden hover:scale-[1.02] 
                         transition-transform duration-300 ease-in-out"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover rounded-t-3xl"
              />

              {/* Content */}
              <div className="p-5 flex flex-col justify-between min-h-[150px]">
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-300 flex items-center gap-2">
                    <img
                      src="assets/user.svg"
                      alt="user icon"
                      className="w-4 h-4 invert opacity-80"
                    />
                    {item.designer}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    No description provided
                  </p>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-white font-medium">{item.price}</span>
                  <button className="px-4 py-1 bg-[#123b36] hover:bg-[#1d5049] text-white text-sm rounded-full transition-all">
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Hover Layer */}
              <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {/* Left Arrow */}
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`w-10 h-10 rounded-full text-lg font-bold flex items-center justify-center 
                       ${
                         currentPage === 1
                           ? "text-gray-400"
                           : "text-white hover:text-[#1d5049]"
                       }`}
          >
            &lt;
          </button>

          {/* Page Numbers */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-9 h-9 rounded-full text-sm flex items-center justify-center transition-all
                  ${
                    page === currentPage
                      ? "bg-[#123b36] text-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {page}
                </button>
              )
            )}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 rounded-full text-lg font-bold flex items-center justify-center 
                       ${
                         currentPage === totalPages
                           ? "text-gray-400"
                           : "text-white hover:text-[#1d5049]"
                       }`}
          >
            &gt;
          </button>
        </div>
      </main>
    </div>
  );
}
