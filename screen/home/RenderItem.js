import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const RenderItem = (props) => {

    const data = props.item.item
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image source={{ uri: data.image }} style={styles.image} />
                <Text style={styles.category}>
                    {data.category}
                </Text>

                <Text style={styles.rate}>
                    Series {data.rating.rate}
                </Text>
                <Text style={styles.price}>{data.price}</Text>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F3F4',
        justifyContent: "center",
        alignItems: 'center',
        paddingVertical: 20,
       
       

    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 80
    },
    category: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
        marginVertical: 10


    },
    rate: {
        color: '#839192',
        fontSize: 15,
        fontWeight: '600'
    },
    price: {
        color: '#29B6F6',
        fontSize: 18,
        fontWeight: '700',
        marginTop: 8
    },
    container2: {
        backgroundColor: '#fff',
        //  padding: 40,
        paddingHorizontal: 70,
        paddingVertical: 20,
        borderRadius: 20,
        alignItems: 'center',
       
    }
})

export default RenderItem