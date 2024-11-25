import React from 'react';
import {Text, View} from 'react-native';

const HelloWorldApp = () => {
  const x= 'mycourse';
  console.log(x);
  console.log('Hello World!');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:"white",
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!</Text>
    </View>
  );
};
export default HelloWorldApp;