import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import { WineBottle } from './WineBottle';

import { z } from 'zod';

export const WineCarouselSchema = z.object({
  imageNames: z.array(z.string()),
});

export const WineCarousel: React.FC<z.infer<typeof WineCarouselSchema>> = ({
  imageNames,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const cycleFrames = durationInFrames / 3;

  const offsets = [-540, 70, 520];
  const scales = [1, 1.4, 1];

  const progress = (frame % cycleFrames) / cycleFrames;

  const easeInOut = (t: number): number => {
    return t < 0.5 ? 4 * Math.pow(t, 3) : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const interpolateValue = (start: number, end: number) => {
    const easedProgress = easeInOut(progress);
    return start + (end - start) * easedProgress;
  };

  const index = Math.floor(frame / cycleFrames) % 3;
  const prevIndex = (index + 2) % 3;
  const nextIndex = (index + 1) % 3;

  const offsetsArray = [offsets[prevIndex], offsets[index], offsets[nextIndex]];
  const scalesArray = [scales[prevIndex], scales[index], scales[nextIndex]];

  const getZIndex = (i: number) => {
    if (i === 1) return 3;
    if (i === 2) return 1;
    if (i == 0) return 2;
    return 1;
  };

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {offsetsArray.map((offset, i) => (
        <WineBottle
          key={i}
          offset={interpolateValue(offsetsArray[i], offsetsArray[(i + 1) % 3])}
          scale={interpolateValue(scalesArray[i], scalesArray[(i + 1) % 3])}
          img={imageNames[i]}
          index={(prevIndex + i) % 3}
          zIndex={getZIndex((prevIndex + i) % 3)}
        />
      ))}
    </AbsoluteFill>
  );
};
