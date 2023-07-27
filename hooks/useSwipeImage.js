import { useState, useRef } from 'react';
import { Animated, PanResponder } from 'react-native'; // Import PanResponder here

const useSwipeImage = (initialImage, nextImage, swipeThreshold = 150) => {
  const [currentImage, setCurrentImage] = useState(initialImage);
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x }], { useNativeDriver: false }),
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -swipeThreshold) {
          // Swiped to the left by a distance greater than the threshold
          setCurrentImage(nextImage); // Show the next image
        } else if (gestureState.dx > swipeThreshold) {
          // Swiped to the right by a distance greater than the threshold
          setCurrentImage(initialImage); // Show the initial image again
        }
        Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
      },
    })
  ).current;

  return { currentImage, panResponder, pan };
};

export default useSwipeImage;
