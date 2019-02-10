/**
 * Sample React Native App For Navigation using Router library
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Routes from "./navigation/routes";


class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        //This line is used to comment Warnings
        console.disableYellowBox = true;
    }

    render() {
        return (
                <Routes/>
        );
    }
}

export default App;