import React, {useMemo, useEffect, useState} from 'react';
import {Image, Dimensions} from 'react-native';

import colors from '@utils/colors';
import {useDispatch} from 'react-redux';
import LottieView from 'lottie-react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Ionicons';
import {SharedElement} from 'react-navigation-shared-element';
import {setFavoriteHero} from '../../reducers/modules/user/actions';

import {
  Card,
  Avatar,
  Container,
  LabelName,
  FavoriteButton,
  ContainerLabels,
  LabelDesciption,
  FavoriteButtonContainer,
} from './styles';

const CharacterCard = ({
  index,
  character,
  navigation,
  favoriteHero,
  favoriteHeroTemp,
  setFavoriteHeroTemp,
}) => {
  const dispatch = useDispatch();
  const [cardHeight, setCardHeight] = useState(null);
  const [imageDimensions, setImageDimensions] = useState(null);

  const {thumbnail, name, description, id} = character;

  const cardWidth = useMemo(
    () => (Dimensions.get('window').width - 40) / 2,
    [],
  );

  const imagePath = useMemo(
    () => ({
      uri: `${thumbnail.path}.${thumbnail.extension}`,
    }),
    [thumbnail],
  );

  useEffect(() => {
    function getImageSize() {
      Image.getSize(`${thumbnail.path}.${thumbnail.extension}`, (w, h) => {
        setCardHeight(h - w > 0 || h - w < 0 ? (h / w) * cardWidth : cardWidth);
        setImageDimensions({imageHeight: h, imageWidth: w});
      });
    }
    getImageSize();
  }, [thumbnail]);

  return (
    <>
      {cardHeight && (
        <Container
          onPress={() =>
            navigation.push('HeroeDetails', {
              id,
              index,
              imagePath,
              character,
              imageDimensions,
            })
          }>
          <Card cardWidth={cardWidth} cardHeight={cardHeight}>
            <FavoriteButtonContainer>
              <SharedElement id={`item.${id}.icon`}>
                <FavoriteButton
                  onPress={() =>
                    setFavoriteHeroTemp({
                      ...character,
                      imagePath,
                      imageDimensions,
                    })
                  }>
                  <Icon
                    size={26}
                    color={colors.primary.darkRed}
                    name={
                      (favoriteHero.id === id &&
                        favoriteHero.id === favoriteHeroTemp.id) ||
                      favoriteHeroTemp.id === id
                        ? 'heart'
                        : 'heart-outline'
                    }
                  />
                </FavoriteButton>
              </SharedElement>
            </FavoriteButtonContainer>
            <SharedElement id={`item.${id}.image`}>
              <Avatar
                source={imagePath}
                imageWidth={cardWidth}
                imageHeight={cardHeight}
                resizeMode={FastImage.resizeMode.contain}
              />
            </SharedElement>

            {favoriteHeroTemp.id === id && (
              <LottieView
                autoPlay
                loop={false}
                source={require('@assets/animations/like.json')}
                onAnimationFinish={() =>
                  dispatch(setFavoriteHero(favoriteHeroTemp))
                }
              />
            )}
          </Card>

          <ContainerLabels>
            <LabelName>{name}</LabelName>
            {description !== '' && (
              <LabelDesciption>{description}</LabelDesciption>
            )}
          </ContainerLabels>
        </Container>
      )}
    </>
  );
};

export default CharacterCard;
