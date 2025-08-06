<<<<<<< HEAD
const SearchSortBar = ({ searchTerm, setSearchTerm, sortOption, setSortOption }) => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between mb-6 gap-4">
      <input
        type="text"
        placeholder="Search for Cars, Brands, Models..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SearchSortBar;
=======
const SearchSortBar = ({ searchTerm, setSearchTerm, sortOption, setSortOption }) => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between mb-6 gap-4">
      <input
        type="text"
        placeholder="Search for Cars, Brands, Models..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SearchSortBar;
>>>>>>> 0b9d9ff80be45c3e85e413b4d56accecb4e19f1d
