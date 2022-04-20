import { useEffect } from 'react';

export const useAlertTimer = (state: boolean, setState: any) => {
  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 2000);

    return () => {
      clearTimeout();
    };
  }, [state]);
};
