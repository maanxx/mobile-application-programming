import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', margin: 0, padding: 0, width: '100%'}}>
        <Image
          source={require('./assets/vs_blue.png')}
          resizeMode="contain"
          style={{ width: 70, height: 100, marginRight: 10 }}
        />
        <Text style={{flex: 1, paddingTop: 15}}>Dien thoai Vsmart Joy 3 {'\n'}Hang chinh hang{'\n'}Mau: do{'\n'}Cung cap boi Tiki Tradding{'\n'}1.790.000 d</Text>
        
      </View>
      <View style={{ backgroundColor: '#C4C4C4', width: '100%' }}>
        <Text
          style={{
            fontWeight: 'bold',
            paddingLeft: 5,
            paddingTop: 5,
            paddingBottom: 5,
          }}>
          Chon mau ben duoi:
        </Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: '#C5F1FB',
            }}></View>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: '#F30D0D',
              marginTop: 8
            }}></View>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: '#000000',
              marginTop: 8
            }}></View>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: '#234896',
              marginTop: 8
            }}></View>
        </View>
      </View>

      <TouchableOpacity style={styles.btnComplete}>XONG</TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 5,
  },
  btnComplete: {
    backgroundColor: '#1952E294',
    color: '#FFF',
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 0,
    borderRadius: 6,
    padding: 10,
    width: '85%',
    alignItems: 'center',
  },
});
