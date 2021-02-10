import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker'

const Home = ({ navigation }) => {
  const [ username, setUsername ] = useState('')
  const [ difficulty, setDifficulty ] = useState('easy')
  
  function handleStart() {
    if (!username || username === '') {
      Alert.alert(
        "Username is required",
        "Please fill your username to continue",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    } else {
      navigation.navigate('Game', { username, difficulty})
    }
  }

  return(
    <>
    <Text
      style={{fontSize: 32, backgroundColor: '#f6f6ba',
        textAlign: 'center', paddingTop: 30, shadowColor: 'gray',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10}}
      >SUGOKU{'\n'}OISHI</Text>

    <View style={styles.container} >
      <StatusBar style='white' />
      
      <Text
        style={{fontSize: 24, backgroundColor: '#f6f6ba', textAlign: 'center', paddingBottom: 25,
      }}
        >Create your username</Text>
      <TextInput
        editable = {true}
        textAlign = {'center'}
        maxLength = {12}
        style={{ height: 40, width: 300, borderColor: 'black', borderWidth: 1 ,backgroundColor: 'white'}}
        onChangeText={text => setUsername(text)}
        placeholder={'Insert your username'}
        value={username}
      />

      <Picker
        selectedValue={difficulty}
        style={{height: 50, width: 130, borderColor: 'black', marginBottom: 75}}
        onValueChange={(itemValue) => setDifficulty(itemValue)}>
        <Picker.Item label="Easy" value="easy" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="Hard" value="hard" />
        <Picker.Item label="Random" value="random" />
      </Picker>

      <TouchableOpacity
        onPress={() => handleStart()}
        style={{ height: 70, width: 200, marginTop: 10, backgroundColor: 'black', justifyContent: 'center', borderRadius: 20}}>
        <Text
          style={{fontSize: 24, color: 'white', textAlign: 'center'}}
          >START</Text>
      </TouchableOpacity>
    </View>
    </>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6ba',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 175
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  flexCol: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home
