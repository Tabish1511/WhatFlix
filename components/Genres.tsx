import { useState } from 'react';

interface DropdownProps {
  label: string;
  genres: string[];
  className?: string;
}

export function Genres(props: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const handleCheckboxChange = (genre: string) => {
      setSelectedGenres(prevState =>
        prevState.includes(genre)
          ? prevState.filter(g => g !== genre)
          : [...prevState, genre]
      );
    };
  
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    };
  
    const filteredGenres = props.genres.filter(genre =>
      genre.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className={`relative mx-6 mt-2 ${props.className}`}>
        <button
          onClick={handleToggle}
          type="button"
          className="w-full text-white bg-gray-800 font-medium rounded-lg text-base px-5 py-2.5 hover:bg-gray-700 active:ring-gray-700 active:ring-2"
        >
          {props.label}
          <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg dark:bg-gray-700">
            <div className="p-3">
              <label htmlFor="input-group-search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-search"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search genres"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
              {filteredGenres.map((genre, index) => (
                <li key={index} className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id={`checkbox-item-${index}`}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    checked={selectedGenres.includes(genre)}
                    onChange={() => handleCheckboxChange(genre)}
                  />
                  <label htmlFor={`checkbox-item-${index}`} className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                    {genre}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

// Usage example
const genres = [
  'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary',
  'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery',
  'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western', 'Biography'
];
