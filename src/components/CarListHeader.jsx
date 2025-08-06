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
    <div className="w-full mb-4">
      {/* Breadcrumb and Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2 px-2">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600">
          Home <span className="text-black">{">"}</span>{" "}
          <span className="text-red-600 font-medium underline">Used Cars</span>
        </div>

        {/* Search */}
        <div className="w-full md:w-[40%] relative ">
          <input
            type="text"
            placeholder="Search for Cars, Brands, Model..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border-b border-gray-400 focus:outline-none py-1 pl-8 placeholder:text-gray-500"
          />
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 ">
            <SearchIcon className="h-5 w-5" />
          </span>
        </div>
      </div>

      {/* Red Section: Count + Sort */}
      <div className="bg-red-600 text-white px-4 py-2 rounded-md flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">
          {carCount} Second Hand Cars in {city}
        </h2>

        {/* Sort Dropdown */}
        <div className="bg-white text-black rounded-sm px-3 py-1 text-sm">
          <label className="mr-2 font-medium">Sort By:</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-white outline-none"
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
