import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { RootStackParamList } from './types'; // Import the type
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type MainpageNavigationProp = BottomTabNavigationProp<RootStackParamList, 'Mainpage'>;

type Props = {
  navigation: MainpageNavigationProp;
};

const Mainpage: React.FC<Props> = ({ navigation }) => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(animation, {
      toValue: 1,
      friction: 3,
      tension: 30,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.fullContainer}>
      <Animated.Text style={[styles.title, { transform: [{ scale: animation }] }]}>Divyaan Index Surveying App</Animated.Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('SecondPage')}>
          <Text style={styles.text}>Congenital</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('SecondPage')}>
          <Text style={styles.text}>Acquired Causes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('SecondPage')}>
          <Text style={styles.text}>Neurological</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('SecondPage')}>
          <Text style={styles.text}>Musculoskeletal</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontFamily: 'cambay',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
  },
  box: {
    width: 300,
    height: 80,
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

export default Mainpage;
