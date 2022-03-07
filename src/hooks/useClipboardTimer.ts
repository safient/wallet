import { useEffect } from 'react';

export const useClipBoardTimer = (copied: any, setCopied: any) => {
  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 5000);

    return clearTimeout();
  }, [copied]);
};
