import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
export default function DetailBikes() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#E941411A', borderRadius: 15 }}>
        <Image resizeMode="contain" source={require('../assets/bike01.png')} />
      </View>

      <View>
        <Text style={{ fontFamily: 'Voltaire', fontSize: 25, marginTop: 15 }}>
          Pina Mountain
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              fontFamily: 'Voltaire',
              color: '#00000096',
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: 20,
            }}>
            15% OFF 1 350$
          </Text>
          <Text
            style={{
              fontFamily: 'Voltaire',
              paddingLeft: 20,
              textDecorationLine: 'line-through',
              fontSize: 20,
              marginTop: 20,
            }}>
            449$
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontFamily: 'Voltaire',
          fontWeight: 'bold',
          fontSize: 20,
          marginTop: 15,
          marginBottom: 15,
        }}>
        Description
      </Text>

      <View>
        <Text
          style={{
            fontFamily: 'Voltaire',
            color: '#00000091',
            width: '100%',
            fontSize: 20,
          }}>
          It is a very important form of writing as we write almost everything
          in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Feather
          name="heart"
          size={35}
          color="black"
          style={{ marginHorizontal: 15, marginVertical: 15 }}
        />
        <View>
          <TouchableOpacity
            style={{
              borderRadius: 25,
              backgroundColor: '#E94141',
              width: 210,
              height: 54,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 15,
              marginVertical: 15,
            }}>
            <Text style={{ color: '#FFF', fontSize: 20 }}>Add to cart</Text>
          </TouchableOpacity>
        </View>
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
