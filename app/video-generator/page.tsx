'use client';

import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

export default function VideoGenerator() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) return;
    
    setLoading(true);
    setVideoUrl('');
    
    try {
      // In a real implementation, this would call an API endpoint
      // that would generate the video using AI services
      console.log('Generating video with prompt:', prompt);
      
      // Mock API call with timeout to simulate processing
      setTimeout(() => {
        // This is a placeholder - in a real app, the API would return the actual video URL
        setVideoUrl('https://example.com/generated-video.mp4');
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.error('Error generating video:', error);
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        AI Video Generator
      </h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Generate a video from text
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label 
              htmlFor="prompt" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Describe your video
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="E.g., A serene mountain landscape with snow-capped peaks and a flowing river"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              rows={4}
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading || !prompt.trim()}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                Generating Video...
              </>
            ) : (
              <>
                Generate Video
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
      
      {videoUrl && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Your Generated Video
          </h2>
          
          <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              controls
              src={videoUrl}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="mt-4 flex justify-end">
            <a
              href={videoUrl}
              download="generated-video.mp4"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Download Video
            </a>
          </div>
        </div>
      )}
      
      <div className="mt-12 bg-indigo-50 dark:bg-gray-700 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
          Tips for Better Results
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Be specific about scenes, actions, and settings</li>
          <li>Mention style, mood, and lighting for more control</li>
          <li>Keep your descriptions clear and concise</li>
          <li>Specify camera movements if needed (zoom, pan, etc.)</li>
          <li>For best results, premium users get higher quality and longer videos</li>
        </ul>
      </div>
    </div>
  );
} 