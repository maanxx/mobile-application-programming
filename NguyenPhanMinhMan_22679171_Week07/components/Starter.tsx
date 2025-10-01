import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

    
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'VT323',
            fontWeight: 300,
            width: '80%',
            textAlign: 'center',
            marginTop: 10,
            marginBottom: 13
          }}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#E941411A',
          borderRadius: 35,
          height: '55%',
          justifyContent: 'center',
        }}>
        <Image
          source={require('./assets/bike.png')}
          style={{ width: '85%' }}
          resizeMode="contain"
        />
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center', marginTop: 15 }}>
          POWER BIKE{'\n'}SHOP
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#E94141',
          height: 45,
          borderRadius: 15,
          justifyContent: 'center',
          marginTop: 50,
        }}>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Text style={{ fontFamily: 'VT323', color: '#FFF' }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
