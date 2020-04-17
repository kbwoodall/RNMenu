import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  Alert,
  View
} from 'react-native';

import { createStore, combineReducers } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { Keyboard } from 'react-native';

function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        ...state,
        count: state.count + 1
      }
    case "DECREMENT_COUNT":
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
}
function nameReducer(state = { name: "" }, action) {
  switch (action.type) {
    case "UPDATE_NAME":
      return {
        ...state,
        name: action.payload
      }
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  counterReducer,
  nameReducer
})
const INITIAL_STATE = {}

const store = createStore(
  rootReducer, INITIAL_STATE
)

function Counter() {
  const { count, name } = useSelector(state => ({
    ...state.counterReducer,
    ...state.nameReducer
  }))
  const dispatch = useDispatch()

  function incrementCount() {
    //alert("here");
    dispatch({
      type: "INCREMENT_COUNT"
    })
  }
  function decrementCount() {
    //alert("here");
    dispatch({
      type: "DECREMENT_COUNT"
    })
  }

  return (

    <View>
      <Text>Your name is: {name}</Text>
      <Text>Counter: {count}</Text>

      <TouchableOpacity
        style={styles.SubmitRowStyle}
        activeOpacity={.5}
        onPress={() => incrementCount()}
      >
        <Text style={styles.TextStyle}> + </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.SubmitRowStyle}
        activeOpacity={.5}
        onPress={() => decrementCount()}
      >
        <Text style={styles.TextStyle}> - </Text>
      </TouchableOpacity>



    </View>
  )
}

function Name() {
  const dispatch = useDispatch();

  function handleUpdateName(value) {
    dispatch({
      type: "UPDATE_NAME",
      payload: value
    })
  }

  return (

    <TextInput style={styles.input}
      placeholder="Enter Name"
      placeholderTextColor='black'
      onChangeText={(value) => handleUpdateName(value)}
      keyboardType={'default'}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: 'gray',
    marginTop: 1,
    color: 'blue',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    textShadowColor: 'black'
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    width: 50
  },
  activeTitle: {
    color: 'red',
  },
  TextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500'
  },
  SubmitRowStyle: {
    marginTop: 15,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#00BCD4',
    width: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
});

export default function MoreStuff() {
  return (
    <Provider store={store}>
      <Name />
      <Counter />
    </Provider>
  )
}

/*

<Button
        onClick={incrementCount()}
        title="+"
      ></Button>
      <Text>  </Text>
      <Button
        style={styles.title}
        onClick={decrementCount()}
        title="-"
      ></Button>

<Button
        style={{ fontSize: 20, color: 'green' }}
        styleDisabled={{ color: 'red' }}
        //onPress={() => Counter()}
        onPress={() => this._handlePress()}
        title="Press Me"
      >
        Press Me Again
      </Button>
<>
        Counter: {count}
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </>



  const App = props => {
    const counter = useSelector(
      state => state.counter
    );
    const dispatch = useDispatch()

    return (
      <div>
        the counter is {counter}
        <button onClick={() => dispatch(increase())}>increase</button>
      </div>
    );
  }

  function Counter(initialState) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      </>
    );
  }

  const increase = () => ({ type: "INCREASE_COUNTER" });
  //const [state, dispatch] = useReducer(reducer, initialState);

  const initialState = { count: 0 };
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count + 1 };
      default:
        throw new Error();
    }
  }

*/