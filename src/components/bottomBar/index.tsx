
import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/* Pages */
import { Home } from "../../pages/Home";
import { Settings } from "../../pages/Settings";
import { BackHandler } from 'react-native';

interface TabTitle {
    first: string,
    second: string,
}

const Tab = createBottomTabNavigator();

export const BottomBar: React.FC<TabTitle> = ({
    first,
    second,
}) => {

  return (
    <Tab.Navigator>
      <Tab.Screen 
            name={first} 
            component={Home}
            options={{
                tabBarLabel: first,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} 
        />
      <Tab.Screen 
            name={second} 
            component={Settings}
            options={{
                tabBarLabel: second,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }}
            listeners={{
                tabPress: (e:any) => {
                 //Simulate Crashing
                    BackHandler.exitApp();
                },
              }}
        />
    </Tab.Navigator>
  );
}