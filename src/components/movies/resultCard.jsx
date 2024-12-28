import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {ThemeColors} from '../../theme/themeColor';
import {height, width} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {IMAGE_BASE_URL} from '../../service/url';
import {MOVIEDETAIL} from '../../utils/routes';

const ResultCard = ({movieId, posterPath, title, info}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(MOVIEDETAIL, {movieId})}
      style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.img}
          resizeMode="cover"
          source={{uri: `${IMAGE_BASE_URL}${posterPath}`}}
        />
        <Text style={styles.text} numberOfLines={3}>
          {title}
          {info && <Text style={styles.info}> &bull; Movie</Text>}
        </Text>
      </View>
    </Pressable>
  );
};

export default ResultCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 0.5,
    height: height * 0.1,
    borderColor: ThemeColors.GRAY,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
    borderRadius: 8,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    width: '85%',
  },
  img: {
    width: width * 0.2,
    height: height * 0.09,
    borderRadius: 8,
    resizeMode: 'contain',
    marginRight: 7,
  },
  text: {
    color: ThemeColors.WHITE,
    fontSize: 18,
    fontWeight: '700',
    flex: 1,
  },
  info: {fontSize: 12, color: ThemeColors.GRAY},
});
