import React, { Component } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    ActivityIndicator
} from 'react-native'
import NavigationUtil from '../../navigation/NavigationUtil'
import i18 from '@i18';
import AsyncStorage from "@react-native-community/async-storage"
import { SCREEN_ROUTER } from '@app/constants/Constant'

// import { connect } from 'react-redux'

export default class AuthLoadingScreen extends Component {

    componentDidMount() {
         setTimeout( async() => {
            try {
                const token = await AsyncStorage.getItem("token")
                if (token != null) {
                    NavigationUtil.navigate(SCREEN_ROUTER.HOME)
                } else {
                    NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)
                }
            } catch (error) {
                console.log(error)
            }
        }, 1)
        // load something and check login
        //cach su dung call back
        // AsyncStorage.getItem('token', (err, token) => {
        //     if (token != null) {
        //         NavigationUtil.navigate(SCREEN_ROUTER.HOME)
        //     } else { 
        //         NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)
        //     }
        // })


    }

    render() {
        //console.log("dsadkjdasj")
        return (
            <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View>
                    <ActivityIndicator />
                    <Text>{i18.t('user')}</Text>
                </View>
            </SafeAreaView>
        )
    }



}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

// export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)
