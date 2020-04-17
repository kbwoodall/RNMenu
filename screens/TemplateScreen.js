import { ScrollView } from 'react-native';
import { Platform, StyleSheet, Text, View, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import React, { useState, useEffect } from 'react';
import { nullLiteral } from '@babel/types';

export default function LinksScreen() {

    const [message, setMessage] = useState('Starting App');
    const [doctors, setDoctors] = useState({ doctorList: [] });
    const testDoctors =
        [{ "physician": "Ed Soumi" }, { "physician": "John Soumi" }, { "physician": "Matthew Pham" }];

    return (
        <ScrollView style={styles.container}>
            {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
            <TextInput style={styles.FormulaButtonStyle}>
                {message}
            </TextInput>

            <View>
                <Text style={styles.TextStyle}>
                    {testDoctors[0].physician}
                </Text>
                <Text style={styles.TextStyle}>
                    {testDoctors[1].physician}
                </Text>
                <Text style={styles.TextStyle}>
                    {testDoctors[2].physician}
                </Text>
            </View>
        </ScrollView>
    );

}
LinksScreen.navigationOptions = {
    title: 'Links',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#03fc3d'
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



/*

<ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>

*/

