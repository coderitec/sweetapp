import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default function SweetHeader() {
  const head = '\nSweet addictions'
  return (
    <View>
      
        <Text style={headStyle.foot}>
        {new Date().toLocaleTimeString('en-US')}
          {head}</Text>
    </View>
  )
}


const headStyle = StyleSheet.create({
  foot: {fontSize: 20, paddingVertical: 22, backgroundColor: 'blue', color: 'white', textAlign: 'center'}
})
