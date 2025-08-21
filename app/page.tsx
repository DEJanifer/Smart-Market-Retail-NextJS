'use client';

import { useEffect } from 'react';
import Hero from './components/Hero';
import BreakroomExperience from './components/BreakroomExperience';
import Services from './components/Services';
import About from './components/About';
import BreakroomBuilder from './components/BreakroomBuilder';
import Benefits from './components/Benefits';
import Locations from './components/Locations';
import { useLoadingScreen } from './hooks/useLoadingScreen';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const isLoading = useLoadingScreen(1500);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (!isLoading) {
      document.querySelectorAll('.fade-in').forEach((el) => {
        observer.observe(el);
      });
    }

    return () => {
      document.querySelectorAll('.fade-in').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="flex flex-col min-h-screen text-lavender font-sans">
          <div className="background-wrapper"></div>
          <div className="relative z-10 flex flex-col flex-grow">
            <Header />
            
            <div className="w-full flex-grow grid grid-cols-1 xl:grid-cols-[1fr,minmax(0,1280px),1fr]">
              <aside className="hidden xl:block justify-self-end py-8 pr-8">
                <div className="sticky top-48 w-64 z-40">
                  {/* VisualSitemap will be imported here */}
                </div>
              </aside>

              <main className="py-8 px-4 md:px-6 col-span-1 xl:col-start-2">
                <div>
                  <div id="hero" className="fade-in pt-12 lg:pt-0">
                    <Hero />
                  </div>
                  
                  <div id="breakroom-experience" className="fade-in">
                    <BreakroomExperience />
                  </div>

                  <div id="breakroom-builder" className="fade-in">
                    <BreakroomBuilder />
                  </div>
                  
                  <div id="about" className="fade-in">
                    <About />
                  </div>
                  
                  <div id="benefits" className="fade-in">
                    <Benefits />
                  </div>
                  
                  <div id="solutions" className="fade-in">
                    <Services />
                  </div>
                  
                  <div id="locations" className="fade-in">
                    <Locations />
                  </div>
                </div>
              </main>

              <div className="hidden xl:block"></div>
            </div>
            
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}