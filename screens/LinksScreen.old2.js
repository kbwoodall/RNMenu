//import React from 'react';
import { ScrollView } from 'react-native';
import { Platform, StyleSheet, Text, View, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import React, { useState, useEffect } from 'react';
import { nullLiteral } from '@babel/types';
import axios from 'axios';

export default function LinksScreen(

function FetchMoreDat() {
    /*
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://desolate-shelf-9039.herokuapp.com/getphysicians',
        );
        setData(result.data);
      };
      fetchData();
    }, []);
  
    return (
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    );
  */

}

const [formulaValue, setFormulaValue] = useState('Starting App');
const [data, updateData] = useState("cc");
const [doctorList, updateDoctors] = useState([]);
const doctors =
    [{ "physician": "Ed Soumi" }, { "physician": "John Soumi" }, { "physician": "Matthew Pham" }];

const setMessage = (msg) => {
    setFormulaValue(msg);
}

return (
    <ScrollView style={styles.container}>
        {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
        <TextInput style={styles.FormulaButtonStyle}>
            {formulaValue}
        </TextInput>
        <FetchMoreData />
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




