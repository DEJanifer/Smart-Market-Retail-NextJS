'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface SitemapContextType {
  routes: string[];
  addRoute: (path: string) => void;
}

const SitemapContext = createContext<SitemapContextType | undefined>(undefined);

export const SitemapProvider = ({ children }: { children: ReactNode }) => {
  const [routes, setRoutes] = useState<string[]>([]);

  const addRoute = useCallback((path: string) => {
    setRoutes(prevRoutes => {
      if (prevRoutes.includes(path)) {
        return prevRoutes;
      }
      return [...prevRoutes, path];
    });
  }, []);

  const value = { routes, addRoute };

  return (
    <SitemapContext.Provider value={value}>
      {children}
    </SitemapContext.Provider>
  );
};

export const useSitemap = () => {
  const context = useContext(SitemapContext);
  if (context === undefined) {
    throw new Error('useSitemap must be used within a SitemapProvider');
  }
  return context;
};