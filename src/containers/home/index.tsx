import * as React from 'react';
import { Text, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import GradientContainer from '../../components/cbcontainer';
import Button from '../../components/button';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const RenderContent = () => (
    <GradientContainer>
        <View style={{
            width: '100%',
            padding: wp('5%'),
        }}>
            <Text style={{
                fontFamily: 'Poppins-Light',
                fontSize: 40,
                color: '#fff'
            }}>Find Cash</Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Button text="50" rounded={true} full={true} bordered={true} transparent={true} />
                <Button text="100" rounded={true} full={true} bordered={true} transparent={true} />
                <Button text="200" rounded={true} full={true} bordered={true} transparent={true} />
                <Button text="500" rounded={true} full={true} bordered={true} transparent={true} />
            </View>
        </View>
    </GradientContainer>
);

export default class Home extends React.Component {
    RBSheet: any;

    componentDidMount() {
        this.RBSheet.open();
    }

    render() {
        return (
            <>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                </View>
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    height={500}
                    openDuration={250}
                    animationType="slide"
                    keyboardAvoidingViewEnabled={true}
                    closeOnPressMask={false}
                    closeOnPressBack={false}
                    customStyles={{
                        container: {
                            borderTopEndRadius: 36,
                            borderTopLeftRadius: 36
                        }
                    }}
                >
                    <RenderContent />
                </RBSheet>
            </>
        );
    }
}