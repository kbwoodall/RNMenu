import React, { useState, useReducer, useContext } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { ToastAndroid } from 'react-native';
import { useStateValue } from './state';

const ThemedButton = () => {
    const [{ theme }, dispatch] = useStateValue();
    console.log("ThemeButtonColor " + theme.primary);
    console.log("ThemeMessage " + theme.msg);

    return (
        <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={.5}
            onPress={() => showItAgain(theme, dispatch)}
        >
            <Text> {theme.msg}</Text>
        </TouchableOpacity >
    )
}
const showItAgain = async (theme, dispatch) => {
    //const [{ theme }, dispatch] = useStateValue();
    console.log("show color " + theme.primary);
    console.log("show message " + theme.msg);

    await dispatch({ type: 'changeTheme', newTheme: { primary: 'blue', msg: "updated message" } })
    console.log("show message " + theme.msg);
    //setFormulaValue(theme.msg);
}

export default function ButtonNew() {

    const [textValue, setTextValue] = useState('');
    const [formulaValue, setFormulaValue] = useState('');
    const [{ theme }, dispatch] = useStateValue();
    console.log("ButtonStuff ThemeMessage " + theme.msg);

    const showMessage = async (message) => {
        await dispatch({ type: 'changeTheme', newTheme: { primary: 'blue', msg: message } })
        console.log("show message " + theme.msg);
    }

    const calc = () => {
        let n = textValue;
        try {
            let tot = eval(n);
            setTextValue(tot.toString());
            setFormulaValue(n);
            showMessage("");
        } catch (e) {
            ToastAndroid.show('Invalid Format', ToastAndroid.SHORT);
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
        showMessage("Message Cleared");
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
                <Text style={styles.FormulaButtonStyle}> {formulaValue} {theme.msg}</Text>
            </View>
            <View>

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
        marginTop: 10,
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
    SubmitButtonStyle2: {
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 5,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'red',
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
    TextStyle2: {
        color: 'blue',
        //color: theme.primary,
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

/*
onPress={() => attachClear()}
<ThemedButton />
//onPress={() => dispatch({
//    type: 'changeTheme',
//    newTheme: { primary: 'blue', msg: 'color changed' }
//})}
//<Text style="color:theme.primary">Change color {theme.msg}</Text>

//<Text style={styles.TextStyle2}> Change color</Text>
//onPress={() => showIt(theme.primary)}

//onClick={() => dispatch({
//    type: 'changeTheme',
//    newTheme: { primary: 'blue' }
//})}


//const globalState = useContext(store);
    //const { dispatch } = globalState;
    //dispatch({ type: 'action description' })
    //console.log("showState state is " + globalState.state);


    //if (globalState.state != null) {
    //    console.log("showState state is " + globalState.state);
    //    setFormulaValue(globalState.state);
    //}
            <TouchableOpacity
                style={styles.SubmitButtonStyle2}
                activeOpacity={.5}
                onClick={() => dispatch({
                    type: 'changeTheme',
                    newTheme: { primary: 'blue' }
                })}
            >
                <Text style={styles.TextStyle}> Change color</Text>
            </TouchableOpacity>
        );


<Button
    primaryColor={theme.primary}
    title="Press Me"
    onClick={() => dispatch({
        type: 'changeTheme',
        newTheme: { primary: 'green' }
    })}
>
    Press me
        </Button>


    <Button
        primaryColor={theme.primary}
        title="Doit"
        onClick={() => dispatch({
            type: 'changeTheme',
            newTheme: { primary: 'green' }
        })}
    >
        Make me blue!
    </Button>
const showState = () => {
    console.log("here again");
    const globalState = useContext(store);
    const { dispatch } = globalState;

    dispatch({ type: 'action description' })
    console.log("showState state is " + globalState.state);
    return globalState.state;
}
* /
function init(initialCount) {
    return { count: initialCount };
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

function Counter({ initialCount }) {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
        <View>
            <Text> Count: {state.count} </Text>
            <button
                onClick={() => dispatch({ type: 'reset', payload: initialCount })}>

                <Text> Reset  </Text>
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </View>
    );
}
*/

