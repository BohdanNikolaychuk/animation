import { useCurrentFrame, interpolate, useVideoConfig } from 'remotion';
import s from './WineNum.module.css';

export const WineNum = ({ index }: { index: number }) => {
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
    <h2
      className={s.main__num}
      style={{
        opacity,
        transition: `opacity ${animationDuration / 2}ms ease`,
      }}
    >
      {index + 1}
    </h2>
  );
};
