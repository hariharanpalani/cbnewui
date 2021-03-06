/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context';

export default class GradientContainer extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor={'transparent'} translucent={true} />
                <LinearGradient
                    colors={['#FF645A', '#F0286E', '#F0286E', '#F0286E']}
                    style={styles.container}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    locations={[0, 0.2, 1, 1]}
                >
                    <SafeAreaView style={{ flex: 1 }}>
                        {this.props.children}
                    </SafeAreaView>
                </LinearGradient>
            </>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: '100%'
    }
});

