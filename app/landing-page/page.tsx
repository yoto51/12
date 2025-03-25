import Link from 'next/link';
import { 
  Video, 
  Image, 
  FileSearch, 
  Edit, 
  Globe, 
  MessageSquare, 
  Download, 
  Star, 
  MessageCircle, 
  VoiceNetwork, 
  Hash, 
  Mic, 
  Eraser, 
  Subtitles, 
  Feather, 
  FileText, 
  Music, 
  FileCode, 
  Lock
} from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      title: 'AI Video Generator',
      description: 'Generate videos from text prompts using AI.',
      icon: <Video className="h-10 w-10 text-indigo-600" />,
      href: '/video-generator'
    },
    {
      title: 'Meme Finder',
      description: 'Find trending memes based on keywords.',
      icon: <FileSearch className="h-10 w-10 text-indigo-600" />,
      href: '/meme-finder'
    },
    {
      title: 'Meme Editor',
      description: 'Edit memes with text, styles, and filters using AI.',
      icon: <Edit className="h-10 w-10 text-indigo-600" />,
      href: '/meme-editor'
    },
    {
      title: 'Multilingual Support',
      description: 'Generate and edit content in multiple languages.',
      icon: <Globe className="h-10 w-10 text-indigo-600" />,
      href: '/multilingual'
    },
    {
      title: 'AI Caption Generator',
      description: 'Generate captions for videos and images.',
      icon: <MessageSquare className="h-10 w-10 text-indigo-600" />,
      href: '/caption-generator'
    },
    {
      title: 'Auto Downloading',
      description: 'Automatically downloads generated content.',
      icon: <Download className="h-10 w-10 text-indigo-600" />,
      href: '/features'
    },
    {
      title: 'Premium Access',
      description: 'Unlock features via coupon codes.',
      icon: <Star className="h-10 w-10 text-indigo-600" />,
      href: '/pricing'
    },
    {
      title: 'Text-to-Speech',
      description: 'Convert text into AI-generated voiceovers.',
      icon: <MessageCircle className="h-10 w-10 text-indigo-600" />,
      href: '/text-to-speech'
    },
    {
      title: 'AI Image Generator',
      description: 'Generate images from text prompts.',
      icon: <Image className="h-10 w-10 text-indigo-600" />,
      href: '/image-generator'
    },
    {
      title: 'AI Chatbot Support',
      description: 'Chatbot to assist users.',
      icon: <MessageSquare className="h-10 w-10 text-indigo-600" />,
      href: '/support'
    },
    {
      title: 'Auto Hashtag Generator',
      description: 'Suggests hashtags based on media.',
      icon: <Hash className="h-10 w-10 text-indigo-600" />,
      href: '/hashtag-generator'
    },
    {
      title: 'AI Voice Cloning',
      description: 'Mimic voice for content.',
      icon: <VoiceNetwork className="h-10 w-10 text-indigo-600" />,
      href: '/voice-cloning'
    },
    {
      title: 'AI Background Remover',
      description: 'Remove image backgrounds instantly.',
      icon: <Eraser className="h-10 w-10 text-indigo-600" />,
      href: '/background-remover'
    },
    {
      title: 'AI Subtitle Generator',
      description: 'Auto-generate subtitles for videos.',
      icon: <Subtitles className="h-10 w-10 text-indigo-600" />,
      href: '/subtitle-generator'
    },
    {
      title: 'AI Logo Generator',
      description: 'Create brand logos using AI.',
      icon: <Feather className="h-10 w-10 text-indigo-600" />,
      href: '/logo-generator'
    },
    {
      title: 'AI Resume Builder',
      description: 'Generate professional resumes.',
      icon: <FileText className="h-10 w-10 text-indigo-600" />,
      href: '/resume-builder'
    },
    {
      title: 'AI Music Generator',
      description: 'Create music based on mood/style.',
      icon: <Music className="h-10 w-10 text-indigo-600" />,
      href: '/music-generator'
    },
    {
      title: 'Error Fixing Program',
      description: 'Automatically detects and fixes errors in uploaded code.',
      icon: <FileCode className="h-10 w-10 text-indigo-600" />,
      href: '/error-fixer'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-indigo-100 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              AI-Powered Tools
            </span>
            <br />
            <span>for Content Creators</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Transform your content creation with our suite of powerful AI tools. Generate videos, images, memes, and more with just a few clicks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/video-generator" 
              className="px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              Try Video Generator
            </Link>
            <Link 
              href="/pricing" 
              className="px-8 py-3 text-lg font-medium text-indigo-600 bg-white border border-indigo-600 rounded-lg hover:bg-indigo-50 dark:bg-gray-800 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-gray-700"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link key={index} href={feature.href}>
                <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md transition-shadow duration-300 h-full flex flex-col bg-white dark:bg-gray-900">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 flex-grow">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Premium Features */}
      <section className="py-20 bg-indigo-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Premium Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Unlock all the premium features with our subscription plans. Get unlimited access to all tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3 Months</h3>
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">$25</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Lock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">All AI Tools Access</span>
                </li>
                <li className="flex items-center">
                  <Lock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Priority Processing</span>
                </li>
                <li className="flex items-center">
                  <Lock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Ad-Free Experience</span>
                </li>
              </ul>
              <Link 
                href="/pricing" 
                className="block w-full py-3 text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                Get Started
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border-2 border-indigo-600 dark:border-indigo-500 relative">
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                MOST POPULAR
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6 Months</h3>
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">$50</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Lock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">All AI Tools Access</span>
                </li>
                <li className="flex items-center">
                  <Lock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Priority Processing</span>
                </li>
                <li className="flex items-center">
                  <Lock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Ad-Free Experience</span>
                </li>
                <li className="flex items-center">
                  <Lock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Premium Support</span>
                </li>
              </ul>
              <Link 
                href="/pricing" 
                className="block w-full py-3 text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                Get Started
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Lifetime</h3>
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">$99</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Lock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">All AI Tools Access</span>
                </li>
                <li className="flex items-center">
                  <Lock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Priority Processing</span>
                </li>
                <li className="flex items-center">
                  <Lock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Ad-Free Experience</span>
                </li>
                <li className="flex items-center">
                  <Lock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Premium Support</span>
                </li>
                <li className="flex items-center">
                  <Lock className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Future Updates</span>
                </li>
              </ul>
              <Link 
                href="/pricing" 
                className="block w-full py-3 text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Contact us for custom plans or any questions you might have.
          </p>
          <a 
            href="mailto:officialprahant.org@gmail.com" 
            className="inline-block px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
} 