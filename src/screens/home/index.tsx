import React from "react";
import { View, Text } from 'react-native';
import BottomNavigator from "../../components/bottomNav";

const Home = () => {
    return(
        <View style={{flex:1}}>
            <BottomNavigator />
        </View>
    );
};

export default Home;