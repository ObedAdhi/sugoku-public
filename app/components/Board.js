import { StyleSheet, Text, View, TextInput } from 'react-native';

function Board (props) {
  return (
    <View style={styles.flexRow}>
      {
        props.row.map((cell, indexCol) => {
          return (
            <TextInput
            
              style={{ height: 50, width: 50, borderColor: 'black', borderWidth: 1 }}
              // onChangeText={text => onChangeText(text)}
              value={cell}
            />
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  flexCol: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Board