import { Text, View, StyleSheet, SafeAreaView, ActivityIndicator, FlatList } from 'react-native';
import React, {useEffect, useState} from 'react';




export default function AssetExample() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://68d2f4e5cc7017eec545aff5.mockapi.io/users/name')
    .then((res) => res.json())
    .then((data) => {
      setUsers(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err)
      setLoading(false)
    });

  }, []);

  if (loading) {
    return (
       <View style={styles.center}>
        <ActivityIndicator size="large" color="#1BA9FF" />
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>List Users</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
          </View> 
          
        )}


      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 24,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
