import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import GradientContainer from '../components/cbcontainer';
import LottieView from 'lottie-react-native';
import Assets from '../assets';
import Logo from '../components/logo';
import Arrow from '../components/arrow';
import { SafeAreaView } from 'react-native-safe-area-context';

const slides = [
    {
        id: 'slide1',
        title: 'Enter the new age of digital ATM',
        lottieFile: Assets.GIRLSITTING,
        description:
            'Easy and fast way to order food from the best local restaurant.',
    },
    {
        id: 'slide1',
        title: 'Withdraw money from shops near you',
        lottieFile: Assets.SHOPOWNER,
        description: 'Browse through menu and reviews to find the food you like.',
    },
    {
        id: 'slide3',
        title: 'Forget waiting in ATM lines. Use CashBerry',
        lottieFile: Assets.SKATER,
        description: 'Pay online with credit card. Click, sit back and relax.',
    },
    {
        id: 'slide4',
        title: 'Use your smartphone to withdraw money securely',
        lottieFile: Assets.BUSINESSMAN,
        description: 'Get food to your door in minutes. We deliver, you enjoy!',
    },
];

const styles = StyleSheet.create({
    swiperContainer: {
        flex: 1,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    text: {
        fontFamily: 'Poppins-Light',
        fontSize: 35,
        alignContent: "center",
        color: 'white',
        textAlign: 'center',
        width: '65%'
    },
    imageDimnestion: {
        width: '75%',
    },
});


export class Onboarding extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    render() {
        return (
            <GradientContainer>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{
                        paddingHorizontal: 30,
                        paddingVertical: 15,
                        flexGrow: 0,
                        height: 60,
                    }}>
                        <Logo />
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        flexGrow: 1,
                    }}>
                        <View style={{
                            height: '65%',
                            alignItems: 'center',
                        }}>
                            <LottieView
                                style={styles.imageDimnestion}
                                source={Assets.GIRLSITTING} autoPlay loop
                                resizeMode="cover"
                            />
                        </View>
                        <View style={{
                            height: '20%',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.text}>
                                Enter the new age of digital ATM
                        </Text>
                        </View>
                    </View>
                    <View style={{
                        height: 60,
                        flexGrow: 0,
                        justifyContent: "center",
                        alignItems: 'center',
                        paddingHorizontal: 15,
                        position: "relative",
                    }}>
                        <View style={{
                            flex: 1,
                            width: 50,
                            height: '20%',
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                width: 20,
                                height: 5,
                                borderRadius: 5,
                                backgroundColor: '#fff'
                            }} />
                            <View style={{
                                width: 5,
                                height: 5,
                                borderRadius: 5,
                                backgroundColor: '#fff'
                            }} />
                            <View style={{
                                width: 5,
                                height: 5,
                                borderRadius: 5,
                                backgroundColor: '#fff'
                            }} />
                        </View>
                        <View style={{
                            position: "absolute",
                            right: 15,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        fontSize: 13,
                                        fontFamily: 'Poppins-Bold',
                                        marginRight: 6
                                    }}>Skip</Text>
                                    <Arrow />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </GradientContainer>
        );
    }
}