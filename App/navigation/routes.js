import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    Scene,
    Router,
    Stack,
} from 'react-native-router-flux';
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: '#eee',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
});

const getSceneStyle = () => ({
    backgroundColor: '#333333'
});

const Routes = () => (
    <Router
        getSceneStyle={getSceneStyle}
    >

        <Stack key="customNavBar" hideTabBar titleStyle={{ alignSelf: 'center' }}>
            <Scene
                key="Login"
                component={Login}
                hideNavBar={true}
                gesturesEnabled={false}
            />
            <Scene
                key="Home"
                component={Home}
                hideNavBar={true}
                gesturesEnabled={false}
            />
        </Stack>

    </Router>
);

export default Routes;