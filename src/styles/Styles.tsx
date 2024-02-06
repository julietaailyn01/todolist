import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      color: '#6f6f6f',
    },
    text: {
      fontSize: 16,
      color: '#6f6f6f',
    },
    textDone:{
      fontSize: 16,
      color: '#6f6f6f',
      textDecorationLine: 'line-through',
    },
    container: {
      padding: 20,
    },
    textInput: {
      borderColor: '#6f6f6f',
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 10,
      width: Dimensions.get('screen').width * 0.65,
    },
    inputContainer: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    whiteText: {
      color: '#fff',
    },
    addButton: {
      width: Dimensions.get('screen').width * 0.2,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    scrollContainer: {
      marginTop: 20,
    },
    itemContainer: {
      paddingVertical: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#e4e4e4',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    removeButton: {
      width: Dimensions.get('screen').width * 0.2,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    homeButton: {
      width: Dimensions.get('screen').width * 0.3,
      padding: 10,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
  });

  export default styles;