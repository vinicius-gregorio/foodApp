import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchPage from  './src/pages/SearchPage' ;
import ResultsPage from './src/pages/ResultsPage';

const navigator = createStackNavigator({
  Search: SearchPage,
  Results: ResultsPage

}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant Finder'
  }
});

export default createAppContainer(navigator);