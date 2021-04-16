import React, {useMemo} from 'react';
import {Card, ComicCover, ComicLabel, ComicCardLabels} from './styles';

const ComicCard = ({item}) => {
  const {thumbnail, issueNumber, title, prices} = item;
  const imagePath = useMemo(
    () => ({
      uri: `${thumbnail.path}.${thumbnail.extension}`,
    }),
    [thumbnail],
  );

  return (
    <Card>
      <ComicCover source={imagePath} />
      <ComicCardLabels>
        <ComicLabel>N: {issueNumber}</ComicLabel>
        <ComicLabel style={{fontWeight: 'bold'}}>{title}</ComicLabel>
        {prices.map(({type, price}, index) => (
          <ComicLabel key={index}>{`${
            type === 'printPrice' ? 'Print' : 'Digital'
          } price: $${price}`}</ComicLabel>
        ))}
      </ComicCardLabels>
    </Card>
  );
};

export default ComicCard;
