import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SecondScreen: React.FC = () => {
  return (
    <View style={styles.fullContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>UE Arm & Hand Compo</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>LE Mobility & Stability Compo</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    backgroundColor: '#A499C0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#A499C0',
    marginTop: 20,
  },
  box: {
    width: 300, // Set a fixed width for uniformity
    height: 80, // Set a fixed height for uniformity
    margin: 10,
    backgroundColor: '#3F2A7F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SecondScreen;
