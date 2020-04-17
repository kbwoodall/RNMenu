import { ExpoConfigView } from '@expo/samples';
import { ScrollView } from 'react-native';
import { Image, Platform, StyleSheet, Text, View, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { nullLiteral } from '@babel/types';
import { ToastAndroid } from 'react-native';
import List from '../components/List.js'
import { useNavigation, useRoute, useNavigationState, useNavigationParam }
    from 'react-navigation-hooks';

export default function SettingsScreen() {
    const [textValue, setTextValue] = useState('');
    const [formulaValue, setFormulaValue] = useState('');
    const name = useNavigationParam('msg');
    console.log(name);
    const { routeName } = useNavigationState();

    /**
     * Go ahead and delete ExpoConfigView and replace it with your content;
     * we just wanted to give you a quick view of your config.
     */

    function MyScreen() {
        return (
            <View>
                <Text style={styles.TextStyle}>My route name is  {routeName}</Text>
                <Text style={styles.TextStyle}>From Link screen  {name}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <MyScreen />
        </View>
    )
}

SettingsScreen.navigationOptions = {
    title: 'Secondary data',
};
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#03fc3d'
  },
  container2: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
  },
  instructions: {
    fontSize: 18,
    textAlign: 'center',
    height: 60,
    color: '#333333'
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
  TextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500'
  },
});
*/

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


//JSON.stringify(navigation.getParam('otherParam', 'default value'))}
// return <ExpoConfigView />;
//{JSON.stringify(navigate.getParam({item})}


