import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Splash from "../screens/splash";
import Login from "../screens/login";


const Stack = createStackNavigator();

const AppNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} options={{headerShown : false}}/>

            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default AppNavigation;