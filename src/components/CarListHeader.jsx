import { SearchIcon } from "lucide-react";
import React from "react";

const CarListHeader = ({
  searchTerm,
  setSearchTerm,
  sortOption,
  setSortOption,
  carCount = 0,
  city,
}) => {
  return (
    <div className="w-full mb-4 sm:px-4">
      {/* Top Section: Breadcrumb + Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
        {/* Breadcrumb */}
        <div className="text-xs sm:text-sm text-gray-600">
          Home <span className="text-black">{">"}</span>{" "}
          <span className="text-red-600 font-semibold underline">Used Cars</span>
        </div>

        {/* Search */}
        <div className="w-full sm:w-[60%] md:w-[40%] relative">
          <input
            type="text"
            placeholder="Search for Cars, Brands, Model..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border-b border-gray-300 rounded-md focus:outline-none py-2 pl-9 pr-2 placeholder:text-gray-500 text-sm"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <SearchIcon className="h-5 w-5" />
          </span>
        </div>
      </div>

      {/* Bottom Section: Count + Sort */}
      <div className="bg-red-600 text-white px-4 py-3 rounded-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h2 className="text-base sm:text-lg font-semibold">
          {carCount} Second Hand Cars in {city}
        </h2>

        {/* Sort Dropdown */}
        <div className="bg-white text-black rounded-sm px-3 py-1 text-sm w-full sm:w-auto">
          <label className="block sm:inline mb-1 sm:mb-0 font-medium">Sort By:</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-white outline-none w-full sm:w-auto mt-1 sm:mt-0"
          >
            <option value="priceLowToHigh">Price - Low to High</option>
            <option value="priceHighToLow">Price - High to Low</option>
            <option value="yearNewToOld">Year - New to Old</option>
            <option value="yearOldToNew">Year - Old to New</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CarListHeader;
