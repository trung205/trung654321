import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getHome, getHomeSuccess, getHomeFail } from '@action'
import reactotron from 'reactotron-react-native';
import { requestHomeData, requestUserInfo } from '@app/constants/Api';
import { Header } from 'react-native-elements'

class HomeScreen extends Component {


     componentDidMount() {
         this.props.getHome()
    }

    render() {
        const { homeState } = this.props;

        if (homeState.isLoading) {
            return <ActivityIndicator style={{
                color: 'red',
                size: 'large',

            }} />
        }
        if (homeState.error) {
            return
            <View>
                co loi xay ra
                </View>
        }

        return (
            <View style={{
                flex: 1,
                backgroundColor: '#EFEFEF'
                //justifyContent: 'center', 
                //alignItems: 'center'
            }}>
                <Header
                    statusBarProps={{ barStyle: 'dark-content', translucent: true, backgroundColor: 'transparent' }}
                    placement='left'
                    containerStyle={{ backgroundColor: '#12A74E' }}
                    centerComponent={
                        <Text>
                            Xin chào
                </Text>} />
                <View style={styles.container}>
                    <ScrollView style={{ width: '100%', backgroundColor: 'white' }}>
                        {this._funcBlock1()}
                        {this._funcBlock2()}
                        {this._funcBlock3()}

                    </ScrollView>
                </View>
            </View>
        );
    }

    _funcBlock1() {
        return (
            <View style={styles.menu}>
                <View style={styles.info_coin}>

                    <Text style={styles.text_info_coin}>
                        Điểm tích lũy
                        </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Image
                            style={{ marginTop: 5 }}
                            source={require('../assets/images/ic_coin3x.png')} />
                        <Text style={styles.text_coin}>2000</Text>
                        <Image
                            style={{ marginTop: 5 }}
                            source={require('../assets/images/ic_arrow3x.png')} />
                    </View>

                </View>

                <View style={styles.icon_selec}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '83%' }}>
                        {this._menuSpace("Tích điểm", require("../assets/images/ic_tichdiem3x.png"))}
                        {this._menuSpace("Sử dụng điểm", require("../assets/images/ic_usecoin3x.png"))}
                        {this._menuSpace("Tiện ích", require("../assets/images/ic_ulti3x.png"))}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '88%' }}>
                        <View style={{ marginLeft: 16 }}>
                            {this._menuSpace("Hỏi-đáp", require("../assets/images/ic_qa3x.png"))}
                        </View>
                        <View style={{ marginLeft: 12 }}>
                            {this._menuSpace("Đặt hàng", require("../assets/images/ic_order3x.png"))}
                        </View>
                        <View style={{ marginRight: 5, marginLeft: 2.5 }}>
                            {this._menuSpace("Bảo hành", require("../assets/images/ic_bh3x.png"))}
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    _funcBlock2() {
        const { homeState } = this.props;
        //console.log(homeState.data.listProduct, "trungdhgh")
        //console.log(homeState.isLoading, "trung1")
        return (
            <View style={{ flex: 1, marginTop: 7 }}>
                <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 13, justifyContent: 'space-between' }}>
                    <Text style={styles.text2}>SẢN PHẨM</Text>
                    <Text style={styles.text3}>Tất cả</Text>
                </View>
                <View style={{
                    width: '100%',
                    height: 227,
                    //backgroundColor: 'violet'
                }}>
                    <ScrollView horizontal={true}>
                        {homeState.data.listProduct.map(product => {
                            return this._productItem(product)
                        })}
                    </ScrollView>
                </View>
            </View>
        )
    }

    _funcBlock3() {
        const { homeState } = this.props;
        return (
            <View style={styles.container3}>
                <View style={styles.space_info}>
                    <Text
                        style={styles.text_con31}
                    >TIN TỨC</Text>
                    <TouchableOpacity>
                        <Text style={styles.text_con32}>Tất cả</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%' }}>
                    {homeState.data.listNews.map(news => {
                        return this._newsItem(news)
                    })}
                </View>
            </View>
        )
    }

    _newsItem(news) {

        return (
            <View style={styles.space_news}>
                <Image
                    style={{ width: 91, height: 91, resizeMode: 'contain', borderRadius: 10 }}
                    source={{ uri: news.urlImage }} />
                <View style={{ marginLeft: 13, flex: 1, paddingTop: 5 }}>
                    <TouchableOpacity>
                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 15 }}>{news.title}</Text>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 5, fontFamily: 'Roboto-Italic', fontSize: 12 }}>{news.date}</Text>
                </View>
            </View>

        )

    }

    _productItem(product) {
        //console.log(product, "dadgdfga")
        return (
            <TouchableOpacity>
                <View style={styles.window_list}>
                    <Image
                        style={{ width: 150, height: 121 }}
                        source={{ uri: product.image }} />
                    <Text style={{ marginLeft: 8 }} >{product.name}</Text>
                    <View
                        style={{ flexDirection: 'row' }}>
                        <Image
                            style={{
                                width: 14,
                                height: 14,
                                margin: 6,
                                resizeMode: 'contain',
                            }}
                            source={require("../assets/images/ic_mac3x.png")} />
                        <Text style={{ color: '#F70029' }}>{product.price}đ</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }



    _menuSpace(title, imagePath) {
        return (
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={imagePath} />
                <Text
                    style={styles.word_function}
                >{title}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        alignItems: 'center',
        //width: 67
    },

    menu: {
        width: '95%',
        height: 200,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        margin: 10,
    },
    info_coin: {
        height: '22.5%',
        marginHorizontal: 8,
        borderBottomWidth: 0.5,
        //justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    text_info_coin: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',


    },
    text_coin: {
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        color: '#EA4335',
        marginLeft: 5.7,
        marginBottom: 3,
        marginRight: 9
    },
    icon_selec: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'space-around',
        //flexWrap: 'wrap',
        //backgroundColor: 'black'

    },
    word_function: {
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        marginTop: 1,
    },
    text2: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        color: '#EA4335'
    },
    text3: {
        fontSize: 12,
        fontFamily: 'Roboto-Regular',
        color: '#EA4335',
        marginTop: 4,
        marginRight: 25
    },
    window_list: {
        width: 150,
        height: 210,
        backgroundColor: 'white',
        marginLeft: 13,
        marginTop: 8,
        // alignItems:'center'
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    container3: {
        width: '100%',
        marginTop: 5,

    },
    space_info: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 13,
        marginLeft: 18,
        //backgroundColor: 'violet',
        alignItems: 'flex-end'


    },
    text_con31: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16
    },
    text_con32: {
        fontSize: 12,
        fontFamily: 'Roboto-Regular',
        color: '#EA4335',
        // alignContent: 'flex-end',
    },
    space_news: {
        width: '92%',
        marginTop: 13,
        marginLeft: 18,
        flexDirection: 'row',
        //backgroundColor: 'violet'
    },


})



const mapStateToProps = (state) => {
    //console.log(state, "dsas")
    return{
        homeState: state.homeReducer
    }
}

const mapDispatchToProps = {
    getHome,
    getHomeSuccess,
    getHomeFail
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
