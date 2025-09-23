import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://68d2f4e5cc7017eec545aff5.mockapi.io/users/name") 
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading</Text>
      </View>
    );
  }

  // Hàm render 1 item
  const renderItem = ({ item }) => (
    
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
    <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>List Users</Text>
      <FlatList
        data={users}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: "#f2f2f2",
    padding: 20,
    margin: 10,
    borderRadius: 8,
    width: 200,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  email: {
    color: "gray",
  },
});
