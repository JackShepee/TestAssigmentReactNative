import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PhotoList from './screens/PhotoList';
import Photo from './screens/Photo';

const AppNavigator = createStackNavigator(
  {
    PhotoList: {
      screen: PhotoList,
      navigationOptions: {
        title: 'Gallery',
      },
    },
    Photo: {
      screen: Photo,
      navigationOptions: {
        title: 'Photo',
      },
    },
  },
  {
    initialRouteName: 'PhotoList',
  },
);

export default createAppContainer(AppNavigator);
