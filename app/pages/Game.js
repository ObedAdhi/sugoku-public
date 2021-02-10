import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getBoard, solveBoard, validateBoard, resetStore} from '../store/actions/sudokuAction';

const windowWidth = Dimensions.get('window').width

const Game = ({navigation, route}) => {
  const dispatch = useDispatch()
  const { board, error, loading, solvedBoard, solvedStatus } = useSelector(state => state)
  const [ username, setUsername ] = useState(route.params.username)
  const [ initData, setInitData ] = useState([]) //kalau kosong kena eror undefined
  const [ playData, setPlayData ] = useState([]) //kalau kosong kena eror undefined

  // address masalah: mengubah array sebelum dimasukkan ke state
  // bagaimana cara agar async
  // vbagaimana cara agar function set itu menunggu hasil dispatch

  useEffect(()=>{
    dispatch(getBoard(route.params.difficulty))
  }, [])

  useEffect(() => {
    setInitData(board)
    setPlayData(board)
  }, [board])

  useEffect(() => {
    if (solvedBoard !== null) {
      setPlayData(solvedBoard)
    }
  }, [solvedBoard])

  useEffect(() => {
    if (solvedStatus === 'solved') {
      dispatch(resetStore())
      navigation.navigate('Finish', { username })
    }
  }, [solvedStatus])


  function onChangeValue (value, indexRow, indexCol) {
    let newBoard = JSON.parse(JSON.stringify(playData))
    newBoard[indexRow][indexCol] = Number(value)
    setPlayData(newBoard)
  }

  function handleSolve () {
    dispatch(solveBoard(({board: initData})))
  }

  function handleValidateBoard() {
    dispatch(validateBoard({board: playData}))
  }

  if (error) {
    return (
      <View style={styles.container} >
        <Text>error</Text>
      </View>
    )
  } else if (loading) {
    return (
      <View style={styles.container} >
        <Text>Loading, please wait</Text>
      </View>
    )
  } else {
    return(
      
      <View style={styles.container} >
        <StatusBar style="auto" />

        <View style={styles.flexCol}>
          {
            playData?.map((row, indexRow) => {
              return (
                <View key={indexRow} style={styles.flexRow}>
                  {
                    row.map((cell, indexCol) => {
                      return (
                        <TextInput key={indexCol}
                          editable = {initData[indexRow][indexCol] === 0 ? true : false}
                          
                          style={styles.boxLight}
                          color = {playData[indexRow][indexCol] === (initData[indexRow][indexCol]) ? 'teal' : 'black'}
                          textAlign = {'center'}
                          maxLength = {1}
                          keyboardType = 'numeric'
                          onChangeText={text => onChangeValue(text, indexRow, indexCol)}
                          value={cell === 0 ? '' : cell.toString()}
                        />
                      )
                    })
                  }
                </View>
              )
            })
          }
        </View>

        <View style={styles.flexRowButton}>
          <View
          style={{marginRight: 50}}>
            <Button
              color="black"
              onPress={() => handleSolve()}
              title="Solve"
            />
          </View>
          <View>
            <Button
              color="black"
              onPress={() => handleValidateBoard()}
              title="Validate"
            />
          </View>
        </View>

      </View>
    );
  }
}
// if (dataCopy || dataCopy !== "")
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6ba',
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  flexRowButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f6f6ba',
    marginBottom: 40
  },
  boxLight: {
    backgroundColor: 'white',
    fontWeight: 'bold',
    height: (windowWidth - 40) / 10 , 
    width: (windowWidth - 40) / 10 , 
    borderColor: 'black', 
    borderWidth: 0.7
  },
  boxDark: {

  },
});


export default Game