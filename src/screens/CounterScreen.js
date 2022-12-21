import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


const COUNTER_INCREMENT = 1;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counterValue: state.counterValue + action.payload };

    case "decrement":
      return { ...state, counterValue: state.counterValue - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counterValue: 0 });
  

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({type:"increment", payload : COUNTER_INCREMENT})}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({type: "decrement", payload : COUNTER_INCREMENT})}
      />
      <Text>Current Count: {state.counterValue}</Text>
    </View>
  );
};

export default CounterScreen;
