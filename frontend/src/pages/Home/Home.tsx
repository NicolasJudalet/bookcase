import React from 'react';
import ReadingTimeline from '../../components/ReadingTimeline';

const Home: React.FunctionComponent = () => (
  <div className="h-screen w-screen flex flex-col justify-start items-center pt-4 px-4">
    <h1 className="w-full text-4xl text-blue-400 font-sans mb-4">
      <span aria-label="book" className="mr-2">
        📘
      </span>
      Le voyageur immobile
    </h1>
    <ReadingTimeline />
  </div>
);

export default Home;
