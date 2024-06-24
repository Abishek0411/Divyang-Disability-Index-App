import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CalculatorPage: React.FC = () => {
  const [valueA, setValueA] = useState<string>('');
  const [valueB, setValueB] = useState<string>('');
  const [result, setResult] = useState<number | string | null>(null);

  const calculateResult = () => {
    const a = parseFloat(valueA);
    const b = parseFloat(valueB);

    if (!isNaN(a) && !isNaN(b)) {
      const calculation = a + (b * (90 - a) / 90);
      setResult(calculation);
    } else {
      setResult('Please enter valid numbers for A and B');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter value for A"
        keyboardType="numeric"
        value={valueA}
        onChangeText={setValueA}
        placeholderTextColor='black'
      />
      <TextInput
        style={styles.input}
        placeholder="Enter value for B"
        keyboardType="numeric"
        value={valueB}
        onChangeText={setValueB}
        placeholderTextColor= 'black'
      />
      <Button title="Calculate" onPress={calculateResult} />
      {result !== null && (
        <Text style={styles.result}>Result: {result}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color:'black',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    color:'black',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color:'black',
  },
});

export default CalculatorPage;
