import React, { Component } from 'react';
import { Alert, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GradientContainer from '../../components/cbcontainer';
import Logo from '../../components/logo';
import Button from '../../components/button';
import Arrow from '../../components/arrow';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class LoginComponent extends React.Component<any, any> {
    RBSheet: any;
    innerRBSheet: any;

    componentDidMount() {
        // this.RBSheet.open();
    }

    render() {
        return (
            <GradientContainer>
                <View style={{
                    flexGrow: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20
                }}>
                    <Logo />

                    <Text style={{
                        fontFamily: 'Poppins-Light',
                        fontSize: 40,
                        color: '#fff',
                        marginTop: 40
                    }}>Welcome Back!</Text>
                </View>
                <View style={{
                    flexDirection: 'column',
                    flex: 1,
                    backgroundColor: '#fff',
                    borderTopLeftRadius: 36,
                    borderTopRightRadius: 36
                }}>
                    <View style={{
                        padding: 30,
                        flex: 0.7
                    }}>
                    </View>
                    <View style={{
                        flex: 0.3,
                        backgroundColor: '#F2F8F8',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontSize: 13,
                            fontFamily: 'Poppins-Regular'
                        }}>
                            Don’t have an account?
                       </Text>
                       <Button text="" rounded={true} full={true} bordered={true} transparent={false}
                       style={{
                           backgroundColor: '#000',
                           alignSelf: 'center',
                           width:  wp('45%'),
                           marginTop: 10,
                           borderRadius: 28
                       }}>
                           <Text style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize: 17,
                                color: '#fff',
                                paddingRight: 10
                           }}>REGISTER</Text>
                           <Arrow />
                       </Button>
                    </View>
                </View>
            </GradientContainer>
        );
    }
}