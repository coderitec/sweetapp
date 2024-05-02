import { StyleSheet, Image, View, Text } from 'react-native';

export default function ImageViewer({love}) {
  return (
    <View style={styles.pee}>
    
    <Image source={love} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  pee: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

  }
});
