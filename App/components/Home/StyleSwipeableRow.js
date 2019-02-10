import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Animated } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';

export class StyleSwipeableRow extends Component {
    approve = () => {
        alert("Approved :: " + this.props.item.key + " , index :: " + this.props.index);
    }

    reject = () => {
        alert("Reject :: " + this.props.item.key + " , index :: " + this.props.index);
    }

    renderRightActions = (progress, dragX) => {
        const trans = dragX.interpolate({
            inputRange: [-80, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });
        return (
            <RectButton style={{ borderWidth: 1, borderColor: 'red' }} onPress={this.reject}>
                <Animated.Text
                    style={[
                        styles.txtColor,
                        {
                            transform: [{ translateX: trans }],
                        },
                    ]}>
                    Reject
            </Animated.Text>
            </RectButton>

        );
    };

    renderLeftActions = (progress, dragX) => {
        const trans = dragX.interpolate({
            inputRange: [0, 80],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        return (
            <RectButton style={{ borderWidth: 1, borderColor: 'green' }} onPress={this.approve}>
                <Animated.Text
                    style={[
                        styles.txtColor,
                        {
                            transform: [{ translateX: trans }],
                        },
                    ]}>
                    Approve
            </Animated.Text>
            </RectButton>

        );
    };

    render() {
        const { children } = this.props;
        return (
            <Swipeable
                friction={2}
                leftThreshold={80}
                rightThreshold={40}
                renderLeftActions={this.renderLeftActions}
                renderRightActions={this.renderRightActions}>
                {children}
            </Swipeable>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        marginTop: 15,
    },
    txtColor: {
        color: 'white',
        fontSize: 20
    },
    liststyle: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red'
    }
});