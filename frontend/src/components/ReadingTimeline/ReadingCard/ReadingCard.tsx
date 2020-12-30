import React from 'react';
import {
  MARKER_LEFT_POSITION,
  MARKER_SIZE,
  READING_CARD_HEIGHT,
  READING_CARD_TEXT_LEFT_POSITION,
} from '../constants';

const ReadingCard: React.FunctionComponent = () => (
  <div className={`w-full h-${READING_CARD_HEIGHT} flex items-center p-2`}>
    <span
      className={`absolute left-0 w-${MARKER_LEFT_POSITION} text-sm text-right pr-2 text-gray-800`}
    >
      Dec. 2020
    </span>
    <div
      className={`absolute w-${MARKER_SIZE} h-${MARKER_SIZE} rounded-full left-${MARKER_LEFT_POSITION} border-2 border-gray-800 bg-white`}
    />
    <div className={`absolute left-${READING_CARD_TEXT_LEFT_POSITION} pl-2`}>
      <span className="text-lg font-bold">La voie de l'archer</span>
      <span className="text-sm"> - Paulo Coelho</span>
    </div>
  </div>
);

export default ReadingCard;
