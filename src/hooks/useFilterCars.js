// src/hooks/useFilterCars.js

import { useMemo } from "react";

export const useFilterCars = (cars, searchTerm, sortOption, filters) => {
  const filteredCars = useMemo(() => {
    let result = [...cars];

    // 🔍 Search
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (car) =>
          car.title.toLowerCase().includes(term) ||
          car.brand.toLowerCase().includes(term) ||
          (car.model || "").toLowerCase().includes(term)
      );
    }

    // 🧪 Brand
    if (filters.brand.length > 0) {
      result = result.filter((car) => filters.brand.includes(car.brand));
    }

    // 🔋 Fuel
    if (filters.fuel.length > 0) {
      result = result.filter((car) =>
        filters.fuel.includes(car.fuelTypes)
      );
    }

    // ⚙️ Transmission
    if (filters.transmission.length > 0) {
      result = result.filter((car) =>
        filters.transmission.includes(car.transmission)
      );
    }

    // 🚗 Body Type
    if (filters.body.length > 0) {
      result = result.filter((car) => filters.body.includes(car.bodyType));
    }

    // 🌍 Location
    if (filters.location.length > 0) {
      result = result.filter((car) => filters.location.includes(car.location));
    }

    // 💰 Price Range
    result = result.filter(
      (car) =>
        car.price >= filters.priceRange[0] &&
        car.price <= filters.priceRange[1]
    );

    // 📅 Year Range
    result = result.filter(
      (car) =>
        car.year >= filters.yearRange[0] &&
        car.year <= filters.yearRange[1]
    );

    // ↕️ Sort
    if (sortOption === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [cars, searchTerm, sortOption, filters]);

  return filteredCars;
};
