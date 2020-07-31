import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, KeyboardAvoidingView, Platform, Alert, Keyboard } from 'react-native'
import LinearGradient from "react-native-linear-gradient"
import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { custom } from '../constants/index'
import { connect } from 'react-redux'
import { addEmail, addPassword, loginSuccess, loginFailure } from '../actions/users'


class Login extends Component {

    constructor() {
        super()
    }

    handleEmail = (text) => {
        let email = text
        this.props.dispatch(addEmail(email))
    }

    handlePassword = (text) => {
        let password = text
        this.props.dispatch(addPassword(password))
    }

    handleSubmit = () => {
        let authenticatedEmail = "hruday@gmail.com"
        let authenticatedPassword = "hruday123"


        const { email, password, redirect } = this.props.user
        if (email.length == 0) {
            let error = "Please add a valid Email"
            this.props.dispatch(loginFailure(error))
        } else if (password.length == 0) {
            let error = "Please enter a password"
            this.props.dispatch(loginFailure(error))
        } else if (email != authenticatedEmail) {
            let error = "Invalid Email or Password"
            this.props.dispatch(loginFailure(error))
        } else if (password != authenticatedPassword) {
            let error = "Invalid Email or Password"
            this.props.dispatch(loginFailure(error))
        } else {
            this.props.dispatch(loginSuccess())
            Keyboard.dismiss()
            redirect && this.props.navigation.navigate("Dashboard")
        }

    }


    render() {

        const { user } = this.props
        return (
            <SafeAreaView>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
                    <LinearGradient style={styles.mainContainer} colors={["#00CCFF", "#3b5998"]} start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}>


                        <View style={styles.container}>
                            {user.error && Alert.alert(user.error)}
                            <View style={styles.textContainer} />


                            <View style={styles.inputContainer}>
                                <View style={{ width: '100%', height: '20%', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 20, color: '#000' }}>Please Login to Continue</Text>
                                </View>
                                <View style={{ width: '100%', height: '80%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <Input
                                        placeholder="Email ID"
                                        placeholderTextColor="#000"
                                        leftIcon={
                                            <Icon
                                                name="email-outline"
                                                color="#A39DA6"
                                                size={30}
                                            />
                                        }
                                        value={user.email}
                                        onChangeText={this.handleEmail}
                                        underlineColorAndroid="transparent"
                                        inputContainerStyle={{ width: "90%", borderColor: '#FFF', borderRadius: 25, elevation: 5, backgroundColor: "#FFF" }}
                                        containerStyle={{ alignItems: 'center' }}

                                    />
                                    <Input
                                        placeholder="Password"
                                        placeholderTextColor="#000"
                                        leftIcon={
                                            <MaterialIcon
                                                name='lock-outline'
                                                color="#A39DA6"
                                                size={30}
                                            />
                                        }
                                        value={user.password}
                                        onChangeText={this.handlePassword}
                                        secureTextEntry={true}
                                        underlineColorAndroid="transparent"
                                        inputContainerStyle={{ width: "90%", borderColor: '#FFF', borderRadius: 25, elevation: 5, backgroundColor: "#FFF" }}
                                        containerStyle={{ alignItems: 'center' }}
                                    />

                                    <Button
                                        title="LOGIN"
                                        titleStyle={{ fontSize: 20, paddingRight: 60 }}
                                        ViewComponent={LinearGradient} // Don't forget this!
                                        linearGradientProps={{
                                            colors: ['#00CCFF', '#3b5998'],
                                            start: { x: 0, y: 1 },
                                            end: { x: 1, y: 0 },
                                        }}
                                        buttonStyle={{ width: "70%", height: 50, elevation: 5, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}
                                        containerStyle={{ alignItems: 'center' }}
                                        loading={false}
                                        loadingStyle={{ paddingRight: 60 }}
                                        disabled={false}
                                        onPress={this.handleSubmit}
                                    />
                                </View>
                            </View>
                            <View style={styles.buttonContainer} />


                        </View>

                    </LinearGradient>
                </KeyboardAvoidingView>
            </SafeAreaView>




        )
    }
}

const mapStateToProps = (state) => {
    console.log(state, 'state value')
    return { user: state.user }
}

export default connect(mapStateToProps)(Login)

const styles = StyleSheet.create({
    mainContainer: {
        height: custom.sizes.height,
        width: custom.sizes.width
    },
    container: {
        height: custom.sizes.height,
        width: custom.sizes.width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        height: custom.sizes.height * 0.25,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        color: '#FFF',
        fontSize: 40,
        lineHeight: 40
    },
    inputContainer: {
        width: custom.sizes.width - 40,
        height: custom.sizes.height * 0.5,
        backgroundColor: "#FFF",
        elevation: 4,
        borderRadius: 10
    },
    buttonContainer: {
        width: custom.sizes.width - 40,
        height: custom.sizes.height * 0.25,
    }
})
