import React from 'react';
import { MainNavigation } from './src/navigation';
import { useFonts, Spartan_400Regular, Spartan_700Bold } from '@expo-google-fonts/spartan';
import { LoadingScreen } from './src/loading';
import { StatusBar, View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Spartan_400Regular, Spartan_700Bold });

  if (!fontsLoaded) return <LoadingScreen />;
  
  return (
    <View style={{flex:1}}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <MainNavigation />
    </View>
  );
}
