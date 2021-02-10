const initialState = {
  board: [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
  ],
  loading: false,
  error: null,
  solvedBoard: null,
  solvedStatus: null,
  player: []
}

const sudokuReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_PLAYER':
      return {
        ...state, player: state.player.concat(action.payload)
      }

    case 'SAVE_INITIAL_BOARD':
      return {
        ...state, loading: false, status: 'unsolved', 
        board: action.payload,
        solvedBoard: action.payload
      }

    case 'RESET_STORE':
      return {
        ...state, 
        loading: false, 
        solvedStatus: null, 
        solvedBoard: null
      }

    case 'SOLVE_BOARD':
      return {
        ...state, solvedBoard: action.payload, loading: false
      }

    case 'VALIDATE_BOARD':
      return {
        ...state, solvedStatus: action.payload, loading: false
      }

    case 'LOADING_GET_INITIAL_BOARD':
      return {
        ...state, loading: true
      }

    case 'ERROR_GET_INITIAL_BOARD':
      return {
        ...state, error: action.payload
      }
  
    default:
      return state
  }
}

export default sudokuReducer