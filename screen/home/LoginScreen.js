import React, { useState } from 'react';
import {
    ImageBackground, StyleSheet, View, Text, StatusBar, TextInput, TouchableOpacity,
    ScrollView
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please enter valid email")
            .required('Email Address is Required'),
        password: yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
    })
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (

        <>
            <StatusBar
                backgroundColor="#29B6F6"
            />
            <View style={styles.container}>
                <View style={styles.SecContainer}>
                    <Text style={styles.text}>Welcome</Text>
                    <Text style={styles.text}>back</Text>

                </View>
                <View style={styles.SecContainer1}>
                    <Text style={styles.loginText}>Login</Text>

                    <Formik
                        initialValues={{
                            email: '',
                            password: ''

                        }}
                        validationSchema={loginValidationSchema}
                        onSubmit={values => navigation.navigate('Home')}
                    >
                        {({ handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            isValid,

                        }) => (
                            <View>

                                <Text style={styles.textInfo}>Email</Text>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder='Enter your email'
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    keyboardType="email-address"

                                />
                                {errors.email &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                                }
                                <Text style={styles.textInfo}>Password</Text>
                                <View style={[styles.textInputPass]}>
                                    <View style={{ flex: 1 }}>
                                        <TextInput
                                            secureTextEntry={!showPassword}
                                            // style={styles.textInput}
                                            placeholder='Enter your email'
                                            // value={Password}
                                            // onChangeText={(pass) => setPassword(pass)}
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                        // secureTextEntry
                                        />

                                    </View>

                                    <TouchableOpacity onPress={toggleShowPassword}>
                                        <Text style={{ fontSize: 12, color: '#29B6F6' }}>{showPassword ? 'Hide' : 'Show'}</Text>
                                    </TouchableOpacity>

                                </View>
                                {errors.password &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                                }
                                <TouchableOpacity style={{ marginTop: 20 }}>
                                    <Text style={styles.buttonText12}>Forgate Password?</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}
                                    // onPress={() => navigation.navigate('Home')}
                                    onPress={handleSubmit}

                                >
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ alignItems: 'center', marginTop: 30 }}>
                                    <Text style={styles.buttonText1}>Create account</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </View>

            </View>

        </>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#29B6F6',
        flex: 1,
    },
    SecContainer: {
        backgroundColor: '#29B6F6',
        flex: 0.3,
        paddingHorizontal: 50,
        marginTop: 30

    },
    SecContainer1: {
        paddingHorizontal: 50,
        paddingTop: 40,
        flex: 0.7,
        backgroundColor: '#fff',
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
    },
    text: {
        fontSize: 50,
        color: '#fff',
        fontWeight: '700',

    },
    loginText: {
        color: '#000',
        fontWeight: '700',
        fontSize: 18,
    },
    textInfo: {
        fontSize: 14,
        color: '#AEB6BF',
        marginTop: 40,

    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: '#AEB6BF',
        // backgroundColor:'red',
    },
    textInputPass: {
        borderBottomWidth: 1,
        borderColor: '#AEB6BF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // justifyContent:'center',
    },
    button: {
        backgroundColor: '#29B6F6',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 70,
        // position: 'relative',
        // top:80

    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
    buttonText1: {
        fontSize: 18,
        color: '#29B6F6',
    },
    buttonText12: {
        fontSize: 15,
        color: '#29B6F6',
    },

});

export default LoginScreen;
