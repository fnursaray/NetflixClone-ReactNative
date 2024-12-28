import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {MOVIEDETAIL} from '../../utils/routes';
import {IMAGE_BASE_URL} from '../../service/url';
import {height, width} from '../../utils/constants';

const PopularItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(MOVIEDETAIL, {movieId: item.id})}
      style={styles.container}>
      <Image
        source={{uri: IMAGE_BASE_URL + item?.poster_path}}
        style={{
          width: width * 0.8,
          height: height * 0.2,
          borderRadius: 5,
          resizeMode: 'cover',
          marginBottom: 20,
        }}
      />
    </Pressable>
  );
};

export default PopularItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
  },
});
