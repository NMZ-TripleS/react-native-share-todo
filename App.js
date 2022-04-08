/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList
} from 'react-native';

const App: () => Node = () => {
  const DATA = [
    {
      description: 'Sample description',
      title: 'First Item',
    },
    {
      description: 'Sample description',
      title: 'Second Item',
    },
    {
      description: 'Sample description',
      title: 'Third Item',
    },
  ];
  const renderItem = ({item})=>{
    return (<View style={{backgroundColor:'lightgreen',margin:4}}>        
<Text>{item.title}</Text>
<Text numberOfLines={2}>{item.description}</Text>
</View>)};
    

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}//(item)=>renderItem(item)}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
};
export default App;
