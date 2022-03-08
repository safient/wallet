import { useEffect } from 'react';

export const useClipBoardTimer = (copied: boolean, setCopied: any) => {
  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => {
      clearTimeout();
    };
  }, [copied]);
};
