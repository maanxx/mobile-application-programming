import {
    View,
    StyleSheet,
    SafeAreaView,
    Image,
    Text,
    FlatList,
  } from 'react-native';
  
  import {
    MaterialIcons,
    FontAwesome6,
    Entypo,
    MaterialCommunityIcons,
    Ionicons,
    Feather,
    EvilIcons,
  } from '@expo/vector-icons';
  
  const DATA = [
    {
      id: '1',
      img: require('./assets/carbusbtops2 1.png'),
      title: 'Cáp chuyển từ Cổng USB sang PS2',
      price: '69.000 đ',
      percent: '39%',
    },
    {
      id: '2',
      img: require('./assets/carbusbtops2 1.png'),
      title: 'Cáp chuyển từ Cổng USB sang PS2',
      price: '69.000 đ',
      percent: '39%',
    },
    {
      id: '3',
      img: require('./assets/carbusbtops2 1.png'),
      title: 'Cáp chuyển từ Cổng USB sang PS2',
      price: '69.000 đ',
      percent: '39%',
    },
    {
      id: '4',
      img: require('./assets/carbusbtops2 1.png'),
      title: 'Cáp chuyển từ Cổng USB sang PS2',
      price: '69.000 đ',
      percent: '39%',
    },
    {
      id: '5',
      img: require('./assets/carbusbtops2 1.png'),
      title: 'Cáp chuyển từ Cổng USB sang PS2',
      price: '69.000 đ',
      percent: '39%',
    },
    {
      id: '6',
      img: require('./assets/carbusbtops2 1.png'),
      title: 'Cáp chuyển từ Cổng USB sang PS2',
      price: '69.000 đ',
      percent: '39%',
    },
  ];
  
  type ItemProps = {
    img: any;
    title: String;
    price: String;
    percent: String;
  };
  const Items = ({ img, title, price, percent }: ItemProps) => {
    return (
      <View style={styles.viewFL}>
        <Image source={img} resizeMode="contain" />
        <Text>{title}</Text>
        <View style={{ flexDirection: 'row' }}>
          <EvilIcons name="star" size={24} color="yellow" />
          <EvilIcons name="star" size={24} color="yellow" />
          <EvilIcons name="star" size={24} color="yellow" />
          <EvilIcons name="star" size={24} color="yellow" />
          <EvilIcons name="star" size={24} color="yellow" /> (15)
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold', paddingRight: 10}}>{price}</Text>
          <Text style={{color: '#969DAA'}}>{percent}</Text>
        </View>
      </View>
    );
  };
  export default function App() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <FontAwesome6 name="arrow-left-long" size={24} color="black" />
          <View style={styles.find}>
            <MaterialIcons
              name="find-replace"
              size={24}
              color="black"
              style={{ paddingRight: 10 }}
            />
            Dây cáp usb
          </View>
          <MaterialCommunityIcons name="cart-variant" size={24} color="black" />
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </View>
        <FlatList
          data={DATA}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Items
              img={item.img}
              title={item.title}
              price={item.price}
              percent={item.percent}
            />
          )}
        />
  
        {/*footer*/}
        <View style={styles.footer}>
          <Ionicons name="reorder-three-outline" size={30} color="black" />
          <Entypo name="home" size={30} color="black" />
          <Feather name="arrow-left" size={30} color="black" />
        </View>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      padding: 0,
      margin: 0
    },
    top: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#1BA9FF',
      padding: 15,
      justifyContent: 'space-between',
    },
    find: {
      flexDirection: 'row',
      backgroundColor: '#FFF',
      width: 220,
      alignItems: 'center',
      paddingLeft: 10,
    },
    footer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#1BA9FF',
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    viewFL: {
      paddingHorizontal: 5,
      paddingVertical: 36,
      height: '100%'
    }
  });
  