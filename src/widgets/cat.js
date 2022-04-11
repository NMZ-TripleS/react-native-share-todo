import React from 'react';
import {View,Text} from 'react-native';
const Cat = (props) => {
    return (
      <View>
        <Text style={{...props.style,padding:10}}>Hello, I am {props.name} and it's age is {props.age}!</Text>
      </View>
    );
  }
  export default Cat;