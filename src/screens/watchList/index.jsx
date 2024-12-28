import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import WatchListItem from '../../components/watchList/watchListItem';
import {ThemeColors} from '../../theme/themeColor';
import {height} from '../../utils/constants';

const WatchList = () => {
  const {watchList} = useSelector(state => state.watchList);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        ListHeaderComponent={
          <Text
            style={{
              color: ThemeColors.WHITE,
              fontSize: 24,
              textAlign: 'center',
              marginVertical: height * 0.05,
            }}>
            Who’s Watching?
          </Text>
        }
        numColumns={'2'}
        data={watchList}
        renderItem={({item, index}) => (
          <WatchListItem item={item} index={index} />
        )}
      />
    </View>
  );
};

export default WatchList;

const styles = StyleSheet.create({});
