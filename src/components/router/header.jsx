import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme/themeColor';

const Header = () => {
  return (
    <View style={{backgroundColor: ThemeColors.BLACK}}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
