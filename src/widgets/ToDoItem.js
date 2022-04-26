import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ToDoDetailName } from '../screens/ToDoItemDetail';
import TodoButton from './TodoButton';
const ToDoItem =(props)=> {
  const [status,setStatus] = useState(props.data.status);    
    //console.log(props.data.title+" > index > "+props.data._id);
    return (
      <View style={{padding:10,backgroundColor:status==0?'lightpink':'lightgreen',margin:10,borderRadius:5,shadowColor:'black',shadowOffset:{width:2,height:2},shadowRadius:2,shadowOpacity:0.5,elevation:5}}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text>{props.data.title}</Text>
          <View style={{flexDirection:'row'}}>
           
            <TodoButton title="DELETE" backgroundColor="#d8392b" icon="trash-outline"
              onPress={()=>{
                props.deleteToDoItem(props.data);}}/>
            {/* adding space btween undefined main axis measurement element */}
            <View style={{width:10}}/>
            {status==0 &&
              <TodoButton title="DONE" onPress={()=>{setStatus(1);props.updateTodoItem(props.data._id)}}/>}
          </View>
        </View>
        <Text numberOfLines={2}>{props.data.description}</Text>
          <View style={{flexDirection:'row-reverse'}}>
            <TouchableOpacity 
              onPress={()=>props.navigation.navigate(ToDoDetailName,props.data)}>
                <Text style={{color:'orange',textDecorationLine:'underline'}}>{"Read Detail  >>"}</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}
export default ToDoItem;