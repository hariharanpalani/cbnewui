import React from 'react';
import { Platform, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from '../onboarding';
import { SplashScreen } from '../splash';
import Login from '../login';

const Stack = createStackNavigator();

function MainNavigator() {
    return (
        <View style={[{ flex: 1 }]}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="splash"
                        component={SplashScreen}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="onboarding"
                        component={Onboarding}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="loginscreen"
                        component={Login}
                        options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

export default MainNavigator;
