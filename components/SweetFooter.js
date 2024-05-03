import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function SweetFooter() {
  const foot = ' Sweet addictions footer \n'
  return (
    <View>
    <Text style={footStyle.foot}>&copy;{foot } {new Date().toLocaleDateString('en', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Text>
</View>
  )
}

const footStyle = StyleSheet.create({
  foot: {fontSize: 20, paddingVertical: 22, backgroundColor: 'blue', color: 'white', textAlign: 'center'}
})