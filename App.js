import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet} from 'react-native';

import WelcomeScreen from './components/WelcomeScreen';


export default function App() {
  return (

    <View style={mainStyle.head}>
      <WelcomeScreen />
    </View>
    
  );
}

const mainStyle = StyleSheet.create({
  head: {flex: 1, backgroundColor: 'blue'}
})
