import { encodeParams } from "../../helpers/helper"
import { Alert } from 'react-native';


const resetStore = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'RESET_STORE'
      })
    } catch (error) {
    }
  }
}

const addPlayerScore = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'ADD_PLAYER', payload
      })
    } catch (error) {
    }
  }
}


const solveBoard = (board) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'LOADING_GET_INITIAL_BOARD'
      })
      const res = await fetch('https://sugoku.herokuapp.com/solve', {
        method: 'POST',
        body: encodeParams(board),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      const data = await res.json()
      const payload = await data.solution
      dispatch({
        type: 'SOLVE_BOARD', payload
      })
    } catch (error) {
    }
  }
}

const validateBoard = (board) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'LOADING_GET_INITIAL_BOARD'
      })
      const res = await fetch('https://sugoku.herokuapp.com/validate', {
        method: 'POST',
        body: encodeParams(board),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      const data = await res.json()
      const payload = await data.status
      dispatch({
        type: 'VALIDATE_BOARD', payload
      })
      if (payload === 'unsolved' || payload === 'broken') {
        Alert.alert(
          "Not solved yet",
          "Please check your board again",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
      }
    } catch (error) {
    }
  }
}

const getBoard = (difficulty) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'LOADING_GET_INITIAL_BOARD'
      })
  
      const res = await fetch(`https://sugoku.herokuapp.com/board?difficulty=${difficulty}`)
      const payload = await res.json()
      dispatch({
        type: 'SAVE_INITIAL_BOARD', payload: payload.board
      })    
    } catch (error) {
      dispatch({
        type: 'ERROR_GET_INITIAL_BOARD', payload: error
      })
    }
  }
}

export {
  getBoard,
  solveBoard,
  validateBoard,
  resetStore,
  addPlayerScore
}