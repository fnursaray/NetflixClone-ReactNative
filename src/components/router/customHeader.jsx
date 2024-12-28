import {SearchFavorite1} from 'iconsax-react-native';
import {Image, TouchableOpacity, View} from 'react-native';
import {getRandomColor} from '../../utils/functions';
import {ThemeColors} from '../../theme/themeColor';
import ProfileImage from '../../assets/image/smile.png';
import {useNavigation} from '@react-navigation/native';
import {SEARCH} from '../../utils/routes';

function CustomHeader({index = 0}) {
  const navigation = useNavigation();

  // Header stilleri
  const styles = {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 30,
      backgroundColor: ThemeColors.BLACK,
      height: 100,
    },
    logo: {
      width: 40,
      height: 40,
      resizeMode: 'contain',
      marginTop: 55,
    },
    rightSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      marginTop: 58,
      marginRight: 15,
    },
    profileImage: {
      width: 40,
      height: 40,
      backgroundColor: getRandomColor(index) || ThemeColors.GRAY, // Varsayılan renk
      marginTop: 58,
    },
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/Variant2.png')}
        style={styles.logo}
      />
      <View style={styles.rightSection}>
        <TouchableOpacity onPress={() => navigation.navigate(SEARCH)}>
          <SearchFavorite1
            size={30}
            color={ThemeColors.WHITE}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Image source={ProfileImage} style={styles.profileImage} />
      </View>
    </View>
  );
}

export {CustomHeader};
