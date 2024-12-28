import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {defaultScreenStyle} from '../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../store/actions/movieActions';
import CategoryItem from '../components/widgets/categoryItem';

const Categories = () => {
  const {categories} = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <View>
      <View>
        <FlatList
          horizontal
          data={categories}
          renderItem={({item}) => <CategoryItem item={item} />}
        />
      </View>
    </View>
  );
};

export default Categories;
