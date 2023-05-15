import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text, Image } from 'react-native';
import Extra from "../../screens/extra";

const Bottom = createBottomTabNavigator();


const BottomNavigator = () => {
    return(
        <Bottom.Navigator>
            <Bottom.Screen name='Extra' component={Extra} options={{headerShown: false, tabBarIcon: tabInfo => {
                return(
                    <Image source={require('../../assets/images/hut.png')} 
                    style={{
                        tintColor: tabInfo.focused? 'purple' :'blue'
                    }}
                    />
                )
            }}} />
        </Bottom.Navigator> 
    );
};

export default BottomNavigator;