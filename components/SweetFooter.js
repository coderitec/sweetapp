import React from 'react'
import { View, Text } from 'react-native'

export default function SweetFooter() {
  return (
    <View>
    <Text style={{fontSize: 20, paddingVertical: 22, backgroundColor: 'blue', color: 'white', textAlign: 'center'}}>&copy; Sweet addictions footer {new Date().getFullYear()}</Text>
</View>
  )
}
