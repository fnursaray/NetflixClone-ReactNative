import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme/themeColor';
import Button from '../../components/ui/button';
import {WATCHLIST} from '../../utils/routes';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 5}}>
        <Image
          source={require('../../assets/image/image1.png')}
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '15%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            padding: 5,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 28,
              color: ThemeColors.WHITE,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Unlimited entertainment, one low price.
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: ThemeColors.WHITE,
              textAlign: 'center',
              fontWeight: '500',
            }}>
            All of Netflix, starting at just ₹149.
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: ThemeColors.BLACK,
          justifyContent: 'center',
        }}>
        <Button
          onPress={() => navigation.navigate(WATCHLIST)}
          title="GET STARTED"
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
