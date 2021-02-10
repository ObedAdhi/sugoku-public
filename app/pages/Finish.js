import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function Finish ({ navigation, route }) {

  function handleToHome() {
    navigation.navigate('Home')
  }

  function handleToLeaderBoard () {
    navigation.navigate('Leader Board')
  }

  return (
    <View style={styles.container}>
      <Text
      style={{fontSize: 32, backgroundColor: '#f6f6ba', textAlign: 'center', paddingBottom: 30}}
      >Congratulations, {route.params.username} </Text>
      <Text>You finish Sugoku Oishi</Text>
      <StatusBar style="auto" />


      <View style={styles.flexRowButton}>
        <View
        style={{marginVertical: 30}}>
          <Button
            color="black"
            onPress={() => handleToHome()}
            title="Back To Home"
          />
        </View>
        <View>
          <Button
            color="black"
            onPress={() => handleToLeaderBoard()}
            title="See Leaderboard"
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


export default Finish