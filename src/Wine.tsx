import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  Sequence,
  useVideoConfig,
} from 'remotion';
import s from './Wine.module.css';
import { WineCarousel } from './Wine/WineCarousel';
import { PriceBlock } from './Wine/PriceBlock/PriceBlock';
import { WineNum } from './Wine/WineNum/WineNum';
import { z } from 'zod';

export const WineSchema = z.object({
  titleText: z.string(),
  subTitleText: z.string(),
  imageNames: z.array(z.string()),
  backgroundColor: z.string(),
  prices: z.array(z.number()),
});

export const Wine: React.FC<z.infer<typeof WineSchema>> = ({
  titleText,
  subTitleText,
  imageNames,
  backgroundColor,
  prices,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const cycleFrames = durationInFrames / 3;

  const index = Math.floor(frame / cycleFrames) % 3;

  return (
    <AbsoluteFill
      style={{
        background: backgroundColor,
        overflow: 'hidden',
      }}
    >
      <div>
        <h2 className={s.title}>{titleText}</h2>
        <p className={s.sub__title}>{subTitleText}</p>
        <WineNum index={index} />
        <PriceBlock index={index} prices={prices} />
      </div>
      <Sequence from={0} durationInFrames={durationInFrames}>
        <WineCarousel imageNames={imageNames} />
      </Sequence>
    </AbsoluteFill>
  );
};
