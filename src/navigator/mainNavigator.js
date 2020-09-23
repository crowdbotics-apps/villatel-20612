import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList107037Navigator from '../features/NotificationList107037/navigator';
import Settings107036Navigator from '../features/Settings107036/navigator';
import Settings107028Navigator from '../features/Settings107028/navigator';
import UserProfile107026Navigator from '../features/UserProfile107026/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList107037: { screen: NotificationList107037Navigator },
Settings107036: { screen: Settings107036Navigator },
Settings107028: { screen: Settings107028Navigator },
UserProfile107026: { screen: UserProfile107026Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
