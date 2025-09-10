import { Text, View, SafeAreaView, StyleSheet, Pressable, TextInput, TouchableOpacity  } from 'react-native';
import { useState } from 'react';
import { Card } from 'react-native-paper';


export default function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const xoa = () => {
    setDisplayValue('0');
  }
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}> PHEP TOAN</Text>
        <View style={styles.input}>
          <TextInput
            style={{paddingRight: 15}}
            placeholder='Nhap gia tri' 
          />
          <TouchableOpacity style={{borderWidth: 2, backgroundColor: 'gray'}}>Xoa</TouchableOpacity>
        </View>
        <View style={{borderWidth: 2, paddingHorizontal: 20, paddingVertical: 15, width: '65%'}}>
          <Text>{displayValue}</Text>
        </View>
        <View style={styles.exu}>

          <View  style={{flexDirection: 'row', paddingHorizontal: 10, paddingVertical:  10}}>
            <TouchableOpacity style={styles.btn_nut}> 0</TouchableOpacity>
            <TouchableOpacity style={styles.btn_nut}> 1</TouchableOpacity>
            <TouchableOpacity style={styles.btn_nut}> 2</TouchableOpacity>
            <TouchableOpacity style={styles.btn_nut}> 3</TouchableOpacity>
            <TouchableOpacity style={styles.btn_nut}> 4</TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', paddingHorizontal: 10, paddingVertical:  10}}>
            <TouchableOpacity style={styles.btn_nut}> 5</TouchableOpacity>
            <TouchableOpacity style={styles.btn_nut}> 6</TouchableOpacity>
            <TouchableOpacity style={styles.btn_nut}> 7</TouchableOpacity>
            <TouchableOpacity style={styles.btn_nut}> 8</TouchableOpacity>
           <TouchableOpacity style={styles.btn_nut}> 9</TouchableOpacity>
          </View>
          
          <View style={{flexDirection: 'row', paddingHorizontal: 10, paddingVertical:  10}}>
            <TouchableOpacity style={styles.btn_nut}> +</TouchableOpacity>
            <TouchableOpacity style={styles.btn_nut}> -</TouchableOpacity>
            <TouchableOpacity style={styles.btn_nut}> *</TouchableOpacity>
            <TouchableOpacity style={styles.btn_nut}> /</TouchableOpacity>
          </View>
          


          <TouchableOpacity> </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.btnIn}>Tinh toan</TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 8,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    marginVertical: 20
  },
  input: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    paddingVertical: 15,
    borderWidth: 2,
    paddingHorizontal: 10,
    marginVertical: 40
  },
  btn: {
    marginTop: 20,
    
  },
  btnIn: {
    backgroundColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 6,
    fontWeight: 'bold',
    borderRadius: 4
  },
  exu: {
    marginTop: 10,
    borderWidth: 2
  },
  btn_nut: {
    paddingRight: 5
  }
  
});
