import React from 'react';
import ReadingCard from './ReadingCard';
import { LINE_LEFT_POSITION, READING_CARD_HEIGHT } from './constants';

const ReadingTimeline: React.FunctionComponent = () => (
  <div className="w-full h-full">
    <div className="w-full h-full relative">
      <div
        className={`bg-gray-800 w-0.5 absolute top-${
          READING_CARD_HEIGHT / 2
        } bottom-0 left-${LINE_LEFT_POSITION}`}
      />
      <ReadingCard />
      <ReadingCard />
    </div>
  </div>
);

export default ReadingTimeline;
