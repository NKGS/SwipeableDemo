import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

//Used in following forms - Login,  
export class TextBoxView extends Component {
    render() {

        const { placeholder, maxLength, borderBottomColor, secureTextEntry, value, onChangeText, width, returnKeyType, style, keyboardType, marginTop, marginBottom, height, marginLeft, marginRight, borderBottomWidth,onSubmitEditing,setPasswordFieldRef, isEditable } = this.props;

        const styles = {
            textInputStyle: {
                fontSize: 18,
                color: 'white',
                borderBottomWidth: 0,
                marginTop: 5, // Used for login page.
                width: width,
                marginTop: marginTop,
                marginBottom: marginBottom,
                height: height,
                marginLeft: marginLeft,
                marginRight: marginRight,
                borderBottomWidth: 1,
                borderBottomColor: borderBottomColor,
            }
        };
        return (
            <TextInput
                // ref={(input) => { 
                //     setPasswordFieldRef? setPasswordFieldRef(input) : null; 
                // }}
                style={styles.textInputStyle}
                value={value}
                placeholder={placeholder}
                autoCapitalize='none'
                placeholderTextColor="#585858"
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                returnKeyType={returnKeyType}
                keyboardType={keyboardType}
                maxLength={maxLength}
                onSubmitEditing={onSubmitEditing?onSubmitEditing:null}
                maxLength={maxLength}
                editable={isEditable}
            />
        );
    }
}
