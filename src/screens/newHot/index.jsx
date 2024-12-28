import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import PopularItem from '../../components/movies/popularItem';

const NewHot = ({item}) => {
  const {popularMovies} = useSelector(state => state.movies);

  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={popularMovies}
        renderItem={({item}) => <PopularItem item={item} />}
      />
    </View>
  );
};

export default NewHot;

const styles = StyleSheet.create({});
