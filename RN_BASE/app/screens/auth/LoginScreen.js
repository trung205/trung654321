import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import userState from '../../redux/reducers/UserReducer'
import { usernameChange, passwordChange } from '../../redux/actions/index'
import { requestLogin } from '@api'
import reactotron from 'reactotron-react-native'
import { LOGIN_TYPE } from '../../constants/Constant'
import NavigationUtil from '../../navigation/NavigationUtil';
import AsyncStorage from '@react-native-community/async-storage'

export class LoginScreen extends Component {

    state = {
        username: '0367173695',
        password: '111111'
    }

    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Image
                    style={styles.logo_func}
                    source={require('../../assets/images/ic_logo3x.png')} />
                <TextInput
                    style={styles.place_phone}
                    placeholder='Nhập số điện thoại'
                    value={this.state.username}
                    onChangeText={newPhone => (
                        this.setState({
                            ...this.state,
                            username : newPhone
                        })
                    )}
                />
                <TextInput
                    style={styles.place_pass}
                    placeholder='Nhập mật khẩu'
                    value={this.state.password}
                    onChangeText={newPass => (
                        this.setState({
                            ...this.state,
                            password : newPass
                        } )
                    )}
                />
                <View style={styles.place_option}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text1}>Chưa có tài khoản?</Text>
                        <Text style={styles.text2}>Đăng ký</Text>
                    </View>
                    <Text style={styles.text1}>Quên mật khẩu?</Text>
                </View>
                <TouchableOpacity
                    onPress={async () => {
                        try {
                            const res = await requestLogin({
                                "value": this.state.username,
                                "password": this.state.password,
                                "type": LOGIN_TYPE.type
                            })
                            //console.log("res")
                            let a = await AsyncStorage.setItem("token", res.data.token)
                            NavigationUtil.navigate('Main')
                        } catch (err) {
                            console.log(err)
                        }
                    }}>
                    <Text style={styles.login_place}>
                        Đăng nhập
                    </Text>
                </TouchableOpacity>
                <View style={styles.or_area}>
                    <View style={{ flex: 1, height: 0.4, backgroundColor: '#707070' }}></View>
                    <Text style={styles.text3}>hoặc</Text>
                    <View style={{ flex: 1, height: 0.4, backgroundColor: '#707070' }}></View>
                </View>
                <View style={styles.other_space}>
                    <Image source={require('../../assets/images/ic_fb3x.png')} />
                    <Image source={require('../../assets/images/ic_gg3x.png')} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo_func: {
        marginTop: 50,
    },
    place_phone: {
        width: '87%',
        borderBottomWidth: 0.5,
        marginTop: 40,
    },
    place_pass: {
        width: '87%',
        borderBottomWidth: 0.5,
        marginTop: 30
    },
    place_option: {
        width: '87%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12.5
    },
    text1: {
        fontFamily: 'Roboto-Regular',
        fontSize: 12,

    },
    text2: {
        marginLeft: 1,
        fontFamily: 'Roboto-Medium',
        fontSize: 12,
        color: '#12A74E',
        textDecorationLine: 'underline',

    },
    login_place: {
        fontSize: 16,
        fontFamily: 'Roboto-Light',
        width: '88%',
        height: 46,
        color: '#FFFFFF',
        paddingHorizontal: 133,
        backgroundColor: '#12A74E',
        paddingVertical: 12,
        marginTop: 35,
        borderRadius: 30,
    },
    or_area: {
        flexDirection: 'row',
        marginTop: 23,
        width: '87%',
        height: 19,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text3: {
        fontFamily: 'Roboto-Italic',
        fontSize: 14,
        marginHorizontal: 4,
    },
    other_space: {
        marginTop: 43,
        width: '45%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    }



})

const mapStateToProps = (state) => ({
    userState: state.userReducer
})

const mapDispatchToProps = {
    usernameChange, passwordChange
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
// console.log(typeof userState)


// import React, { Component } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
// import NavigationUtil from '../../navigation/NavigationUtil';
// import { GoogleSignin , statusCodes} from '@react-native-community/google-signin';
// GoogleSignin.configure();
// //  GoogleSignin.configure({
// //             scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
// //             webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
// //             offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
// //             hostedDomain: '', // specifies a hosted domain restriction
// //             loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
// //             forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
// //             accountName: '', // [Android] specifies an account name on the device that should be used
// //             // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
// //         });
// export default class LoginScreen extends Component {

//     // Somewhere in your code
//     _ggLogin = async () => {
//         try {
//             await GoogleSignin.hasPlayServices();
//             const userInfo = await GoogleSignin.signIn();
//             this.setState({ userInfo });
//             console.log(userInfo)
//             NavigationUtil.navigate("Main")

//         } catch (error) {
//             console.log(error)
//             if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//                 // user cancelled the login flow
//             } else if (error.code === statusCodes.IN_PROGRESS) {
//                 // operation (e.g. sign in) is in progress already
//             } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//                 // play services not available or outdated
//             } else {
//                 // some other error happened
//             }
//         }
//     };

//     _fbLogin() {
//         LoginManager.logInWithPermissions(["public_profile"]).then(
//             function (result) {
//                 if (result.isCancelled) {
//                     console.log("Login cancelled");
//                 } else {
//                     AccessToken.getCurrentAccessToken().then(
//                         (data) => {
//                             console.log(data.accessToken.toString())
//                             NavigationUtil.navigate("Main")
//                         }
//                     )
//                 }
//             },
//             function (error) {
//                 console.log("Login fail with error: " + error);
//             }
//         );
//     }
//     render() {
//         return (
//             <View style={{
//                 flex: 1,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//             }}>
//                 <TouchableOpacity
//                     onPress={() => {
//                         this._fbLogin()
//                     }}>
//                     <Text> Facebook Login </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={{
//                         marginTop: 50
//                     }}
//                     onPress={() => {
//                         this._ggLogin()
//                     }}>
//                     <Text> Google Login </Text>
//                 </TouchableOpacity>

//             </View>
//         );
//     }
// }
