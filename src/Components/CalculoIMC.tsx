import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export function CalculoIMC() {
  const [peso, setPeso] = useState<string>('');
  const [altura, setAltura] = useState<string>('');
  const [calculoIMC, setCalculoIMC] = useState<number>(0.0);
  const [resultadoIMC, setResultadoIMC] = useState<string>('');
  const [visivel, setVisivel] = useState<boolean>(false);

  function CalcularIMC() {
    setVisivel(false);

    if (peso.trim() != '' && altura.trim() != '') {
      const pesoConvertido = parseFloat(peso.replace(/,/g, "."));
      const alturaConvertida = parseFloat(altura.replace(/,/g, "."));

      if (pesoConvertido != 0.0 && alturaConvertida != 0.0) {
        try {
          const alturaAoQuadrado = (alturaConvertida * alturaConvertida) * 1.0;
          const imc = pesoConvertido / alturaAoQuadrado;

          setCalculoIMC(imc);

          if (imc <= 16.9) {
            setResultadoIMC('Muito abaixo do peso');
          }
          else if (imc <= 18.4) {
            setResultadoIMC('Abaixo do peso');
          }
          else if (imc <= 24.9) {
            setResultadoIMC('Peso normal');
          }
          else if (imc <= 29.9) {
            setResultadoIMC('Acima do peso');
          }
          else if (imc <= 34.9) {
            setResultadoIMC('Obesidade grau I');
          }
          else if (imc < 40.0) {
            setResultadoIMC('Obesidade grau II');
          }
          else if (imc >= 40.0) {
            setResultadoIMC('Obesidade grau III');
          }

          setVisivel(true);
        } catch (error) {
          setVisivel(false);
          alert(`Erro ao realizar calculo do IMC: ${error}`);
        }
      }
      else {
        setVisivel(false);
        alert('É necessário que os valores sejam diferentes de zero!');
      }
    }
    else {
      setVisivel(false);
      alert('Não deixar os campos vazios!');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Calculo do IMC</Text>

      <TextInput style={styles.input}
        keyboardType='default'
        placeholder='Digite seu peso'
        onChangeText={(e) => setPeso(e)}
      />
      <TextInput style={styles.input}
        keyboardType='default'
        placeholder='Digite sua altura'
        onChangeText={(e) => setAltura(e)}
      />

      <TouchableOpacity style={styles.button} onPress={CalcularIMC}>
        <Text style={styles.buttonText}>Calcular seu IMC</Text>
      </TouchableOpacity>

      {visivel &&
        <Text style={styles.textResult}>Seu IMC é: {calculoIMC.toFixed(2)}, e sua classificação é: {resultadoIMC}</Text>
      }

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff7c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: `#000000`,
    textAlign: 'center',
    padding: 10,
    width: 200,
    height: 40,
    marginBottom: 10
  },
  button: {
    backgroundColor: `#257904`,
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: `white`,
    fontSize: 16,
    fontWeight: `bold`
  },
  textTitle: {
    fontSize: 24,
    marginBottom: 10,
    alignItems: 'center',
    fontWeight: `bold`
  },
  textResult: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10
  },
});
