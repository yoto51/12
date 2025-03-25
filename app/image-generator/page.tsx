'use client';

import { useState } from 'react';
import { ImageIcon, Download, RefreshCw, Check } from 'lucide-react';

const STYLE_OPTIONS = [
  { id: 'photorealistic', name: 'Photorealistic', icon: '📷' },
  { id: 'anime', name: 'Anime', icon: '🎭' },
  { id: 'cartoon', name: 'Cartoon', icon: '🦸' },
  { id: 'oil-painting', name: 'Oil Painting', icon: '🖼️' },
  { id: 'watercolor', name: 'Watercolor', icon: '🎨' },
  { id: 'pixel-art', name: 'Pixel Art', icon: '👾' },
];

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('photorealistic');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState('');
  const [imageAlt, setImageAlt] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setGeneratedImage('');
    
    try {
      // In a real app, this would call an API to generate the image
      console.log(`Generating ${selectedStyle} image: ${prompt}`);
      
      // Simulate API call with a delay
      setTimeout(() => {
        // In production, this would be the URL returned from your image generation API
        // Using a placeholder image for demo
        setGeneratedImage('https://source.unsplash.com/random/800x600/?'+encodeURIComponent(prompt));
        setImageAlt(prompt);
        setIsGenerating(false);
      }, 2000);
    } catch (error) {
      console.error('Error generating image:', error);
      setIsGenerating(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        AI Image Generator
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Panel */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <form onSubmit={handleGenerate} className="space-y-6">
            <div>
              <label 
                htmlFor="prompt" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Describe the image you want to create
              </label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g., A majestic mountain landscape with a lake at sunset and snow-capped peaks"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                rows={4}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Select Style
              </label>
              <div className="grid grid-cols-3 gap-3">
                {STYLE_OPTIONS.map((style) => (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setSelectedStyle(style.id)}
                    className={`
                      flex flex-col items-center justify-center p-3 border rounded-md
                      ${selectedStyle === style.id 
                        ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900 dark:border-indigo-400' 
                        : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'}
                    `}
                  >
                    <span className="text-2xl mb-1">{style.icon}</span>
                    <span className="text-xs text-gray-700 dark:text-gray-300">{style.name}</span>
                    {selectedStyle === style.id && (
                      <span className="absolute top-1 right-1 text-indigo-600 dark:text-indigo-400">
                        <Check className="h-4 w-4" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isGenerating || !prompt.trim()}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="animate-spin -ml-1 mr-2 h-5 w-5" />
                  Generating...
                </>
              ) : (
                <>
                  <ImageIcon className="mr-2 h-5 w-5" />
                  Generate Image
                </>
              )}
            </button>
          </form>
          
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Tips for better results:
            </h3>
            <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1 list-disc pl-5">
              <li>Be detailed and specific in your description</li>
              <li>Mention colors, lighting, and mood</li>
              <li>Specify camera angle or perspective if relevant</li>
              <li>Premium users get higher resolution images and more style options</li>
            </ul>
          </div>
        </div>
        
        {/* Results Panel */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Your Generated Image
          </h2>
          
          {generatedImage ? (
            <div className="space-y-4">
              <div className="relative aspect-square bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                <img 
                  src={generatedImage} 
                  alt={imageAlt}
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                <button 
                  onClick={() => {
                    // In a real app, this would reset and generate a new variation
                    setIsGenerating(true);
                    setTimeout(() => {
                      setGeneratedImage('https://source.unsplash.com/random/800x600/?'+encodeURIComponent(prompt)+'&v='+Date.now());
                      setIsGenerating(false);
                    }, 1500);
                  }}
                  disabled={isGenerating}
                  className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center"
                >
                  <RefreshCw className={`h-4 w-4 mr-1 ${isGenerating ? 'animate-spin' : ''}`} />
                  New Variation
                </button>
                
                <a
                  href={generatedImage}
                  download={`ai-image-${Date.now()}.jpg`}
                  className="px-3 py-1.5 text-sm bg-indigo-600 rounded-md text-white hover:bg-indigo-700 flex items-center"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </a>
              </div>
            </div>
          ) : (
            <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-md flex items-center justify-center">
              <div className="text-center text-gray-400 dark:text-gray-500 p-8">
                {isGenerating ? (
                  <div className="flex flex-col items-center">
                    <RefreshCw className="animate-spin h-8 w-8 mb-2" />
                    <p>Working on your masterpiece...</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <ImageIcon className="h-8 w-8 mb-2" />
                    <p>Enter a prompt and click "Generate Image" to see the result here</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 