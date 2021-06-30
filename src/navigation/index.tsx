import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AboutScreen } from '../screens/about';
import { AnalyseScreen } from '../screens/analyse';
import { CreditsScreen } from '../screens/credits';
import { AppColors } from '../theme/colors';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const MainNavigation = () => (
    <NavigationContainer>
        <Tab.Navigator tabBarOptions={{style:{backgroundColor: AppColors.primary, borderTopWidth: 0}, labelStyle: {color:'white', fontSize: 14}, iconStyle:{color:'white'}}}>
            <Tab.Screen name="about" component={AboutScreen} options={{title:'Sobre',  tabBarIcon:() => <MaterialIcons name="home" color="white" size={30} />}}/>
            <Tab.Screen name="analyse" component={AnalyseScreen} options={{title:'Análise', tabBarIcon:() => <MaterialIcons name="photo-camera"  color="white" size={30} />}}/>
            <Tab.Screen name="credits" component={CreditsScreen} options={{title:'Créditos', tabBarIcon:() => <MaterialIcons name="people" color="white" size={30} />}}/>
        </Tab.Navigator>      
    </NavigationContainer>
);