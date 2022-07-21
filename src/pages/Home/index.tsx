import { sum } from '@/utils';
import React from 'react';

const Home = () => {
  return (
    <div>
      <div>{sum(2, 5)}</div>
    </div>
  );
};

export default Home;
