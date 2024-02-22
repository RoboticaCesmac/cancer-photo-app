import React from 'react';
import { MainNavigation } from './src/navigation';
import { useFonts, Spartan_400Regular, Spartan_700Bold } from '@expo-google-fonts/spartan';
import { LoadingScreen } from './src/loading';
import { StatusBar, Text, View } from 'react-native';
import * as Updates from 'expo-updates';
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {

  // const [fontsLoaded] = useFonts({ Spartan_400Regular, Spartan_700Bold });
  // const [updated, setUpdated] = useState(false)
  
  // useEffect(() => {
  //   (async () => {    
  //     try {
  //       const update = await Updates.checkForUpdateAsync();
  //       if (update.isAvailable) {
  //         await Updates.fetchUpdateAsync();
  //         await Updates.reloadAsync();
  //       }
  //     } catch (e) { }
  //     setUpdated(true)
  //   })()
  // }, [])
  // if (!fontsLoaded || !updated) return <LoadingScreen />;
  
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <MainNavigation />
    </GestureHandlerRootView>
  );
}
