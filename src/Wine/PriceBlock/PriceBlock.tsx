import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import s from './PriceBlock.module.css';

export const PriceBlock: React.FC<{ index: number; prices: Array<number> }> = ({
  index,
  prices,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const animationDuration = durationInFrames / 3;
  const startFrame = frame - (frame % animationDuration);

  const opacity = interpolate(
    frame - startFrame,
    [0, animationDuration / 2, animationDuration],
    [0, 1, 0],
    { extrapolateRight: 'clamp' }
  );

  return (
    <div className={s.price__block}>
      <div
        style={{
          opacity,
          transition: `opacity ${animationDuration / 2}ms ease`,
        }}
        className={s.price__block_wrap}
      >
        <span className={s.price__currency}>$</span>
        <h2 className={s.price__amount}>{prices[index]}.</h2>
        <span className={s.price__cents}>99</span>
      </div>
    </div>
  );
};
