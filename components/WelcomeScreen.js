import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import SweetHeader from './SweetHeader';
import SweetFooter from './SweetFooter';
import ImageViewer from './ImagePreview';
import About from './About';

const love =  require('../assets/wifey.jpg')

export default function WelcomeScreen() {
  return (
    <View style={welStyle.head}>
        <ScrollView  indicatorStyle='white' >

            <View style={welStyle.home}>
              <SweetHeader />
              <ImageViewer love = {love}/>
              <Text style={welStyle.baby} numberOfLines={1}>sweet addictions baby</Text>
              <About />

              <SweetFooter />
        
            </View>
        </ScrollView>
    </View>
  )
}

const welStyle = StyleSheet.create({
  baby:  {
    fontSize:40, 
    textAlign: 'center',  
    padding: 50,
  },
  home: {
    flex: 1, 
    display:'flex', 
    justifyContent: 'space-between', 
    flexDirection: 'column', 
    marginHorizontal: 0
  },
  head:{flex: 1, 
    height: '70%'
  }
})