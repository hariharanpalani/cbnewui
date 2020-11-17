import * as React from "react"
import { Button } from 'native-base';
import { Text, View, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface IButtonProps {
    text: string,
    style?: any,
    transparent: boolean,
    rounded: boolean,
    full: boolean,
    bordered: boolean,
    children?: any
}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Poppins-Medium',
        fontSize: 17,
        color: '#fff',
    },
    buttonStyle: {
        width: wp('20%'),
        padding: 5,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 20,
        justifyContent: 'center'
    }
});

function ButtonComponent(props: IButtonProps) {
    const combineStyles = StyleSheet.flatten([styles.buttonStyle, props.style]);    
    return (
        <Button 
            rounded={props.rounded} 
            full={props.full} 
            bordered={props.bordered} 
            transparent={props.transparent} 
            style={combineStyles}
        >
            <Text style={styles.textStyle}>{props.text}</Text>
            {props.children}
        </Button>
    );
}

export default ButtonComponent;