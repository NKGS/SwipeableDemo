import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { TextBoxView } from '../common/TextBoxView';
import { Button } from '../common/Button';
import { TextView } from '../common/TextView';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            state: '',
            email: '',
            pswd: '',
            confirmPswd: ''
        }
    }

    checkIfEmpty(val){
        val = val.trim();
        return (val == "" || val == null) ? true : false;
    }

    validateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
          return true;
        }
        return false;
      }

    validateFields() {
        let chkEmail = this.checkIfEmpty(this.state.email);
        let chkName = this.checkIfEmpty(this.state.name);
        let chkState = this.checkIfEmpty(this.state.state);
        let chkPassword = this.checkIfEmpty(this.state.pswd);
        let chkCnfrmPswd = this.checkIfEmpty(this.state.confirmPswd);

        //if(chkEmail || chkName || chkState || chkPassword || chkCnfrmPswd){
        //    alert("Please enter all fields");
        //}else 
        if(!this.validateEmail(this.state.email)){
            alert("Enter correct email");
        }else if(this.state.pswd !== this.state.confirmPswd){
            alert("Incorrect passwords");
        }else{
            //Home is th key used in routes while defining Scene
            Actions.Home({username: this.state.email});
        }
    }

    render() {
        return (<View style={styles.body}>
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
                <ScrollView style={{ flex: 12 , borderWidth:1,borderColor:'green'}}>
                    <View style={{ borderWidth:0,borderColor:'green' }}>
                        <TextView text="Register" fontSize={40} textColor='white' alignText='center' style={{ marginRight:10 , marginTop: 30}}/>
                    </View>
                    <View style={styles.viewStyle}>
                        <TextView text="Name : " fontSize={18} textColor='white' alignText='left' style={{ marginRight:10 , marginBottom:5}}/>
                        <TextBoxView
                            placeholder="Name"
                            borderBottomColor="white"
                            onChangeText={(name) => { this.setState({name: name}) }}
                            value={this.state.name} width={undefined} returnKeyType={'next'} keyboardType="email-address"
                            onSubmitEditing={() => {
                                this.stateFieldRef.focus()
                            }}
                        />
                    </View>

                    <View style={styles.viewStyle}>
                        <TextView text="State : " fontSize={18} textColor='white' alignText='left' style={{ marginRight:10 , marginBottom:5}}/>
                        <TextBoxView
                            // setStateFieldRef={(stateFieldRef) => {
                            //     this.setStateFieldRef(stateFieldRef);
                            // }}
                            placeholder="State"
                            borderBottomColor="white"
                            onChangeText={(state) => { this.setState({state: state}) }}
                            value={this.state.state} width={undefined} returnKeyType={'next'} keyboardType="email-address"
                            onSubmitEditing={() => {
                                //this.usernameFieldRef.focus()
                            }}
                        />
                    </View>

                    <View style={styles.viewStyle}>
                        <TextView text="Username : " fontSize={18} textColor='white' alignText='left' style={{ marginRight:10 , marginBottom:5}}/>
                        <TextBoxView
                            // setUsernameFieldRef={(usernameFieldRef) => {
                            //     this.setUsernameFieldRef(usernameFieldRef);
                            // }}
                            placeholder="Username"
                            borderBottomColor="white"
                            onChangeText={(username) => { this.setState({email: username}) }}
                            value={this.state.username} width={undefined} returnKeyType={'next'} keyboardType="email-address"
                            onSubmitEditing={() => {
                                //this.passwordFieldRef.focus()
                            }}
                        />
                    </View>

                    <View style={styles.viewStyle}>
                        <TextView text="Password : " fontSize={18} textColor='white' alignText='left' style={{ marginRight:10 , marginBottom:5}} />
                        <TextBoxView
                            // setPasswordFieldRef={(passwordFieldRef) => {
                            //     this.setPasswordFieldRef(passwordFieldRef);
                            // }}
                            placeholder="Password"
                            borderBottomColor="white"
                            secureTextEntry={true}
                            onChangeText={(password) => { this.setState({pswd: password}) }}
                            value={this.state.pswd} width={undefined} returnKeyType={'next'} keyboardType="email-address"
                            onSubmitEditing={() => {
                                //this.cnfrmPasswordFieldRef.focus()
                            }}
                        />
                    </View>

                    <View style={styles.viewStyle}>
                        <TextView text="Confirm Password : " fontSize={18} textColor='white' alignText='left' style={{ marginRight:10 , marginBottom:5}}/>
                        <TextBoxView
                            // setCnfrmPasswordFieldRef={(cnfrmPasswordFieldRef) => {
                            //     this.setCnfrmPasswordFieldRef(cnfrmPasswordFieldRef);
                            // }}
                            placeholder="Confirm Password"
                            borderBottomColor="white"
                            secureTextEntry={true}
                            onChangeText={(confirmPswd) => { this.setState({confirmPswd: confirmPswd}) }}
                            value={this.state.confirmPswd} width={undefined} returnKeyType={'done'} keyboardType="email-address"
                            onSubmitEditing={() => {
                                //this.passwordFieldRef.focus()
                            }}
                        />
                    </View>

                    <View style={styles.viewStyle}>
                        <Button text="Login" onPress = {() => this.validateFields()}/>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>);
    }

    setPasswordFieldRef = (ref) => {
        this.passwordFieldRef = ref;
    }

    setStateFieldRef = (ref) => {
        this.stateFieldRef = ref;
    }

    setUsernameFieldRef = (ref) => {
        this.usernameFieldRef = ref;
    }

    setCnfrmPasswordFieldRef = (ref) => {
        this.cnfrmPasswordFieldRef = ref;
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        borderWidth: 0,
        borderColor: 'red'
    },
    viewStyle: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginTop:20,
        marginBottom:20,
        marginLeft:20,
        marginRight:20
    }
});
