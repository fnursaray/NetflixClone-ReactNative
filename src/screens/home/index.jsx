import {View} from 'react-native';
import React, {useEffect} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch} from 'react-redux';
import {
  getCategories,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../../store/actions/movieActions';
import Categories from '../../widgets/categories';
import Sections from '../../widgets/sections';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTopRatedMovies());
    dispatch(getPopularMovies());
    dispatch(getUpcomingMovies());
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      <Categories />
      <Sections />
    </View>
  );
};

export default Home;
