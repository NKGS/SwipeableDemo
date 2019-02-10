import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextView } from './TextView';

export class Button extends Component {
    render(){
        return(
            <View>
                <TouchableOpacity onPress={()=>this.props.onPress()} style={styles.btnStyle}>
                    <TextView text="LOGIN" fontSize={18} textColor='white' alignText='center' style={{ marginRight:10}}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btnStyle:{
        borderWidth:1,
        borderColor:'#eeeeee',
        marginTop: 10,
        paddingTop:10,
        paddingBottom:10
    }
})