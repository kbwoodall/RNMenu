import { ScrollView } from 'react-native';
import { Image, Platform, StyleSheet, Text, View, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import React, { useState, useEffect } from 'react';
import { nullLiteral } from '@babel/types';
import { ToastAndroid } from 'react-native';
import List from '../components/List.js'
import { useNavigation, useNavigationParam }
  from 'react-navigation-hooks';

//import React from 'react';
//import Map from '@bit/sanzhardanybayev.ui-components.map';

//export default (
//	<Map/>
//)

export default function LinksScreen() {
  const { navigate } = useNavigation();

  const testDoctors =
    [{ "physician": "Ed Soumi" }, { "physician": "John Soumi" }, { "physician": "Matthew Pham" }];

  const [message, setMessage] = useState('Starting App');
  const [doctors, setDoctors] = useState([]);

  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  const ImagesExample = () => (
    <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
      style={{ width: 50, height: 50 }}
    />
  )

  function MyLinkButton() {
    // be careful to never call useNavigation in the press callback. Call hooks directly from the render function!
    const { navigate } = useNavigation();
    return (
      <Button
        onPress={() => {
          navigate('Settings');
        }}
        title="Go to Settings"
      />
    );
  }

  async function fetchData() {

    const URL = 'https://desolate-shelf-9039.herokuapp.com/getphysicians';
    setMessage("Loading data");

    await fetch(URL)
      .then((response) => response.json())
      .then((responseJson) => {
        setDoctors(responseJson);
        setMessage("Data loaded");
      })
      .catch((error) => {
        setMessage("URL not available");
        //ToastAndroid.show(error.toString(), ToastAndroid.LONG);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  alertItemName = (item) => {
    alert(item.physician)
  }

  const ShowData = () => {
    if (doctors.length > 0) {
      let strDoc = JSON.stringify(doctors);
      let docs = JSON.parse(strDoc);
      return (
        <View>
          {
            doctors.map((item, index) => (
              <TouchableOpacity
                key={item.physician}
                style={styles.container2}
                onPress={() => navigate('Settings', { msg: item.physician })}>
                <ImagesExample />
                <Text style={styles.TextStyle}>
                  {item.physician}
                </Text>
              </TouchableOpacity>
            ))
          }
        </View>
      )
    }
    else return null
  }

  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <TextInput style={styles.FormulaButtonStyle}>
        {message}
      </TextInput>
      <ShowData />

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

/*

<View style={styles.container2}>
          <Text style={styles.TextStyle}>{docs[0].physician}</Text>
          <Text style={styles.TextStyle}>{docs[1].physician}</Text>
          <Text style={styles.TextStyle}>{docs[2].physician}</Text>

        </View>


<View>
                {
                    doctors.map((item) => (
                        <TouchableOpacity
                            style={styles.container}
                            onPress={() => this.alertItemName(item)}>
                            <Text style={styles.text}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>




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
<TextInput>{JSON.stringify(doctors)}</TextInput>
async function GetDoctors() {
    const URL = 'https://desolate-shelf-9039.herokuapp.com/getphysicians';
    try {
      let response = await fetch(URL
      );
      let responseJson = await response.json();
      //return responseJson
    } catch (error) {
      console.log(error);
    }
  }

const res = await fetch("https://swapi.co/api/planets/4/");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));

    //setDoctors: testDoctors;
    //alert("test " + testDoctors[0].physician);
    //setDoctors(testDoctors);
    //alert("test " + doctors.length + " " + testDoctors.length);
ambilData(){
	console.log('req list product');
	fetch("http")
	.then((response) => response.json())
	.then((responseJson) => {
		console.log(responseJson);
		this.setState( { data: responseJson });

	})
	.catch((error) => {
		console.error(error);
	});
}

<TextInput>{JSON.stringify(planets)}</TextInput>

<ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>

*/

