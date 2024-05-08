import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text } from 'react-native';
import theme from './src/styles/theme';
import { CalculoIMC } from './src/Components/CalculoIMC';
import {useState} from "react"

export default function App() {

  const [contadorLikes, setContadorLikes] = useState<number>(0);

    const incrementarContador = () =>  setContadorLikes(contadorLikes + 1);
    const decrementarContador = () =>  setContadorLikes(contadorLikes - 1);
  return (
    <View style={styles.container}>
      <View style={styles.containerOla}>
        <Text style={styles.greetingOla}>
          Olá Arthur, seu total de Likes é: {contadorLikes}
        </Text>

        <View style={styles.buttonContainerOla}>
          <Button
            title="Like"         
            onPress={incrementarContador}
            color="blue"
          />
          <Button
            title="Deslike"         
            onPress={decrementarContador}
            color="red"
          />
        </View>
    </View>
      <CalculoIMC />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:24
  },
  textInput:{
    borderColor: theme.colors.red,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 24,
    width:300,
    paddingTop: 10,
    paddingBottom: 10
  },
  button: {
    backgroundColor: theme.colors.blue,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerOla: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingOla: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
  buttonContainerOla: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },

});
