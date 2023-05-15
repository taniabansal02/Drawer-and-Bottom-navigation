import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { View, Text } from 'react-native';
import Home from "../../screens/home";
// import Login from "../../screens/login";
import Signup from "../../screens/signup";
import CustomDrawer from "./customDrawer";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return(
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen name="Games " component={Home} options={{headerShown: false}} />
            <Drawer.Screen name="Signup" component={Signup} options={{headerShown: false}} />
        </Drawer.Navigator>
    );
};

export default DrawerNav;