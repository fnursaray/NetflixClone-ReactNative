import {Image, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {IMAGE_BASE_URL} from '../../service/url';
import {height, width} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {MOVIEDETAIL} from '../../utils/routes';

const MovieItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(MOVIEDETAIL, {movieId: item.id})}
      style={styles.container}>
      <Image
        source={{uri: IMAGE_BASE_URL + item?.poster_path}}
        style={{
          width: width * 0.3,
          height: height * 0.2,
          borderRadius: 5,
          resizeMode: 'cover',
        }}
      />
    </Pressable>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
});
