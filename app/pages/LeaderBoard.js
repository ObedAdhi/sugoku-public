import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector } from 'react-redux';


function LeaderBoard ({ navigation, route }) {
  // function handle() {
  //   dispatch(solveBoard(board))
  //   setDataCopy((newDataCopy = solvedBoard))
  // }
  const { player } = useSelector(state => state)
  const [playerCopy, setPlayerCopy] = useState([])

  useEffect(() => {
    playerDeepCopy = JSON.parse(JSON.stringify(player))
    playerDeepCopy.sort((a, b) => a.time - b.time)
    setPlayerCopy(playerDeepCopy)
    // console.log(playerCopy);
  }, [player])

  function handleToHome() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text
      style={{fontSize: 32, backgroundColor: '#f6f6ba', textAlign: 'center', paddingBottom: 30}}
      >Leaderboards</Text>

      <View style={styles.flexCol}>
        {
            playerCopy?.map((singlePlayer, i) => {
            <Text key={i}>
              {singlePlayer.name} {singlePlayer.time} seconds
            </Text>
          })
        }
      </View>

      <StatusBar style="auto" />

      <View style={styles.flexRowButton}>
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
  flexCol: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});


export default LeaderBoard