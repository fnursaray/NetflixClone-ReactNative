import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/getStarted';
import {
  ADDNEWLIST,
  GETSTARTED,
  MOVIEDETAIL,
  SIGNIN,
  TAB,
  WATCHLIST,
} from '../utils/routes';
import SignIn from '../screens/signIn';
import WatchList from '../screens/watchList';
import {ThemeColors} from '../theme/themeColor';
import {Edit2} from 'iconsax-react-native';
import AddNewList from '../screens/watchList/addNewList';
import TabNavigator from './tabNavigation';
import MovieDetail from '../screens/movies/movieDetail';
import {Image} from 'react-native';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerTintColor: ThemeColors.WHITE,
        headerStyle: {
          backgroundColor: ThemeColors.BLACK,
        },
      })}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={GETSTARTED}
        component={GetStarted}
      />
      <Stack.Screen name={SIGNIN} component={SignIn} />

      <Stack.Screen
        options={({navigation}) => ({
          headerTitle: () => (
            <Image
              source={require('../assets/image/logo.png')}
              style={{
                width: 130,
                height: 130,
                resizeMode: 'contain',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: -40,
              }}
            />
          ),
          headerRight: () => (
            <Edit2
              onPress={() => navigation.navigate(ADDNEWLIST)}
              size="25"
              color={ThemeColors.WHITE}
            />
          ),
        })}
        name={WATCHLIST}
        component={WatchList}
      />
      <Stack.Screen
        options={() => ({
          headerTitle: () => '',
          headerLeft: () => (
            <Image
              source={require('../assets/image/logo.png')}
              style={{
                width: 130,
                height: 130,
                resizeMode: 'contain',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: -40,
              }}
            />
          ),
        })}
        name={ADDNEWLIST}
        component={AddNewList}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TAB}
        component={TabNavigator}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={MOVIEDETAIL}
        component={MovieDetail}
      />
    </Stack.Navigator>
  );
}

export default RootNavigation;
