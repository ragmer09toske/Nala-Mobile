import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function CurrentScreenDots() {
  const [dotsState, setDotsState] = useState("rgba(0, 0, 0, 0.85)")
  return (
    <View  style={styles.dotsWrapper}> 
      <View style={[styles.dots, {backgroundColor: `${dotsState}`}]}></View>
      <View style={styles.dots}></View>
      <View style={styles.dots}></View>
      <View style={styles.dots}></View>
    </View>
  )
}
const styles = StyleSheet.create({
    dots: {
        backgroundColor: "gray",
        width: 15,
        height: 15,
        borderRadius: 50
    },
    dotsWrapper: {
        flexDirection: "row",
        gap: 5,
    }
})