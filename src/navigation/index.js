import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { View, Text } from 'react-native'
import { custom } from '../constants'
import Login from '../screens/Login'
import Dashboard from '../screens/Dashboard'



const AppStackNavigator = createStackNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: ({ navigation }) => {
            return {
                headerStyle: {
                    height: custom.sizes.base * 4,
                    backgroundColor: '#00CCFF',
                    borderBottomColor: "#efefef",
                    elevation: 5, // for android,
                },
                // headerTransparent: true,
                headerTitle: "Dashboard",
                headerTitleStyle: {
                    fontSize: 18, color: "#FFF", left: '40%'
                },
                headerLeftContainerStyle: {
                    paddingLeft: 24
                },
                headerRightContainerStyle: {
                    paddingRight: 24
                },
            }
        }
    }
})

const RootStack = createSwitchNavigator({
    Login: {
        screen: Login
    },
    DashboardStack: {
        screen: AppStackNavigator
    }
}, {
    initialRouteName: 'Login'
})

const Navigation = createAppContainer(RootStack)

export default Navigation