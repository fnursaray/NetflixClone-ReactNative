import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import NewHot from '../screens/newHot';
import Search from '../screens/search';
import Downloads from '../screens/downloads';
import {DOWNLOADS, HOME, NEWHOT, SEARCH} from '../utils/routes';
import {ThemeColors} from '../theme/themeColor';
import TabBarIcon from '../components/router/tabIcon';
import {CustomHeader} from '../components/router/customHeader';

const Tab = createBottomTabNavigator();

function TabNavigator({index}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerStyle: {
          backgroundColor: ThemeColors.BLACK,
        },
        headerTintColor: ThemeColors.WHITE,
        tabBarStyle: {
          backgroundColor: ThemeColors.BLACK,
        },
        tabBarActiveTintColor: ThemeColors.WHITE,
        tabBarInactiveTintColor: ThemeColors.WHITE,

        tabBarIcon: ({focused, color, size}) => (
          <TabBarIcon
            focused={focused}
            color={color}
            size={size}
            route={route}
          />
        ),
        header: props => <CustomHeader {...props} />,
      })}>
      <Tab.Screen name={HOME} component={Home} initialParams={{index}} />
      <Tab.Screen name={NEWHOT} component={NewHot} />
      <Tab.Screen name={SEARCH} component={Search} />
      <Tab.Screen name={DOWNLOADS} component={Downloads} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
