import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Dimensions, ScrollView} from 'react-native';

import api from '@services/api';
import colors from '@utils/colors';
import {useSelector, useDispatch} from 'react-redux';
import {setFavoriteHero} from '../../reducers/modules/user/actions';

import Masonry from '@components/Masonry';
import Icon from 'react-native-vector-icons/Ionicons';
import {SharedElement} from 'react-navigation-shared-element';

import {
  Card,
  Image,
  Container,
  LabelName,
  CardBottom,
  DetailItem,
  ContainerImage,
  DetailItemLabel,
  ContainerDetails,
  LabelDescription,
  DetailsTitleLabel,
  DetailsSubtitleLabel,
  TranslucentContainer,
  HeaderButtonContainer,
  DescriptionContainerCardHeader,
} from './styles';

const HeroeDetails = ({navigation, route}) => {
  const dispatch = useDispatch();

  const {id, imagePath, imageDimensions, character} = route?.params;
  const {name, description, events, series, stories, comics} = character;

  const favoriteHero = useSelector(({user}) => user.favoriteHero);

  const [loading, setLoading] = useState(false);
  const [charactersRandomList, setCharactersRandomList] = useState([]);

  const screenWidth = useMemo(() => Dimensions.get('window').width, []);

  const offset = useMemo(() => parseInt(Math.random() * (1400 - 123) + 123), [
    charactersRandomList,
  ]);

  const getImageHeight = useMemo(() => {
    const {imageHeight, imageWidth} = imageDimensions;
    return imageHeight - imageWidth > 0 || imageHeight - imageWidth < 0
      ? (imageHeight / imageWidth) * screenWidth
      : screenWidth;
  }, [imageDimensions, screenWidth]);

  const getCharacters = useCallback(async () => {
    setLoading(true);
    try {
      const {data} = await api.get(`characters?offset=${offset}`);
      setCharactersRandomList(data?.data?.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [offset, charactersRandomList, loading]);

  useEffect(() => {
    getCharacters();
  }, [character]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <Container>
        <Card>
          <TranslucentContainer>
            <SharedElement id={`item.${id}.icon`}>
              <HeaderButtonContainer
                onPress={() => {
                  dispatch(
                    setFavoriteHero({
                      ...character,
                      imagePath,
                      imageDimensions,
                    }),
                  );
                  navigation.navigate('MyFavoriteHeroeDetails', {
                    id,
                    goBack: true,
                  });
                }}>
                <Icon
                  size={30}
                  color={colors.primary.darkRed}
                  name={favoriteHero.id === id ? 'heart' : 'heart-outline'}
                />
              </HeaderButtonContainer>
            </SharedElement>
          </TranslucentContainer>
          <SharedElement id={`item.${id}.image`}>
            <ContainerImage height={getImageHeight}>
              <Image
                source={imagePath}
                resizeMode={'contain'}
                height={getImageHeight}
              />
            </ContainerImage>
          </SharedElement>
          <DescriptionContainerCardHeader>
            <LabelName>{name}</LabelName>

            {description !== '' && (
              <LabelDescription>{description}</LabelDescription>
            )}

            <DetailsTitleLabel>Details:</DetailsTitleLabel>
            <ContainerDetails>
              <DetailItem>
                <Icon
                  size={22}
                  name={'newspaper'}
                  color={colors.common.white}
                />
                <DetailItemLabel>({comics.available}) Comics</DetailItemLabel>
              </DetailItem>
              <DetailItem>
                <Icon size={22} name={'book'} color={colors.common.white} />
                <DetailItemLabel>({stories.available}) Stories</DetailItemLabel>
              </DetailItem>
              <DetailItem>
                <Icon size={22} name={'calendar'} color={colors.common.white} />
                <DetailItemLabel>({events.available}) Events</DetailItemLabel>
              </DetailItem>
              <DetailItem>
                <Icon size={22} name={'tv'} color={colors.common.white} />
                <DetailItemLabel>({series.available}) Series</DetailItemLabel>
              </DetailItem>
            </ContainerDetails>
            <DetailsSubtitleLabel>
              *Set {name} as you favorite hero to see his comics.
            </DetailsSubtitleLabel>
          </DescriptionContainerCardHeader>
        </Card>
        <CardBottom>
          <Masonry
            offset={offset}
            loading={loading}
            setOffset={() => false}
            data={charactersRandomList}
          />
        </CardBottom>
      </Container>
    </ScrollView>
  );
};

HeroeDetails.sharedElements = route => {
  const {id} = route.params;
  return [
    {
      resize: 'clip',
      animation: 'move',
      id: `item.${id}.image`,
    },
    {
      resize: 'clip',
      animation: 'fade',
      id: `item.${id}.icon`,
    },
    // {
    //   resize: 'clip',
    //   animation: 'fade',
    //   id: `item.${id}.name`,
    // },
  ];
};

export default HeroeDetails;
