import React, { Component } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import GradientContainer from '../../components/cbcontainer';
import LottieView from 'lottie-react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Assets from '../../../assets';

const styles = StyleSheet.create({
    loading: {
        width: wp('15%'),
        height: hp('25%')
    },
    centerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export class SplashScreen extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    componentDidMount() {
        const { navigation } = this.props;
        setTimeout(() => {
            navigation.navigate('onboarding');
        }, 1000);
    }

    render() {
        return (
            <GradientContainer>
                <View style={styles.centerView}>
                    <LottieView style={styles.loading} source={Assets.LOADING} autoPlay loop />
                </View>
            </GradientContainer>
        );
    }
}