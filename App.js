import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import jobs1 from './assets/jobs-1.jpg';
import jobs2 from './assets/jobs-2.jpg';
import CurrentScreenDots from './CurrentScreenDots';
import useSwipeImage from './hooks/useSwipeImage';

export default function App() {
  const { currentImage, panResponder, pan } = useSwipeImage(jobs1, jobs2);

  return (
    <View style={styles.container}>
      <View style={styles.ImageView} {...panResponder.panHandlers}>
        <Text style={{fontWeight: 600, fontSize: 40}}>Welcome to Nala</Text>
        <Animated.Image
          style={{ transform: [{ translateX: pan.x }], width: 450, height: 450, resizeMode: 'contain' }}
          source={currentImage}
        />
        <View>
          <CurrentScreenDots />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={{ color: 'white' }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageView: {
    flex: 1,
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute', // Use absolute positioning to place the button at the bottom
    bottom: 50, // You can adjust this value to set the distance from the bottom
    backgroundColor: 'black',
    padding: 20,
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 50,
    justifyContent: 'center',
  },
});
