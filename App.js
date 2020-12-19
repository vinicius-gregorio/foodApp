import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchPage from  './src/pages/SearchPage' ;

const navigator = createStackNavigator({
  Search: SearchPage,

}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant Finder'
  }
});

export default createAppContainer(navigator);