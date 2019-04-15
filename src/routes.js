import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './pages/Home/Home';
import Box from './pages/Box/Box';

const Routes = createAppContainer (
  createSwitchNavigator({
    Home,
    Box
  })
);

export default Routes;