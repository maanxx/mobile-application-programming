import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    // <View 
    //   style={[
    //     styles.container,
    //     {flexDirection: 'column'}
    //   ]}
    // >
    //     <View style={{flex: 3, backgroundColor: 'powderblue'}}/>
    //     <View style={{flex: 2, backgroundColor: 'red'}}/>
    //     <View style={{flex: 3, backgroundColor: 'yellow'}}/>
    // </View>

    <View style={
      [
        styles.container,
        {flexDirection: 'column'}
      ]
    }>
    <View style={{flex: 1, alignItems: 'center', paddingVertical: 100}}>
      <Image source={require('./image/circle.png')} style= {styles.img}/>
    </View>
    
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={styles.text}>
        GROW
      </Text>
      <Text style={styles.text}>
        YOUR BUSINESS
      </Text> 
    </View>
      
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style= {styles.desc}>
        We will help you to grow your business using  online server
      </Text>  
    </View>
    
    <View style={styles.buttonView}>
      <TouchableOpacity>
        <View style= {styles.button}>
          <Text style= {styles.buttonText}>
              LOGIN
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style= {styles.button}>
          <Text style= {styles.buttonText}>
              SIGN UP
          </Text>
        </View>
      </TouchableOpacity>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00CCF9'
  },
  img: {
    width: '150px',
    height: '150px',
  },
  text: {
    fontWeight: 'bold',
    fontSize: '25px',
  },
  desc: {
    fontWeight: 'bold',
    fontSize: '18px',
    textAlign: 'center',
    paddingHorizontal: 20
  },
  button: {
    width: '150px',
    borderRadius: 10,
    backgroundColor: '#E3C000',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: '25px',
    fontWeight: 'bold',
    padding: 5
  },
  buttonView: {
    flex: 1, 
    paddingHorizontal: 20, 
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  }

});
