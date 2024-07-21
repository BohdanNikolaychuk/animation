import { Composition } from 'remotion';
import { Wine, WineSchema } from './Wine';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Wine"
        component={Wine}
        durationInFrames={300}
        fps={30}
        width={1092}
        height={1942}
        schema={WineSchema}
        defaultProps={{
          titleText: 'Top wine',
          subTitleText: 'Bestsellers',
          imageNames: ['wine-3-p.png', 'wine-1-p.png', 'wine-2-p.png'],
          backgroundColor:
            'linear-gradient(180deg, #4A0E18 -6.72%, #A72038 50%)',
          prices: [12, 25, 15],
        }}
      />
    </>
  );
};
