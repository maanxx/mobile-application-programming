import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#E941411A' }}>
        <Image source={require('./assets/bike01.png')} />
      </View>

      <View>
        <Text>Pina Mountain</Text>
        <Text>15% OFF 1 350$</Text>
        <Text>449$</Text>
      </View>
      <Text>Description</Text>

      <View><Text>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text></View>
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
