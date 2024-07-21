import { Img, staticFile } from 'remotion';

export const WineBottle: React.FC<{
  offset: number;
  scale: number;
  img: string;
  zIndex: number;
  index: number;
}> = ({ offset, scale, img, zIndex, index }) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: img === 'wine-2-p.png' ? '0px' : '-100px',
        left: '50%',
        transform: `translateX(${offset}px) scale(${scale}) translateX(-50%)`,
        zIndex: zIndex,
      }}
    >
      <Img src={staticFile(img)} />
    </div>
  );
};
