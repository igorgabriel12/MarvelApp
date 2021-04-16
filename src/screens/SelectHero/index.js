import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Keyboard} from 'react-native';

import _ from 'lodash';
import api from '@services/api';

import {useDispatch, useSelector} from 'react-redux';
import {removeSpecialCharacteres} from '@utils/format';
import {setCharactersList} from '../../reducers/modules/characters/actions';

import colors from '@utils/colors';
import Masonry from '@components/Masonry';
import TextInput from '@components/TextInput';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Body,
  Headder,
  Container,
  InputStyle,
  TitleSearch,
  SearchButton,
  StyleContainer,
  ResearchContainer,
} from './styles';

const SelectHero = () => {
  const dispatch = useDispatch();
  const searchTextRef = useRef(null);

  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [applyFilter, setApplyFilter] = useState(false);

  const charactersList = useSelector(
    ({characters}) => characters.charactersList,
  );

  const getCharacters = useCallback(async () => {
    setLoading(true);
    try {
      const queryParams = [];
      queryParams.push(`offset=${offset}`);

      if (searchText) {
        queryParams.push(`nameStartsWith=${searchText}`);
      }

      const {data} = await api.get(`characters?${queryParams.join('&')}`);

      dispatch(setCharactersList([...charactersList, ...data?.data?.results]));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [offset, searchText, charactersList, loading]);

  const appltTextFilter = useCallback(
    (clearText = false) => {
      if (searchText !== '') {
        if (clearText) {
          setSearchText('');
        }
        Keyboard.dismiss();
        setOffset(0);
        dispatch(setCharactersList([]));
        setApplyFilter(!applyFilter);
      }
    },
    [applyFilter, searchText],
  );

  useEffect(() => {
    getCharacters();
  }, [applyFilter]);

  useEffect(() => {
    getCharacters();
  }, [offset]);

  return (
    <Container>
      <Headder>
        <TitleSearch>Search for your favorite hero</TitleSearch>
        <ResearchContainer>
          <TextInput
            value={searchText}
            ref={searchTextRef}
            style={InputStyle}
            autoCapitalize="words"
            placeholder={'Ex.: Spider-Man'}
            styleContainer={StyleContainer}
            placeholderTextColor={colors.grey[500]}
            onChangeText={text => setSearchText(removeSpecialCharacteres(text))}
          />

          <SearchButton
            applyFilter={applyFilter}
            onPress={() => appltTextFilter(applyFilter)}>
            <Icon
              size={28}
              name={applyFilter ? 'close-outline' : 'search-outline'}
              color={applyFilter ? colors.common.white : colors.primary.darkRed}
            />
          </SearchButton>
        </ResearchContainer>
      </Headder>

      <Body>
        <Masonry
          offset={offset}
          loading={loading}
          setOffset={setOffset}
          data={charactersList}
        />
      </Body>
    </Container>
  );
};

export default SelectHero;
