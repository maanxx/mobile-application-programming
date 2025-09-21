import {
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    View,
    Image,
  } from 'react-native';
  import {
    AntDesign,
    MaterialCommunityIcons,
    Entypo,
    Ionicons,
    Feather,
  } from '@expo/vector-icons';
  
  const DATA = [
    {
      id: '1',
      img: require('./assets/ca_nau_lau.png'),
      title: 'Ca nau lau',
      category: 'Devang',
    },
    {
      id: '2',
      img: require('./assets/do_choi_dang_mo_hinh.png'),
      title: '1kg Kho ga bo toi',
      category: 'LTD Food',
    },
    {
      id: '3',
      img: require('./assets/ga_bo_toi.png'),
      title: 'Xe can cau da nang',
      category: 'The gioi do choi',
    },
    {
      id: '4',
      img: require('./assets/lanh_dao_gian_don.png'),
      title: 'Lanh dao don gian',
      category: 'Minh Long Book',
    },
    {
      id: '5',
      img: require('./assets/hieu_long_con_tre.png'),
      title: 'Hieu long con tre',
      category: 'Minh Long Book',
    },
    {
      id: '6',
      img: require('./assets/xa_can_cau.png'),
      title: 'Do choi dang mo hinh',
      category: 'The gioi do choi',
    },
  ];
  
  type ItemProps = { img: any; title: String; category: String };
  
  const Items = ({ img, title, category }: ItemProps) => (
    <View style={styles.viewFL}>
      <Image source={img} resizeMode="contain" />
      <View>
        <Text>{title}</Text>
        <Text>Shop {category}</Text>
      </View>
      <TouchableOpacity style={styles.btnChat}>Chat</TouchableOpacity>
    </View>
  );
  const App = () => (
    <SafeAreaView style={styles.container}>
      {/*up*/}
      <View style={styles.navView}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text>Chat</Text>
        <MaterialCommunityIcons name="cart-check" size={24} color="black" />
      </View>
      <Text style={styles.textNav}>
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
      </Text>
      {/*flatlist*/}
      <FlatList 
        data={DATA}  
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Items img={item.img} title={item.title} category={item.category}/>
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
  
  const styles = StyleSheet.create({
    container: {
      padding: 0,
      margin: 0,
    },
    navView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#1BA9FF',
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    textNav: {
      paddingHorizontal: 12,
      paddingVertical: 12,
      backgroundColor: '#e5e5e5',
      fontWeight: 500,
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
      flex: 1,
      flexDirection: 'row',
      padding: 16,
      justifyContent: 'space-between'
    },
    btnChat: {
      backgroundColor: 'red',
      color: 'white',
      padding: 20,
      width: 100,
      height: 10,
      justifyContent: 'center',
      alignItems: 'center',
      
    }
  });
  
  export default App;
  