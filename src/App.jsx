import { useState } from "react";
import CarList from "./components/CarList";
import Navbar from "./components/Navbar";
import FilterSidebar from "./components/FilterSidebar";
import Footer from "./components/Footer";
import { carsData } from "./data/cars";
import { useFilterCars } from "./hooks/useFilterCars";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("priceLowToHigh");
  const [selectedLocation, setSelectedLocation] = useState("All States");

  const [filters, setFilters] = useState({
    brand: [],
    fuel: [],
    transmission: [],
    body: [],
    location: [],
    priceRange: [0, 5000000],
    yearRange: [2000, 2025],
  });

  const filteredCars = useFilterCars(carsData, searchTerm, sortOption, filters);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col text-gray-800">
      <Navbar />
      <main className="flex flex-1 sm:p-4 mt-18">
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          setSelectedLocation={(loc) =>
            setFilters({ ...filters, location: [loc] })
          }
          
          carsData={carsData} // ✅ pass raw data here
        />
        <CarList
          cars={filteredCars}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortOption={sortOption}
          setSortOption={setSortOption}
          selectedLocation={selectedLocation}
        />
      </main>
      <Footer />
    </div>
  );
}
