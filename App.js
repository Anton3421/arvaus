import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button, Text, Alert } from 'react-native';

export default function App() {

  const [text, setText] = useState("Guess a number between 1-100");
  const [number] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState(0);
 

  const buttonPressed = () => {
    if (parseInt(guess) > number) {
      setText("Your guess is too high")
    }
    else if (parseInt(guess) < number) {
      setText("Your guess is too low")
  }
    else {
      Alert.alert("You guessed the number")
    }
  }
  return (


    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>{text}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput keyboardType={"numeric"}
          style={{ width: 50, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={guess => setGuess(guess)}         
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={buttonPressed} title="MAKE QUESS" ></Button>
        
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    flexDirection: 'column',
    marginBottom: 10, 
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: 10, 
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10, 
    alignItems: 'flex-start',
  },
});