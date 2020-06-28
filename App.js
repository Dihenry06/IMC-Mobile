import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const [imc, setImc] = useState(0);
  const [status, setStatus] = useState('status');

  function calcImc(height, weight) {
    const result = weight / (height * height);
    setImc(result);
    return setNivel(result);
  }

  function setNivel(imc) {
    if (imc < 18.5) {
      setStatus('Abaixo do peso')
    }
    if (imc >= 18.5 && imc < 24.9) {
      setStatus('Peso ideal')
    }

    if (imc >= 25 && imc < 29.9) {
      setStatus('Acima do peso')
    }
    if (imc >= 30 && imc < 39.9) {
      setStatus('Obesidade I')
    }
    if (imc > 40) {
      setStatus('Obesidade II')
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.entry}>

        <TextInput
          placeholder='Altura'
          placeholderTextColor="#808080"
          keyboardType='numeric'
          onChangeText={setHeight}
          style={styles.input}
        />

        <TextInput
          maxLength={3}
          placeholder='Peso'
          placeholderTextColor="#808080"
          keyboardType='numeric'
          onChangeText={setWeight}
          style={styles.input}
        />

      </View>

      <TouchableOpacity style={styles.button} onPress={() => { calcImc(height, weight) }} >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <View style={styles.viewResult}>
        <Text style={[styles.result, { fontSize: 50, marginBottom: 20 }]}> {imc.toFixed(1)} </Text>
        <Text style={styles.result}> {status} </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%'
  },
  entry: {
    flexDirection: 'row'
  },
  input: {
    height: 60,
    textAlign: 'center',
    width: '50%',
    fontSize: 30,
    marginTop: 20,
    color: '#808080'
  },
  button: {
    backgroundColor: '#f0f0f0'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    padding: 30
  },
  viewResult: {
    marginTop: 20
  },
  result: {
    height: 60,
    alignSelf: 'center',
    textAlign: 'center',
    width: '80%',
    fontSize: 30,
    marginTop: 20,
    color: 'grey'
  }
});
