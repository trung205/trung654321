import React, { Component } from 'react'
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProduct, getProductSuccess, getProductFail } from '@action'
import { requestProductData } from '@api'
import { Header } from 'react-native-elements'
import reactotron from 'reactotron-react-native'

class ProductScreen extends Component {

    componentDidMount() {
        //    console.log('fjakhdf')
        this.props.getProduct()
        //     try {
        //         res = await requestProductData()
        //         this.props.getProductSuccess(res)
        //     } catch (error) {
        //         alert('co loi')
        //     }
        //this.setState(this.props.productState)
    }
    componentDidUpdate() {
        this.props.productState.data
    }
    // componentWillMount() {
    //     this.props.getProduct()
    // }


    render() {
        const { productState } = this.props;
        if (productState.isLoading) {
            <ActivityIndicator
                style={{
                    color: 'red',
                    size: 'large',
                }} />
        }
        if (productState.error) {
            <View>
                co loi xay ra
            </View>
        }
        // if (productState.data) {
        reactotron.log(productState.data)
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#EFEFEF'
            }}>
                <Header
                    statusBarProps={{ barStyle: 'dark-content', translucent: true, backgroundColor: 'transparent' }}
                    placement='left'
                    containerStyle={{ backgroundColor: '#12A74E' }}
                    centerComponent={
                        <Text style={styles.funcBlock1}>
                            Sản phẩm
                        </Text>} />
                <View style={styles.container1}>
                    <View style={{ width: '100%', alignItems: 'flex-end' }}>
                        <Image
                            style={styles.image_caro1}
                            source={require('../assets/images/image_caro3x.png')} />
                    </View>
                    <View style={styles.text_box}>
                        <Text style={styles.text_topic}>
                            {/* {JSON.stringify(productState.data)} */}
                            {/* {productState.data[0].name} */}
                        </Text>
                    </View>
                </View>

            </View>
        )

    }
}

const styles = StyleSheet.create({
    container1: {
        width: '100%',
        height: 195,
        marginTop: 4,
        backgroundColor: '#CB4310'
    },
    image_caro1: {
        width: 244.36,
        height: 120.39,
        // backgroundColor: '#CB4310'

    },
    text_box: {
        width: 180,
        height: 39,
        //border: 'solid'
        borderColor: '#FFFFFF',
        borderBottomWidth: 0.7,
        borderRightWidth: 0.7,
        borderLeftWidth: 0.7,
        borderTopWidth: 0.7,
        //backgroundColor: 'violet',
        marginTop: -49.39,
        marginLeft: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_topic: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        color: '#FFFFFF',
    }
})

const mapStateToProps = (state) => ({
    productState: state.productReducer
})

const mapDispatchToProps = {
    getProduct, getProductSuccess, getProductFail
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen)

