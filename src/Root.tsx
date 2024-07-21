import { Composition } from 'remotion';
import { Wine } from './Wine';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Wine"
        component={Wine}
        durationInFrames={150}
        fps={30}
        width={1093}
        height={1942}
      />
    </>
  );
};
