import React from 'react';
import { Text, View,Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ToDoItem extends React.Component {
  constructor(props){
    super();
    this.todo = props.data;
  }    
  render(){
    return (
      <View style={{padding:10,backgroundColor:'lightpink',margin:10,borderRadius:5,shadowColor:'black',shadowOffset:{width:2,height:2},shadowRadius:2,shadowOpacity:0.5,elevation:5}}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text>{this.props.data.title}</Text>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',padding:10,width:100,backgroundColor:'green',borderRadius:25}}>
          <Icon name='checkmark-outline' type='ionicon' size={18} style={{color:'white'}}/>
          <Text style={{color:'white',fontWeight:'bold'}}>DONE</Text>
        </View>
        </View>
        <Text>{this.todo.descripiton}</Text>
      </View>
    );
  }
}