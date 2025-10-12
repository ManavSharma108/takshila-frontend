import React, { useState } from "react";

const products = [
  { id: 1, name: "Aria Dawn", price: 3200, stock: true, image: "assets/jewel1.jpg" },
  { id: 2, name: "Aurora Halo", price: 4800, stock: true, image: "assets/jewel2.jpg" },
  { id: 3, name: "Aurora Spark", price: 5500, stock: false, image: "assets/jewel3.jpg" },
  { id: 4, name: "Celeste Ring", price: 6100, stock: true, image: "assets/jewel4.jpg" },
  { id: 5, name: "Golden Dream", price: 4500, stock: true, image: "assets/jewel5.jpg" },
  { id: 6, name: "Serenity Band", price: 2400, stock: false, image: "assets/jewel6.jpg" },
  { id: 7, name: "Luna Glow", price: 3700, stock: true, image: "assets/jewel7.jpg" },
  { id: 8, name: "Radiant Whisper", price: 5200, stock: true, image: "assets/jewel8.jpg" },
];

export default function Catalogue() {
  const [inStock, setInStock] = useState(true);
  const [outOfStock, setOutOfStock] = useState(false);
  const [sortOrder, setSortOrder] = useState("az");
  const [priceRange, setPriceRange] = useState([0, 6500]);

  const handlePriceChange = (e) => setPriceRange([0, Number(e.target.value)]);

  const filteredProducts = products
    .filter((p) => {
      if (inStock && p.stock) return true;
      if (outOfStock && !p.stock) return true;
      if (!inStock && !outOfStock) return true;
      return false;
    })
    .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sortOrder === "az") return a.name.localeCompare(b.name);
      if (sortOrder === "za") return b.name.localeCompare(a.name);
      if (sortOrder === "lowhigh") return a.price - b.price;
      if (sortOrder === "highlow") return b.price - a.price;
      return 0;
    });

  return (
    <>
      <div className="relative bg-black min-h-screen text-white pt-40 px-6 md:px-12 lg:px-20 pb-24 overflow-hidden">
        {/* Ambient White Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent blur-3xl opacity-50 pointer-events-none"></div>

        {/* Header */}
        <section className="text-center mb-16 relative z-10">
          <h1 className="text-5xl md:text-5xl font-serif font-light tracking-wide text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            PRODUCTS
          </h1>
          <p className="text-sm mt-2 text-gray-400 mb-24 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            <span className="text-white/50">Home</span> &nbsp;›&nbsp; Products
          </p>
        </section>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-12 relative z-10">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 space-y-10">
            {/* Availability */}
            <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl 
                            shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:shadow-[0_0_45px_rgba(255,255,255,0.4)]
                            transition-all duration-500">
              <h3 className="text-lg font-semibold uppercase mb-4 tracking-wide text-white/70">
                AVAILABILITY
              </h3>
              <div className="space-y-3 text-white/60 text-sm">
                <label className="flex items-center gap-2 hover:text-white transition">
                  <input
                    type="checkbox"
                    checked={inStock}
                    onChange={() => setInStock(!inStock)}
                    className="accent-white scale-110"
                  />
                  In stock
                </label>
                <label className="flex items-center gap-2 hover:text-white transition">
                  <input
                    type="checkbox"
                    checked={outOfStock}
                    onChange={() => setOutOfStock(!outOfStock)}
                    className="accent-[#b6795c] scale-110"
                  />
                  Out of stock
                </label>
              </div>
            </div>

            {/* Price */}
            <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl 
                            shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:shadow-[0_0_45px_rgba(255,255,255,0.4)]
                            transition-all duration-500">
              <h3 className="text-lg font-semibold uppercase mb-4 tracking-wide text-white/70">
                PRICE
              </h3>
              <input
                type="range"
                min="0"
                max="6500"
                value={priceRange[1]}
                onChange={handlePriceChange}
                className="w-full accent-[#b6795c]"
              />
              <p className="text-white/50 text-sm mt-2">
                Price: ${priceRange[0].toFixed(2)} — ${priceRange[1].toFixed(2)}
              </p>
            </div>
          </aside>

          {/* Product Section */}
          <section className="flex-1">
            {/* Sorting */}
            <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border border-gray-600 bg-white/10 backdrop-blur-md text-white text-sm rounded-full px-5 py-2 
                           focus:outline-none hover:border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]
                           transition-all duration-500"
              >
                <option value="az" className="text-black">Alphabetically, A–Z</option>
                <option value="za" className="text-black">Alphabetically, Z–A</option>
                <option value="lowhigh" className="text-black">Price: Low to High</option>
                <option value="highlow" className="text-black">Price: High to Low</option>
              </select>

              {/* Layout Icons */}
              <div className="flex gap-3">
                <button className="w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center 
                                   hover:bg-white/10 text-gray-400 hover:text-white transition-all 
                                   shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] duration-500">
                  Ⅱ
                </button>
                <button className="w-8 h-8 border border-[#b6795c] bg-[#b6795c]/80 text-white rounded-full 
                                   flex items-center justify-center shadow-[0_0_15px_rgba(182,121,92,0.7)] hover:shadow-[0_0_25px_rgba(182,121,92,1)]
                                   transition-all duration-500">
                  Ⅲ
                </button>
                <button className="w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center 
                                   hover:bg-white/10 text-gray-400 hover:text-white transition-all 
                                   shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] duration-500">
                  ☰
                </button>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-16">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center text-center group transition-all"
                >
                  <div className="relative w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl 
                                  shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.9)]
                                  p-4 transition-all duration-700">
                    {/* Image Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-56 object-cover rounded-xl transform group-hover:scale-[1.05] transition-transform duration-700"
                    />
                  </div>

                  <h2 className="text-sm font-semibold mt-4 tracking-wide text-white/80 uppercase group-hover:text-white transition">
                    {item.name}
                  </h2>

                  <p className="text-white/60 text-sm mt-1">${item.price.toFixed(2)}</p>

                  <button
                    className={`mt-3 px-5 py-2 text-sm rounded-full transition-all duration-700 
                      shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] ${
                      item.stock
                        ? "bg-[#123b36] hover:bg-[#1d5049] text-white"
                        : "bg-gray-700/40 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {item.stock ? "Buy Now" : "Out of Stock"}
                  </button>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <p className="text-center text-gray-400 mt-20 text-sm">
                No products match your filters.
              </p>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
