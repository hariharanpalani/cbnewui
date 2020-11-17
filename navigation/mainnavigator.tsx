import React from 'react';
import { Platform, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from '../onboarding/onboarding';
import { SplashScreen } from '../splash';
import Home from '../home';

const Stack = createStackNavigator();

function MainNavigator() {
    return (
        <View style={[{ flex: 1 }]}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="onboarding" headerMode="none"
                    screenOptions={{ animationEnabled: false }}
                    mode="modal">
                    <Stack.Screen
                        name="splash"
                        component={SplashScreen}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="onboarding"
                        component={Onboarding}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="homescreen"
                        component={Home}
                        options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

export default MainNavigator;
