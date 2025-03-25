import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface LandingPageLayoutProps {
  children: ReactNode;
}

export default function LandingPageLayout({ children }: LandingPageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Video Background with Fallback */}
      <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 dark:from-gray-900 dark:via-blue-950 dark:to-gray-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-30 dark:opacity-20"
        >
          <source src="/videos/tanjiro-circle-of-fire.1920x1080.mp4" type="video/mp4" />
          {/* Video will not be shown if file is missing, gradient background will be visible instead */}
        </video>
        <div className="absolute inset-0 bg-white/50 dark:bg-gray-950/80 z-10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
} 