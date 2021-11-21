import ContentLoader from 'react-content-loader';

import React from 'react';

function PizzaLoadingBlock() {
  return (
    <div>
      <ContentLoader
        speed={2}
        width={315}
        height={460}
        viewBox='0 0 315 460'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'>
        <circle cx='156' cy='123' r='100' />
        <rect x='0' y='256' rx='6' ry='6' width='315' height='26' />
        <rect x='0' y='296' rx='6' ry='6' width='315' height='84' />
        <rect x='0' y='400' rx='6' ry='6' width='90' height='32' />
        <rect x='154' y='393' rx='21' ry='21' width='160' height='43' />
      </ContentLoader>
    </div>
  );
}

export default PizzaLoadingBlock;
