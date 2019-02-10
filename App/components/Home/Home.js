import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Animated } from 'react-native';
import { TextView } from '../common/TextView';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Button } from '../common/Button';
import { RectButton } from 'react-native-gesture-handler';
import { StyleSwipeableRow } from './StyleSwipeableRow';

const SwipeableRow = ({ item, index }) => {
        return (
            <StyleSwipeableRow item={item} index={index}>
                <Row item={item} />
            </StyleSwipeableRow>
        );
    
};

const Row = ({ item }) => (
    <RectButton style={{ borderWidth: 1, borderColor: 'white' }}>
        <Animated.Text
            style={styles.txtColor}>
            {item.key}
        </Animated.Text>
    </RectButton>
);

export default class Home extends Component {

    onRejectPress(item) {
        alert("rejected");
    }

    render() {
        var val = "Welcome "+this.props.username;
        return (<View style={styles.body}>
            <TextView text={val} fontSize={22} textColor='white' alignText='left' style={{ marginRight:10 , marginBottom:15}}/>

            <View style={styles.liststyle}>
                <FlatList
                    data={[
                        { key: 'Apple' },
                        { key: 'Microsoft' },
                        { key: 'Facebook' },
                        { key: 'Whatsapp' },
                    ]}
                    renderItem={({ item, index }) =>
                        <SwipeableRow item={item} index={index} />
                    } />
            </View>
        </View>);
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        marginTop: 27,
    },
    txtColor: {
        color: 'white',
        fontSize: 20,
        marginBottom:5,
        marginTop:5,
        marginLeft:10
    },
    liststyle: {
        flex: 1,
        borderWidth: 0,
        borderColor: 'red'
    }
});