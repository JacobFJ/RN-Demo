/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { useEffect } from 'react';
 import {
   StyleSheet,
   Text,
   Button,
   View,
   Alert
 } from 'react-native';

 import { NavigationContainer } from '@react-navigation/native';

 import { BottomBar } from "./components/bottomBar"
 
 import * as Updates from 'expo-updates';
 
 const App = () => {

  useEffect(() => {
    const timer = setInterval(async () => {
      const update = await Updates.checkForUpdateAsync()
      if (update.isAvailable) {
       await Updates.fetchUpdateAsync();
       await Updates.reloadAsync();
      }
    }, 3000)
    return () => clearInterval(timer)
  }, [])
  // const handleCheckUpdate = async () => {
  //    try {
  //      const asd = await Updates.fetchUpdateAsync();
  //      Alert.alert(JSON.stringify(asd));
  //    } catch (error:any) {
  //     Alert.alert(JSON.stringify(error.message));
  //    }
  //  }
 
  //  const handleForceUpdate = async () => {
  //    await Updates.reloadAsync();
  //  }
 
   return (
    <NavigationContainer>
     {/* <View style={styles.container}>
       <Text>Release5: {Updates.manifest?.metadata}</Text>
       <Button onPress={handleCheckUpdate} title="Check Update" />
       <Text />
       <Button onPress={handleForceUpdate} title="Force Update" />
      */}
        <BottomBar first={'Wrong Texts'} second={'Profile'}></BottomBar>
     {/* </View> */}
     </NavigationContainer>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });
 
 export default App;
 
 