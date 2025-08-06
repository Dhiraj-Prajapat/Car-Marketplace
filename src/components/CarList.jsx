<<<<<<< HEAD
import React, { useState } from "react";
import CarCard from "./CarCard";
import CarListHeader from "./CarListHeader";

const carsPerPage = 9;

const CarList = ({ cars, selectedLocation }) => {
  const [visibleCount, setVisibleCount] = useState(carsPerPage);
  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("newest");

  const visibleCars = cars.slice(0, visibleCount);
  const hasMore = visibleCount < cars.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + carsPerPage);
  };

  return (
    <div className="min-h-screen w-full">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <CarListHeader
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortOption={sortOption}
          setSortOption={setSortOption}
          carCount={cars.length}
          city={selectedLocation}
        />

        {/* Car Cards Grid */}
        {visibleCars.length === 0 ? (
          <div className="text-center text-gray-800 py-20 col-span-full">
            <p className="text-2xl font-medium">No cars found</p>
            <p className="text-lg text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCars.map((car, idx) => (
              <CarCard car={car} key={car.id || idx} />
            ))}
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="relative mt-10">
            <div className="overflow-hidden relative h-20 -mb-10 z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pointer-events-none opacity-40 scale-[0.98] translate-y-2 px-1 animate-fade-in">
                {cars.slice(visibleCount, visibleCount + 3).map((car, idx) => (
                  <CarCard car={car} key={`preview-${idx}`} />
                ))}
              </div>
            </div>

            <div className="flex justify-center z-20 relative mt-6">
              {loading ? (
                <div className="flex items-center gap-2 text-red-700">
                  <svg
                    className="animate-spin h-6 w-6 text-red-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Loading...
                </div>
              ) : (
                <button
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => {
                      handleLoadMore();
                      setLoading(false);
                    }, 800);
                  }}
                  className="w-48 py-3 bg-red-700 text-white rounded font-semibold text-lg shadow hover:bg-red-800 transition"
                >
                  Load More
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarList;
=======
import React, { useState } from "react";
import CarCard from "./CarCard";
import CarListHeader from "./CarListHeader";

const carsPerPage = 9;

const CarList = ({ cars, selectedLocation }) => {
  const [visibleCount, setVisibleCount] = useState(carsPerPage);
  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("newest");

  const visibleCars = cars.slice(0, visibleCount);
  const hasMore = visibleCount < cars.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + carsPerPage);
  };

  return (
    <div className="min-h-screen w-full">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <CarListHeader
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortOption={sortOption}
          setSortOption={setSortOption}
          carCount={cars.length}
          city={selectedLocation}
        />

        {/* Car Cards Grid */}
        {visibleCars.length === 0 ? (
          <div className="text-center text-gray-800 py-20 col-span-full">
            <p className="text-2xl font-medium">No cars found</p>
            <p className="text-lg text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCars.map((car, idx) => (
              <CarCard car={car} key={car.id || idx} />
            ))}
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="relative mt-10">
            <div className="overflow-hidden relative h-20 -mb-10 z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pointer-events-none opacity-40 scale-[0.98] translate-y-2 px-1 animate-fade-in">
                {cars.slice(visibleCount, visibleCount + 3).map((car, idx) => (
                  <CarCard car={car} key={`preview-${idx}`} />
                ))}
              </div>
            </div>

            <div className="flex justify-center z-20 relative mt-6">
              {loading ? (
                <div className="flex items-center gap-2 text-red-700">
                  <svg
                    className="animate-spin h-6 w-6 text-red-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Loading...
                </div>
              ) : (
                <button
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => {
                      handleLoadMore();
                      setLoading(false);
                    }, 800);
                  }}
                  className="w-48 py-3 bg-red-700 text-white rounded font-semibold text-lg shadow hover:bg-red-800 transition"
                >
                  Load More
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarList;
>>>>>>> 0b9d9ff80be45c3e85e413b4d56accecb4e19f1d
