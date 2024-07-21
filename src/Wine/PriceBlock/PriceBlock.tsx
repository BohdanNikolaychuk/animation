import { useCurrentFrame, useVideoConfig } from 'remotion';
import s from './PriceBlock.module.css';

export const PriceBlock: React.FC<{ index: number }> = ({ index }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const cycleFrames = durationInFrames / 3;

  const cycleFrame = frame % cycleFrames;
  const opacity = Math.min(1, cycleFrame / (cycleFrames / 2));
  const scale = 1 + 0.1 * Math.sin((frame / cycleFrames) * Math.PI * 2);

  return (
    <div className={s.price__block}>
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
        }}
        className={s.price__block_wrap}
      >
        <span className={s.price__currency}>$</span>
        <h2 className={s.price__amount}>{index + 1}.</h2>
        <span className={s.price__cents}>99</span>
      </div>
    </div>
  );
};
