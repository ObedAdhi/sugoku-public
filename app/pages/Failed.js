import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function Failed ({ navigation, route }) {
  // function handle() {
  //   dispatch(solveBoard(board))
  //   setDataCopy((newDataCopy = solvedBoard))
  // }

  function handleToHome() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text
      style={{fontSize: 32, backgroundColor: '#f6f6ba', textAlign: 'center', paddingBottom: 30}}
      >Sorry, {route.params.username} </Text>
      <Text>Time's up!</Text>
      <StatusBar style="auto" />

      <View style={styles.flexRowButton}>
          {/* <View
          style={{marginBottom: 30}}>
            <Button
              color="black"
              onPress={() => handle()}
              title="Play Again"
            />
          </View> */}
          <View
          style={{marginTop: 30}}>
            <Button
              color="black"
              onPress={() => handleToHome()}
              title="Back To Home"
            />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6ba',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexRowButton: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f6f6ba',
    marginBottom: 40
  },
});


export default Failed