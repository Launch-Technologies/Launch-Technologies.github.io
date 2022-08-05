import { useEffect, useState } from 'react';

export const useHeightZoom = () => {
  const [height, setHeight] = useState('calc(100vh - 77px)');

  useEffect(() => {
    function heightDependOnZoom() {
      console.log(window.devicePixelRatio);
      const browserZoomLevel = Math.round(window.devicePixelRatio * 100);
      if (browserZoomLevel > 125) {
        setHeight('100vh');
      } else {
        setHeight('calc(100vh - 77px)');
      }
    }

    window.addEventListener('resize', heightDependOnZoom);
    return () => window.removeEventListener('resize', heightDependOnZoom);
  });

  return { height, setHeight };
};
