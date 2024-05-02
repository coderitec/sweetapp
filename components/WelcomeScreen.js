import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import SweetHeader from './SweetHeader';
import SweetFooter from './SweetFooter';
import ImageViewer from './ImagePreview';

const love =  require('../assets/wifey.jpg')

export default function WelcomeScreen() {
  return (
    <View style={{flex: 1}}>
        <ScrollView>

            <View style={{flex: 1, display:'flex', justifyContent: 'space-between', flexDirection: 'column', marginHorizontal: 0}}>
        <SweetHeader />
        <ImageViewer love = {love}/>
        <Text style={{fontSize:40, textAlign: 'center',  padding: 50,}} numberOfLines={1}>sweet addictions baby</Text>

        <SweetFooter />
        
            </View>
        </ScrollView>
    </View>
  )
}
