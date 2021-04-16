import React, {useCallback, memo, useState, useEffect} from 'react';
import {ScrollView, Dimensions, ActivityIndicator} from 'react-native';

import _ from 'lodash';
import colors from '@utils/colors';

import {useSelector} from 'react-redux';
import CharacterCard from '../CharacterCard';
import {useNavigation} from '@react-navigation/native';
import {Container, LeftColumn, RightColumn, LoadContainer} from './styles';

const Masonry = ({data, offset, setOffset, loading}) => {
  const navigation = useNavigation();
  const favoriteHero = useSelector(({user}) => user.favoriteHero);

  const [favoriteHeroTemp, setFavoriteHeroTemp] = useState(favoriteHero || {});

  const vpHeight = Dimensions.get('window').height - 100;
  const [scrollViewHeight, setScrollViewHeight] = useState(0);

  const handleScroll = useCallback(
    e => {
      const {y} = e.nativeEvent.contentOffset;

      const lastScreenOffset = scrollViewHeight - vpHeight;

      if (y >= lastScreenOffset) {
        setOffset(offset + 20);
      }
    },
    [scrollViewHeight, vpHeight, offset],
  );

  useEffect(() => {
    if (_.isEmpty(favoriteHero)) {
      setFavoriteHeroTemp({});
    }
  }, [favoriteHero]);

  return (
    <ScrollView
      onScroll={handleScroll}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}
      onContentSizeChange={(width, height) => setScrollViewHeight(height)}>
      <Container>
        <LeftColumn>
          {data.map(
            (item, index) =>
              index === 0 ||
              (index % 2 === 0 && (
                <CharacterCard
                  key={index}
                  index={index}
                  character={item}
                  navigation={navigation}
                  favoriteHero={favoriteHero}
                  favoriteHeroTemp={favoriteHeroTemp}
                  setFavoriteHeroTemp={setFavoriteHeroTemp}
                />
              )),
          )}
        </LeftColumn>
        <RightColumn>
          {data.map(
            (item, index) =>
              index !== 0 &&
              index % 2 !== 0 && (
                <CharacterCard
                  key={index}
                  index={index}
                  character={item}
                  navigation={navigation}
                  favoriteHero={favoriteHero}
                  favoriteHeroTemp={favoriteHeroTemp}
                  setFavoriteHeroTemp={setFavoriteHeroTemp}
                />
              ),
          )}
        </RightColumn>
      </Container>
      {loading && (
        <LoadContainer>
          <ActivityIndicator size={30} color={colors.common.white} />
        </LoadContainer>
      )}
    </ScrollView>
  );
};

export default memo(Masonry);
