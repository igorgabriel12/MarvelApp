import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, ImageBackground, ActivityIndicator} from 'react-native';

import _ from 'lodash';
import api from '@services/api';
import colors from '@utils/colors';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setFavoriteHero} from '../../reducers/modules/user/actions';

import Telescope from '@assets/SVG/telescope';
import ComicCard from '@components/ComicCard';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Body,
  Header,
  Footer,
  Container,
  ContainerSVG,
  LabelHeroName,
  EmptyListLabel,
  ComicsTitleLabel,
  EmptyListTitleLabel,
  ContainerEmptyList,
  LabelHeroDescription,
  HeaderButtonContainer,
} from './styles';

const MyFavoriteHeroeDetails = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [totalOfComics, setTotaoOfComics] = useState(0);

  const favoriteHero = useSelector(({user}) => user.favoriteHero);
  const {id, name, imagePath, description} = favoriteHero;

  const removeFavorite = useCallback(() => {
    dispatch(setFavoriteHero({}));
  }, [dispatch]);

  const getCharactersComics = useCallback(async () => {
    if (!hasMore) return;

    setLoading(true);
    try {
      const queryParams = [];
      if (comics.length > 0) {
        queryParams.push(`?offset=${offset}`);
      }

      const {data} = await api.get(
        `characters/${id}/comics${queryParams.join('&')}`,
      );

      if (data?.data?.results?.length > 0) {
        if (totalOfComics === 0) setTotaoOfComics(data?.data?.total);

        setOffset(offset + data?.data?.results?.length);
        setComics([...comics, ...data?.data?.results]);
      } else {
        setHasMore(false);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [id, offset, hasMore]);

  useEffect(() => {
    getCharactersComics();
  }, [favoriteHero]);

  useEffect(() => {
    if (_.isEmpty(favoriteHero)) {
      if (route && route?.params?.goBack) {
        navigation.goBack();
      }
    }
  }, [favoriteHero]);

  return (
    <Container headerPadding={route && route?.params?.goBack}>
      <ImageBackground source={imagePath} style={{flex: 1}}>
        {!_.isEmpty(favoriteHero) && (
          <>
            <Body>
              <Header>
                <HeaderButtonContainer onPress={removeFavorite}>
                  <Icon
                    size={30}
                    name={'heart'}
                    color={colors.primary.darkRed}
                  />
                </HeaderButtonContainer>
              </Header>

              <LabelHeroName>{name}</LabelHeroName>
              {/* <LabelHeroDescription>{description}</LabelHeroDescription> */}
            </Body>

            <Footer>
              <ComicsTitleLabel>({totalOfComics}) Comics</ComicsTitleLabel>
              <FlatList
                horizontal
                data={comics}
                initialNumToRender={10}
                onEndReachedThreshold={0.01}
                onEndReached={getCharactersComics}
                ListFooterComponent={() =>
                  loading ? (
                    <ContainerEmptyList style={{width: 150}}>
                      <ActivityIndicator
                        color={colors.primary.darkRed}
                        size={40}
                      />
                    </ContainerEmptyList>
                  ) : (
                    <ContainerEmptyList style={{width: 50}} />
                  )
                }
                ListEmptyComponent={() => (
                  <ContainerEmptyList>
                    {loading ? (
                      <ActivityIndicator
                        color={colors.primary.darkRed}
                        size={40}
                      />
                    ) : (
                      <>
                        <ContainerSVG>
                          <Telescope />
                        </ContainerSVG>
                        <EmptyListTitleLabel>
                          Nothing here...
                        </EmptyListTitleLabel>
                        <EmptyListLabel>
                          No comic was found for {name}
                        </EmptyListLabel>
                      </>
                    )}
                  </ContainerEmptyList>
                )}
                keyExtractor={item => String(item.id)}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <ComicCard item={item} />}
              />
            </Footer>
          </>
        )}
      </ImageBackground>
    </Container>
  );
};

export default MyFavoriteHeroeDetails;
