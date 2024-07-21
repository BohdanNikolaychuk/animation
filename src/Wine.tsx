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

export const Wine: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const cycleFrames = durationInFrames / 3;

  const index = Math.floor(frame / cycleFrames) % 3;

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(180deg, #4A0E18 -6.72%, #A72038 50%)',
        overflow: 'hidden',
      }}
    >
      <div>
        <h2 className={s.title}>Top wine</h2>
        <p className={s.sub__title}>Bestsellers</p>
        <WineNum index={index} />
        <PriceBlock index={index} />
      </div>
      <Sequence from={0} durationInFrames={durationInFrames}>
        <WineCarousel />
      </Sequence>
    </AbsoluteFill>
  );
};
