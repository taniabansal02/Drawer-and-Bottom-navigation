import React , {useEffect} from "react";
import { View, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 2000)
    }, []);

    return(
        <View>
            <Text style={{backgroundColor:'red'}}> Splash screen </Text>
        </View>
    );
};

export default Splash;