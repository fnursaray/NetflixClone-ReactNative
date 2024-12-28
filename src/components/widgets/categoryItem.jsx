import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme/themeColor';

const CategoryItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  name: {
    color: ThemeColors.WHITE,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
