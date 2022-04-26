import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const TodoButton = ({title,backgroundColor,icon,onPress}) =>(
    <TouchableOpacity 
                  onPress={onPress} 
                  style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',padding:6,width:70,backgroundColor:backgroundColor??'green',borderRadius:25}}>
                    <Icon name={icon??'checkmark-outline'} type='ionicon' size={16} style={{color:'white'}}/>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:12}}>{title}</Text>
                </TouchableOpacity>);

export default TodoButton;
  