import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {ThemeColors} from '../../theme/themeColor';
import {getRandomColor} from '../../utils/functions';
import {width} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {TAB} from '../../utils/routes';

const WatchListItem = ({item, index}) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.replace(TAB)} style={styles.container}>
      <View
        style={{
          width: width * 0.35,
          height: width * 0.35,
          backgroundColor: getRandomColor(index),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/image/smile.png')}
          style={{
            width: width * 0.25,
            height: width * 0.25,
            resizeMode: 'contain',
          }}
        />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  );
};

export default WatchListItem;

const styles = StyleSheet.create({
  container: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    color: ThemeColors.WHITE,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
});
