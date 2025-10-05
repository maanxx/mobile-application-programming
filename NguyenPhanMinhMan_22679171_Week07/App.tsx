

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Starter from './components/Starter';
import BikeLists from './components/BikeLists';
import DetailBikes from './components/DetailBikes'


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BikeLists' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Starter" component={Starter} />
        <Stack.Screen name='BikeLists' component={BikeLists}/>
        <Stack.Screen name='DetailBikes' component={DetailBikes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
