import {StyleSheet} from 'react-native';
import React from 'react';
import {DOWNLOADS, HOME, NEWHOT, SEARCH} from '../../utils/routes';
import {
  ArrowCircleDown2,
  Home2,
  MessageQuestion,
  SearchNormal1,
  VideoPlay,
} from 'iconsax-react-native';

const TabBarIcon = ({route, color, size, focused}) => {
  switch (route.name) {
    case HOME:
      return (
        <Home2
          color={color}
          size={size}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case NEWHOT:
      return (
        <VideoPlay
          color={color}
          size={size}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case SEARCH:
      return (
        <SearchNormal1
          color={color}
          size={size}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case DOWNLOADS:
      return (
        <ArrowCircleDown2
          color={color}
          size={size}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );

    default:
      <MessageQuestion />;
  }
};

export default TabBarIcon;

const styles = StyleSheet.create({});
