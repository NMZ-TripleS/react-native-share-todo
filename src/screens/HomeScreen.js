import React from 'react';
import { Text, View,Button } from 'react-native';
import Cat from '../widgets/cat';

const HomeScreen = ({navigation}) => {
   
  return (
      
    <View style={{backgroundColor:'lightgreen'}}>
      <Cat name="Maru" age="2" style={{color:'blue'}}/>
      <Cat name="Jellylorum" age="5"/>
      <Cat name="Spot" age="2"/>
      <Button title={"GO to List"}
      //navigate( name of the screen you want to go)
        onPress={() => navigation.navigate('Todolistscreen')}
      />
    </View>
  );
}
export default HomeScreen;