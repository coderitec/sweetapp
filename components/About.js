import React from 'react'
import { View, Text,ScrollView } from 'react-native'

export default function About() {
    const about = 'This is the love \n we share among us \n MyLamp brought us \n together. \n We grew in love \n Prayed together \n Shared good moments together. \n We discuss our fears, \n find solutions to them. \n We encourage each other \n to remain strong. \n Surely we know each other\'s \n weaknesses and \n discuss on better ways. \n It is God all the way'
  return (
    <View style={{paddingLeft: 30, }}>
        <Text style={{backgroundColor: 'white', paddingVertical: 25, paddingLeft: 10, fontWeight: 700, fontSize: 40, width: '80%'}}>About us</Text>
        
    
            <Text style={{lineHeight: 40, fontSize: 20, width:'85%', color: 'wheat'}}>{about}</Text>

    </View>
  )
}
