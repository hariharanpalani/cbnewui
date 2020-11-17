import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import GradientContainer from '../../components/cbcontainer';
import LottieView from 'lottie-react-native';
import Assets from '../../../assets';
import Logo from '../../components/logo';
import Arrow from '../../components/arrow';

const slides = [
    {
        id: 'slide1',
        title: 'Enter the new age of digital ATM',
        lottieFile: Assets.GIRLSITTING
    },
    {
        id: 'slide2',
        title: 'Withdraw money from shops near you',
        lottieFile: Assets.SHOPOWNER
    },
    {
        id: 'slide3',
        title: 'Forget waiting in ATM lines. Use CashBerry',
        lottieFile: Assets.SKATER
    },
    {
        id: 'slide4',
        title: 'Use your smartphone to withdraw money securely',
        lottieFile: Assets.BUSINESSMAN
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
    imageDimension: {
        width: '75%',
    },
    dot: {
        width: 5,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    activeDot: {
        width: 20
    },
    inactiveDot: {
        opacity: 0.5,
    }
});


export class Onboarding extends React.Component<any, any> {
    swiper: any;

    constructor(props: any) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    onIndexChanged = (index: number) => {
        let activeIndex;
        /*if (isRTL) {
            activeIndex = slides.length - 1 - index;
        } else {
            activeIndex = index;
        }*/
        this.setState({
            activeIndex: index,
        });
    };

    previousSlide = () => {
        this.swiper.scrollBy(-1, true);
    };

    nextSlide = () => {
        this.swiper.scrollBy(1, true);
    };

    navigateTo(screen: string) {
        const { navigation } = this.props;
        navigation.navigate(screen);
    }

    render() {
        const {activeIndex} = this.state;

        return (
            <GradientContainer>
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
                        <Swiper
                            ref={swiper => {
                                this.swiper = swiper;
                            }}
                            index={0}
                            onIndexChanged={this.onIndexChanged}
                            loop={false}
                            showsPagination={false}>
                            {slides.map(item => (
                                <View key={item.id} style={{ flex: 1 }}>
                                    <View style={{
                                        height: '65%',
                                        alignItems: 'center',
                                    }}>
                                        <LottieView
                                            style={styles.imageDimension}
                                            source={item.lottieFile} autoPlay loop
                                            resizeMode="cover"
                                        />
                                    </View>
                                    <View style={{
                                        height: '20%',
                                        alignItems: 'center',
                                    }}>
                                        <Text style={styles.text}>
                                            {item.title}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </Swiper>
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
                            {slides.map((item, i) => (
                                <View
                                    key={`dot_${item.id}`}
                                    style={[
                                        styles.dot,
                                        activeIndex === i ? styles.activeDot : styles.inactiveDot,
                                    ]}
                                />
                            ))}
                        </View>
                        <View style={{
                            position: "absolute",
                            right: 15,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity onPress={() => this.navigateTo('loginscreen')}>
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
            </GradientContainer>
        );
    }
}