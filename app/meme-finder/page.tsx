'use client';

import { useState } from 'react';
import { Search, Download, Share2 } from 'lucide-react';

// Mock meme data for demonstration
const MOCK_MEMES = [
  {
    id: 1,
    title: 'Distracted Boyfriend',
    imageUrl: 'https://i.imgur.com/QkdBRRG.jpeg',
    tags: ['popular', 'reaction', 'distracted']
  },
  {
    id: 2,
    title: 'Drake Hotline Bling',
    imageUrl: 'https://i.imgur.com/HO8Ak7A.jpeg',
    tags: ['popular', 'drake', 'comparison']
  },
  {
    id: 3,
    title: 'Two Buttons',
    imageUrl: 'https://i.imgur.com/GVxMoRQ.jpeg',
    tags: ['choice', 'decision', 'buttons']
  },
  {
    id: 4,
    title: 'Change My Mind',
    imageUrl: 'https://i.imgur.com/RTXGR6Q.jpeg',
    tags: ['debate', 'opinion', 'change']
  },
  {
    id: 5,
    title: 'Expanding Brain',
    imageUrl: 'https://i.imgur.com/xlXzBqE.jpeg',
    tags: ['brain', 'expanding', 'intelligence']
  },
  {
    id: 6,
    title: 'Roll Safe',
    imageUrl: 'https://i.imgur.com/o7AysrW.jpeg',
    tags: ['smart', 'thinking', 'clever']
  }
];

export default function MemeFinder() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(MOCK_MEMES);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSearching(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const results = MOCK_MEMES.filter(meme => 
        meme.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        meme.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      
      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Meme Finder
      </h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for memes by keywords (e.g., 'popular', 'reaction')"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              disabled={isSearching}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            disabled={isSearching}
          >
            {isSearching ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
          {searchTerm ? `Search Results for "${searchTerm}"` : 'Popular Memes'}
        </h2>
        
        {searchResults.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No memes found matching your search. Try different keywords!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((meme) => (
              <div key={meme.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
                <div className="aspect-square overflow-hidden bg-white dark:bg-gray-800">
                  <img 
                    src={meme.imageUrl} 
                    alt={meme.title}
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">{meme.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {meme.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <button 
                      className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                      onClick={() => window.open(meme.imageUrl, '_blank')}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </button>
                    <button className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="mt-8 bg-indigo-50 dark:bg-gray-700 p-4 rounded-lg text-sm text-gray-600 dark:text-gray-300">
        <p>
          <span className="font-medium">Pro Tip:</span> Premium users can access over 10,000+ trending memes and can edit them directly.
        </p>
      </div>
    </div>
  );
} 