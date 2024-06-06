import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, StatusBar, TextInput } from "react-native";
import axios from 'axios';
import RenderItem from "./RenderItem";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import ActivityIndicatorScreen from "../auth/ActivityIndicatorScreen";

// const Data = [
//     {
//         name: 'Vijaya',
//         age: 29
//     },
//     {
//         name: 'jaya',
//         age: 27
//     },
//     {
//         name: 'ujjwal',
//         age: 31
//     }
// ]


const HomeScreen = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const getAapiData = async () => {
        try {
            let result = await axios({
                method: 'get',
                url: 'https://fakestoreapi.com/products',

                // responseType: 'stream'
            })
                .then(function (response) {
                    setData(response.data)
                    // console.log(response.data,'oooo')

                });
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAapiData()
    }, [])
    // console.log('data',data,'5555')
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#AEB6BF'
            />
            <TextInput placeholder="Search"
                style={styles.textInput}
            />
            <View style={{ marginTop: 50, marginBottom: 40 }}>
                <Text style={styles.text}>Order online</Text>
                <Text style={styles.text}>collect in store</Text>

            </View>
            {
                data.length === 0 ? <ActivityIndicatorScreen /> :
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        // showsHorizontalScrollIndicator={false}
                        data={data}
                        renderItem={(item) => <RenderItem item={item} />}
                        keyExtractor={item => item.id}

                    />
            }




            {/* <Button title="onpress" onPress={()=> getAapiData()}/> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor:'#AEB6BF',
        backgroundColor: '#F0F3F4',
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 60,
        marginTop: 20,
        overflow: 'hidden',

    },
    textInput: {
        borderWidth: 1,
        borderColor: '#AEB6BF',
        borderRadius: 50,
        paddingHorizontal: 30

    },
    text: {
        fontSize: 30,
        color: '#000'
        , fontWeight: '700'
    }
})
export default HomeScreen