import React from 'react';
import { ImageBackground, StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {

    return (

        <>
            <StatusBar
                backgroundColor="#29B6F6"
            />
            <ImageBackground
                source={require('../../assets/img.jpg')}
                style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.logo}>Find your Gadget</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Get started</Text>
                </TouchableOpacity>
            </ImageBackground>
        </>

    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        paddingVertical: 20,
        paddingHorizontal: 40


    },

    logo: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#fff',
    },
    button: {
        backgroundColor: '#fff',
        padding: 15,
        width: '100%',
        marginHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        position: 'absolute',
        bottom: 50,

    },
    buttonText: {
        fontSize: 18,
        color: '#29B6F6',
    }
});

export default SplashScreen;
