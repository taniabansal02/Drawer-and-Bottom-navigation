import React from "react";
import { View, Text } from 'react-native';

// import {useNavigation} from '@react-navigation/native';  
// const navigation = useNavigation();

const Extra = ({navigation}) => {
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:30}} onPress={() =>{
                navigation.openDrawer();
            }}> Open side drawer </Text>
        </View>
    );
};

export default Extra;