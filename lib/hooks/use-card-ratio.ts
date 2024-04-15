import { useCallback, useState } from 'react';

/**
 * Since the camera container resembles a licence card, the height must always be less than the
 * width (regardless of the resolution of the camera). This is achieved by calculating a ratio
 * that is always >= 1 by dividing by the largest dimension.
 **/

// type CardRationParams = {
//   width: number;
//   height: number;
// };

export function useCardRatio() {
  const [aspectRatio, setAspectRatio] = useState(0);

  const calculateRatio = useCallback((height: number, width: number) => {
    if (height && width) {
      const isLandscape = height <= width;
      const ratio = isLandscape ? width / height : height / width;

      setAspectRatio(ratio);
    }
  }, []);

  return [aspectRatio, calculateRatio];
}
