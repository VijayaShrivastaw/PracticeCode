import React ,{useState} from "react";
import { View, Text,ActivityIndicator } from "react-native";



const ActivityIndicatorScreen = () => {
    const [loading, setLoading] = useState(true)

    return (
        <View style={{flex:1,justifyContent:'center'}}>           
             <ActivityIndicator size={100} color={'#29B6F6'} animating={loading} />
        </View>
    )
}

export default ActivityIndicatorScreen