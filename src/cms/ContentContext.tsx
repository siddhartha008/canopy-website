import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { defaultContent } from './defaultContent';
import { mergeContent } from './merge';
import type { SiteContent } from './types';

const CACHE_KEY = 'canopy-site-content';

type ContentValue = {
  content: SiteContent;
  setContent: (next: SiteContent) => void;
};

const ContentContext = createContext<ContentValue>({
  content: defaultContent,
  setContent: () => undefined,
});

function readCache(): SiteContent | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return mergeContent(defaultContent, JSON.parse(raw));
  } catch {
    return null;
  }
}

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContentState] = useState<SiteContent>(() => readCache() || defaultContent);

  const setContent = (next: SiteContent) => {
    setContentState(next);
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(next));
    } catch {
      /* cache is optional */
    }
  };

  useEffect(() => {
    let cancelled = false;
    fetch('/api/cms?action=content')
      .then((response) => response.json())
      .then((data) => {
        if (cancelled) return;
        if (data?.content) setContent(mergeContent(defaultContent, data.content));
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  return <ContentContext.Provider value={{ content, setContent }}>{children}</ContentContext.Provider>;
}

export function useSite() {
  return useContext(ContentContext).content;
}

export function useContentState() {
  return useContext(ContentContext);
}
