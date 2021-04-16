import React, {
  memo,
  useRef,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from 'react';
import {View, StatusBar} from 'react-native';

import _ from 'lodash';
import {useDispatch, useSelector} from 'react-redux';
import {setSkipTutorial} from '../../reducers/modules/user/actions';

import Initial from '../Initial';
import SelectHero from '../SelectHero';
import {Container, styles} from './styles';
import ViewPager from '@react-native-community/viewpager';
import ContainerDefault from '@components/ContainerDefault';
import MyFavoriteHeroeDetails from '../MyFavoriteHeroeDetails';
import OnboardingFooterNavigation from '@components/OnboardingFooterNavigation';

const Onboarding = () => {
  const dispatch = useDispatch();
  const pageRef = useRef(null);
  const {favoriteHero, skippedTheTutorial} = useSelector(({user}) => user);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalOfPages, setTotalOfPages] = useState(0);

  const initialPage = useMemo(
    () => (skippedTheTutorial ? (_.isEmpty(favoriteHero) ? 1 : 2) : 0),
    [favoriteHero, skippedTheTutorial],
  );

  const handlePageChange = useCallback(
    pageNumber => {
      if (currentPage === 0 && pageNumber === 1)
        dispatch(setSkipTutorial(true));

      setCurrentPage(pageNumber);
      pageRef.current.setPage(pageNumber);
    },
    [pageRef, currentPage, setCurrentPage],
  );

  useEffect(() => {
    if (pageRef) {
      setTotalOfPages(pageRef?.current?.props?.children?.length);
    }
  }, [pageRef]);

  useEffect(() => {
    if (skippedTheTutorial) {
      if (_.isEmpty(favoriteHero)) {
        handlePageChange(1);
      } else {
        handlePageChange(2);
      }
    }
  }, [favoriteHero]);

  return (
    <ContainerDefault>
      <Container>
        <ViewPager
          ref={pageRef}
          scrollEnabled={false}
          initialPage={initialPage}
          style={styles.ViewPagerStyle}>
          <View key="1">{!skippedTheTutorial && <Initial />}</View>

          <View key="2">
            <SelectHero />
          </View>

          <View key="3">
            {!_.isEmpty(favoriteHero) && (
              <MyFavoriteHeroeDetails favoriteHero={favoriteHero} />
            )}
          </View>
        </ViewPager>

        {!skippedTheTutorial && (
          <OnboardingFooterNavigation
            rightLabel={'Skip'}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            indexOfFinalPage={totalOfPages - 1}
          />
        )}
      </Container>
    </ContainerDefault>
  );
};

export default memo(Onboarding);
