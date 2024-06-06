import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/auth/SplashScreen';
import LoginScreen from '../screen/home/LoginScreen';
import HomeScreen from '../screen/home/HomeScreen';



const Stack = createNativeStackNavigator();


function StackNavigation() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                {
                    loading ?
                        <Stack.Screen name="SplashScreen" component={SplashScreen} />
                        :
                        <>
                            <Stack.Screen name="Login" component={LoginScreen} />
                            <Stack.Screen name="Home" component={HomeScreen} /></>
                }


            </Stack.Navigator>
        </NavigationContainer>



    );
}

export default StackNavigation;