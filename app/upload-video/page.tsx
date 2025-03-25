'use client';

import { useState, useRef } from 'react';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';

export default function VideoUpload() {
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    const fileInput = fileInputRef.current;
    
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      setError('Please select a video file');
      return;
    }
    
    const file = fileInput.files[0];
    
    if (!file.type.startsWith('video/')) {
      setError('Please select a valid video file');
      return;
    }
    
    setUploading(true);
    setError('');
    
    // Create FormData
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      // In a real implementation, this would be a fetch POST to your API
      // For this example, we'll simulate success after a delay
      console.log('Uploading file:', file.name);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, you would save the file to your server here
      const saveFile = async () => {
        // This is a mock function - in a real app you would save the file
        // to your server's filesystem or cloud storage
        console.log('File would be saved as: /public/videos/tanjiro-circle-of-fire.1920x1080.mp4');
        
        // Mock success response
        return {
          success: true,
          filePath: '/videos/tanjiro-circle-of-fire.1920x1080.mp4'
        };
      };
      
      const result = await saveFile();
      
      if (result.success) {
        setSuccess(true);
        // Reset form
        if (fileInput) {
          fileInput.value = '';
        }
      } else {
        throw new Error('Failed to save file');
      }
    } catch (err) {
      console.error('Upload error:', err);
      setError('Failed to upload video. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Upload Background Video
      </h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <form onSubmit={handleUpload} className="space-y-6">
          <div>
            <label 
              htmlFor="video" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Select the Tanjiro video file
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600 dark:text-gray-400">
                  <label
                    htmlFor="video-upload"
                    className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 focus-within:outline-none"
                  >
                    <span>Upload a file</span>
                    <input
                      id="video-upload"
                      name="video-upload"
                      type="file"
                      accept="video/mp4,video/x-m4v,video/*"
                      className="sr-only"
                      ref={fileInputRef}
                      onChange={() => {
                        setError('');
                        setSuccess(false);
                      }}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  MP4, WebM, or OGG up to 100MB
                </p>
              </div>
            </div>
          </div>
          
          {error && (
            <div className="flex items-center text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              {error}
            </div>
          )}
          
          {success && (
            <div className="flex items-center text-green-500 text-sm">
              <CheckCircle className="h-4 w-4 mr-1" />
              Video uploaded successfully. Reload the homepage to see it.
            </div>
          )}
          
          <div>
            <button
              type="submit"
              disabled={uploading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {uploading ? 'Uploading...' : 'Upload Video'}
            </button>
          </div>
        </form>
      </div>
      
      <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 text-sm text-yellow-800 dark:text-yellow-200">
        <p>
          <span className="font-bold">Note:</span> In this demo, the video won't actually be saved to the server.
          You'll need to manually add the video file to your '/public/videos/' directory named 'tanjiro-circle-of-fire.1920x1080.mp4'.
        </p>
      </div>
      
      <div className="mt-6 text-center">
        <a href="/" className="text-indigo-600 dark:text-indigo-400 hover:underline">
          Return to Homepage
        </a>
      </div>
    </div>
  );
} 