import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { ToastAndroid } from 'react-native';

export default function ButtonStuff() {
    const [textValue, setTextValue] = useState('');
    const [formulaValue, setFormulaValue] = useState('');

    const calc = () => {
        let n = textValue;
        try {
            let tot = eval(n);
            setTextValue(tot.toString());
            setFormulaValue(n);
        } catch (e) {
            ToastAndroid.show('invalid format', ToastAndroid.SHORT);
        }
    }
    const updateTextValue = async (text) => {
        setTextValue(text);
    }
    const attachMult = () => {
        let m = textValue + ' * ';
        setTextValue(m);
    }
    const attachDiv = () => {
        let mult = textValue + ' / ';
        setTextValue(mult);
    }
    const attachAdd = () => {
        let mult = textValue + ' + ';
        setTextValue(mult);
    }
    const attachMinus = () => {
        let mult = textValue + ' - ';
        setTextValue(mult);
    }
    const attachLeft = () => {
        let mult = textValue + ' ( ';
        setTextValue(mult);
    }
    const attachRight = () => {
        let mult = textValue + ' ) ';
        setTextValue(mult);
    }
    const attachClear = () => {
        setTextValue('');
        setFormulaValue('');
    }
    const GetTextInput = () => {
        let g = textValue.toString();
        return (
            <TextInput style={styles.input}
                value={g}
                placeholder="Enter number"
                onChangeText={(text) => updateTextValue(text)}
                keyboardType={'numeric'}
            />
        )
    }
    const ShowFormula = () => {
        let g = textValue.toString();
        return (
            <TextInput style={styles.instructions}>
                {formulaValue}
            </TextInput>
        )
    }
    return (
        <View >
            <TextInput style={styles.input}
                value={textValue}
                placeholder="Enter number"
                placeholderTextColor='black'
                onChangeText={(text) => updateTextValue(text)}
                keyboardType={'numeric'}
            />
            <View style={styles.stuff}>
                <TouchableOpacity
                    style={styles.SubmitRowStyle}
                    activeOpacity={.5}
                    onPress={() => attachMult()}
                >
                    <Text style={styles.TextStyle}> * </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.SubmitRowStyle}
                    activeOpacity={.5}
                    onPress={() => attachDiv()}
                >
                    <Text style={styles.TextStyle}> / </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.SubmitRowStyle}
                    activeOpacity={.5}
                    onPress={() => attachAdd()}
                >
                    <Text style={styles.TextStyle}> + </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.SubmitRowStyle}
                    activeOpacity={.5}
                    onPress={() => attachMinus()}
                >
                    <Text style={styles.TextStyle}> - </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.SubmitRowStyle}
                    activeOpacity={.5}
                    onPress={() => attachLeft()}
                >
                    <Text style={styles.TextStyle}> ( </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.SubmitRowStyle}
                    activeOpacity={.5}
                    onPress={() => attachRight()}
                >
                    <Text style={styles.TextStyle}> ) </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.SubmitRowStyle}
                    activeOpacity={.5}
                    onPress={() => attachClear()}
                >
                    <Text style={styles.TextStyle}> Clear </Text>
                </TouchableOpacity>

            </View>
            <View>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={() => calc()}
                >
                    <Text style={styles.TextStyle}> Get my total</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.FormulaButtonStyle}> {formulaValue}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#03fc3d'
    }, stuff: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'coral'
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        fontSize: 18,
        textAlign: 'center',
        height: 60,
        color: '#333333'
    },
    input: {
        width: 350,
        height: 55,
        backgroundColor: 'gray',
        marginTop: 10,
        color: 'blue',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
        textShadowColor: 'black'

    },
    button: {
        marginTop: 1,
        marginLeft: 140,
        padding: 1,
        width: 100,
        borderRadius: 14
    },
    SubmitRowStyle: {
        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#00BCD4',
        width: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    FormulaButtonStyle: {
        marginTop: 5,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500'
    },
    SubmitButtonStyle: {
        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#00BCD4',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    TextStyle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500'
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#03fc3d',
    },
});

