import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import GradientContainer from '../components/cbcontainer';

const RenderContent = () => (
    <GradientContainer>
        <View style={{
            width: '100%',
            padding: 25,
        }}>
            <Text style={{
                fontFamily: 'Poppins-Light',
                fontSize: 40,
                color: '#fff'
            }}>Find Cash</Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <TouchableOpacity style={{
                    width: 80,
                    padding: 5,
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 30,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'Poppins-Medium',
                        fontSize: 17,
                        color: '#fff'
                    }}>50</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: 80,
                    padding: 5,
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 30,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'Poppins-Medium',
                        fontSize: 17,
                        color: '#fff'
                    }}>100</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: 80,
                    padding: 5,
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 30,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'Poppins-Medium',
                        fontSize: 17,
                        color: '#fff'
                    }}>200</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: 80,
                    padding: 5,
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 30,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'Poppins-Medium',
                        fontSize: 17,
                        color: '#fff'
                    }}>500</Text>
                </TouchableOpacity>
            </View>
        </View>
    </GradientContainer>
);

export default class Home extends React.Component {
    RBSheet: any;

    render() {

        return (
            <>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'papayawhip',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} />
                </View>
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    height={500}
                    openDuration={250}
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