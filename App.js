import React, { useState, Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,

} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";




 function App() {

  const [peso, setPeso] = useState('');
  const [tempo, setTempo] = useState('');
  const [dose, setDose] = useState('');
  const [anestesico, setAnestesico] = useState('');

function calcular() {
    const total = parseFloat(peso) * parseFloat(tempo) * parseFloat(dose) / parseFloat(anestesico);

    alert('A quantidade do anestésico em (ml) é: ' + total);

  }

  return (
  

    <View style={styles.container}>
      <Text style={styles.titulo}> Calculadora de anestésico </Text>

      <TextInput style={styles.campo} keyboardType={"numeric"} placeholder="Digite o peso do paciente" value={peso} onChangeText={(peso)=> setPeso(peso)} />
      <TextInput style={styles.campo} keyboardType={"numeric"} placeholder="Digite o tempo de cirurgia" value={tempo} onChangeText={(tempo)=> setTempo(tempo)} /> 
      
      <View style={styles.picker}>
      <BouncyCheckbox
          isChecked
          textColor="blue"
          borderColor="black"
          fillColor="blue"
          text="Lidocaina"
          onPress={(checked) => console.log("Checked: ", checked)}
        />

        <BouncyCheckbox
          isChecked
          textColor="blue"
          borderColor="black"
          fillColor="blue"
          text="Cetamina"
          onPress={(checked) => console.log("Checked: ", checked)}
        />

        <BouncyCheckbox
          isChecked
          textColor="blue"
          borderColor="black"
          fillColor="blue"
          text="Dexmedetomidina"
          onPress={(checked) => console.log("Checked: ", checked)}
        />
        </View>

      <TouchableOpacity style={styles.botao} onPress={calcular}>
        <Text style={styles.textbotao}> Calcular anestésico </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    width: '100%',
    backgroundColor: 'rgba(30,30,100,1)',
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
    color:  'white',
  },
  campo: {
    width: '80%',
    backgroundColor: 'rgba(225,255,255,0)',
    marginTop: 15,
    color: 'blue',
    borderBottomColor: 'rgba(30,30,100,1)',
    borderBottomWidth: 3,
    marginBottom: 30,
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    margin: 20,
    padding: 10,
    backgroundColor: 'rgba(30,30,120,1)',
  },
  textbotao: {
    color: 'white',
  },
  picker: {
    width: '80%',
    borderBottomColor: 'rgba(30,30,100,1)'
  }

})
export default App;
