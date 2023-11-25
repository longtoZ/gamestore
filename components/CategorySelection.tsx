// components/CategorySelection.tsx

import React from 'react';

interface CategorySelectionProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string) => void;
}

const CategorySelection: React.FC<CategorySelectionProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex space-x-4 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-md cursor-pointer transition ease-in-out duration-300 font-bold ${
            selectedCategory === category ? 'bg-gradient-to-br from-green-400 to-blue-500 text-white' : 'bg-transparent'
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
