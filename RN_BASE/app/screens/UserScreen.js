import React, { Component } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getInfo, getInfoSuccess, getInfoFail } from '@action'
import { requestUserInfo } from '@api'
import { Header } from 'react-native-elements'

export class UserScreen extends Component {

    componentDidMount() {
        this.props.getInfo()
    }

    render() {
        const { userState } = this.props
        if (userState.isLoading) {
            return (
                <ActivityIndicator
                    style={{
                        color: 'red',
                        size: 'large',
                    }} />
            )
        }
        if (userState.error) {
            return (
                <View>
                    <Text>   có lỗi xảy ra</Text>
                </View>
            )
        }
        return (
            <View style={{ flex: 1, backgroundColor: '#EFEFEF' }}>
                <Header
                    statusBarProps={{ barStyle: 'dark-content', translucent: true, backgroundColor: 'transparent' }}
                    placement='left'
                    containerStyle={{ backgroundColor: '#12A74E' }}
                    centerComponent={
                        <Text style={styles.text_header}>
                            Tài khoản
             </Text>} />
                <ScrollView>
                    {this._funcUser1(userState.data.data)}
                    {this._funcUser2(userState.data.data)}
                    {this._funcUser3()}

                </ScrollView>
            </View>
        )
    }

    _funcUser1(data) {
        return (
            <View style={styles.space_info}>
                <Image
                    style={styles.user_avatar}
                    source={{ uri: data.urlAvatar }} />
                <View style={{ flex: 1, paddingLeft: 11 }}>
                    <View style={{ width: '100%', flexDirection: 'row', paddingTop: 3, height: '48%' }}>
                        <Text style={styles.name_id}>
                            {data.customerName}
                        </Text>
                        <Text style={styles.name_tag}>
                            {data.rankName}
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.edit_info}>
                            Chỉnh sửa thông tin
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    _funcUser2(data) {
        return (
            <View style={styles.space_service}>
                <View style={{ marginTop: 21, width: '85%', }}>
                    {this._listService('Đơn hàng', require("../assets/images/ic_donhang3.png"))}
                    {this._listService('Cửa hàng', require("../assets/images/ic_store3x.png"))}
                    {this._listService('Lịch sử giao dịch', require("../assets/images/ic_history3x.png"))}
                    {this._listService('Trở thành đại lý', require("../assets/images/ic_rocket3x.png"))}
                    {this._listService('Thông tin bảo hành', require("../assets/images/ic_guarante3x.png"))}
                    {this._listService('Thông tin về Daiichi', require("../assets/images/ic_daichi_infor3x.png"))}
                    {this._listService('Đăng xuất', require("../assets/images/ic_logout3x.png"), true)}
                </View>
            </View>
        )
    }

    _funcUser3() {
        return (
            <View style={styles.space_score}>
                <View style={{ flexDirection: 'row', marginTop: 6, alignItems: 'center' }}>
                    <Text style={styles.text_score1}>Điểm tích lũy:</Text>
                    <Text style={styles.text_score2}>2000</Text>
                </View>
                <Image
                    style={styles.rank_progress}
                    source={require("@image/image_rank3x.png")} />
                <View style={styles.space_text_rank}>
                    <View style={styles.test1}>
                        <Text style={styles.text_rank}>Thành viên</Text>
                        <Text style={styles.text_rank}>Bạc</Text>
                    </View>
                    <View style={styles.test2}>
                        <Text style={styles.text_rank1}>Vàng</Text>
                        <Text style={styles.text_rank1}>Bạch kim</Text>
                    </View>

                </View>
                <View style={styles.space_decal}>

                    <View style={styles.red_line}></View>
                    <Text style={styles.rank_now}>Bạc</Text>
                    <View style={styles.red_line}></View>

                </View>
                <Text style={styles.notify_rank}>
                    Bạn đang là thành viên bậc Bạc của Daiichi
                </Text>
                <Text style={styles.text_right}>
                    Quyền lợi:
                </Text>
                <View style={{ marginBottom: 18 }}>
                    {this._listRight('Chiết khấu 5% khi mua sản phẩm')}
                    {this._listRight('Có nhiều ưu đãi và chương trình')}
                </View>
            </View>
        )
    }

    _listRight(title) {
        return (
            <View style={styles.list_right}>
                <View style={styles.black_dot}>

                </View>
                <Text style={styles.info_right}>
                    {title}
                </Text>
            </View>
        )
    }

    _listService(title, imagePath, isLast = false) {
        return (

            <View>
                <TouchableOpacity>
                    <View style={styles.list_services}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.icon_service}
                                source={imagePath} />
                            <Text style={styles.word_service}>
                                {title}
                            </Text>

                        </View>
                        <Image
                            style={styles.image_arrow}
                            source={require('../assets/images/Path31_3x.png')} />
                    </View>
                </TouchableOpacity>
                {!isLast && <View style={styles.line}></View>}
            </View>
        )
    }

}



const styles = StyleSheet.create({
    text_header: {
        fontSize: 18,
        fontFamily: 'Roboto-Regular',
        color: '#FFFFFF'
    },
    space_info: {
        width: '100%',
        marginTop: 5,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        height: 75
    },
    user_avatar: {
        width: 50,
        height: 50,
        marginTop: 13,
        marginLeft: 25,
        resizeMode: 'cover'
    },
    name_id: {
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        lineHeight: 40,
    },
    name_tag: {
        fontFamily: 'Roboto-Regular',
        fontSize: 10,
        color: '#FFFFFF',
        paddingVertical: 2,
        paddingHorizontal: 8,
        backgroundColor: '#EA4335',
        borderRadius: 3,
        marginLeft: 10,
        marginTop: 11,
        marginBottom: 4.5
    },
    edit_info: {
        fontFamily: 'Roboto-Regular',
        color: '#707070',
        fontSize: 14,

        justifyContent: 'flex-start'

    },
    space_service: {
        marginTop: 5,
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    list_services: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        alignItems: 'center'
    },
    word_service: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        marginLeft: 15
    },
    image_arrow: {
        width: 8.08,
        height: 16.08
    },
    line: {
        width: '100%',
        height: 0.5,
        // marginLeft: 22,
        // marginRight: 22.5,
        backgroundColor: '#8B8B8B',
        marginBottom: 10

    },
    icon_service: {
        width: 16.64,
        height: 22.19,
        resizeMode: 'contain'
    },
    space_score: {
        flex: 1,
        marginTop: 9,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    text_score1: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        color: '#EA4335',
        marginTop: 1
    },
    text_score2: {
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        color: '#EA4335',
        marginLeft: 6,
    },
    rank_progress: {
        width: 289,
        height: 20,
        marginTop: 18,
        resizeMode: 'contain'
    },
    space_text_rank: {
        width: 331,
        marginTop: 5,
        flexDirection: 'row',
        //justifyContent: 'space-between'
    },
    text_rank: {
        fontSize: 12,
        fontFamily: 'Roboto-Regular',
        color: '#09AC29'
    },

    text_rank1: {
        fontSize: 12,
        fontFamily: 'Roboto-Regular',
        color: '#707070'
    },

    test1: {
        width: 129,
        marginLeft: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor:'violet'

    },
    test2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 130,
        marginLeft: 67,
        //backgroundColor:'violet' 
    },
    space_decal: {
        width: '48%',
        flexDirection: 'row',
        //backgroundColor: 'violet',
        justifyContent: 'center',
        marginTop: 18,
        alignItems: 'center'
    },
    rank_now: {
        height: 24,
        paddingHorizontal: 12,
        justifyContent: 'center',
        fontFamily: "Roboto-Medium",
        color: '#FFFFFF',
        fontSize: 16,
        backgroundColor: '#EC1C25'
    },
    red_line: {
        flex: 1,
        height: 0.5,
        backgroundColor: 'red'
    },
    notify_rank: {
        lineHeight: 23,
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        marginTop: 16
    },
    text_right: {
        fontSize: 14,
        fontFamily: 'Roboto-Medium',
        marginTop: 4,
        lineHeight: 23,
    },
    list_right: {
        // marginLeft: 77,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    black_dot: {
        width: 4,
        height: 4,
        backgroundColor: '#000000'
    },
    info_right: {
        marginLeft: 8,
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        lineHeight: 23,
    }
})


const mapStateToProps = (state) => ({
    userState: state.userState
})

const mapDispatchToProps = {
    getInfo, getInfoSuccess, getInfoFail
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)



























// import React, { Component } from 'react';
// import { Text, View, TouchableOpacity, Alert, Image } from 'react-native';
// import i18 from '@i18';
// import theme from '@theme'
// import R from '@R'
// import NavigationUtil from '@app/navigation/NavigationUtil';
// import { SCREEN_ROUTER } from '@app/constants/Constant';
// import DropdownAlertUtil from '@app/components/DropdownAlertUtil';
// import OneSignal from "react-native-onesignal";
// import reactotron from 'reactotron-react-native';
// import WHeader from '@app/components/WHeader'
// export default class UserScreen extends Component {

//     async componentDidMount() {

//     }

//     render() {
//         return (
//             <View style={{
//                 flex: 1,
//                 // justifyContent: 'center',
//                 // alignItems: 'center'
//             }}>
//                 <WHeader
//                     titleHeader = {R.strings.user}
//                     color = {theme.colors.headerTitle}
//                 />
//                 <TouchableOpacity
//                     onPress={() => {
//                         OneSignal.getPermissionSubscriptionState((status) => {
//                             userID = status.userId;
//                             DropdownAlertUtil.showAlert("Thông báo", "DeviceID của OneSignal là : " + userID, () => {
//                                 alert("tap action")
//                             })
//                         });
//                     }}>
//                     <Text
//                         style={theme.fonts.bold17}
//                     >{R.strings.update_user_info}</Text>
//                     <Image
//                         style={{
//                             width: 100,
//                             height: 100
//                         }}
//                         source={R.images.ic_home}
//                     />
//                 </TouchableOpacity>
//             </View>
//         )
//     }
// }
