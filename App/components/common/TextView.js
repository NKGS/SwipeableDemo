import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

//Used in following forms -  Login, Home, ListCircleButton, HomeHeader, FooterButtonHome , 
export class TextView extends Component {
    render() {
        const { text , fontSize , textColor, alignText, lineHeight , style, fontWeight, alignItems, marginRight, marginLeft, marginBottom, marginTop, margin,borderWidth} = this.props;
        const styles = StyleSheet.create({
            textStyle : {
                fontSize: fontSize,
                color: textColor,
                textAlign: alignText,
                flexDirection: 'row',
                fontWeight: fontWeight,
                lineHeight: lineHeight,
                alignItems: alignItems,
                marginRight: marginRight,
                marginLeft: marginLeft,
                marginBottom: marginBottom,
                marginTop: marginTop,
                margin: margin,
                borderColor: 'red',
                borderWidth: 0
            }
        });

        return (
            <Text style = {[styles.textStyle, style]}>{text}</Text>
        );
    }
};

