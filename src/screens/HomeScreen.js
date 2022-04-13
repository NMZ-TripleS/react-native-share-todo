import React from 'react';
import {SafeAreaView,FlatList,Text,View,TouchableOpacity} from 'react-native';
import ToDoItem from '../widgets/ToDoItem';
import Icon from "react-native-vector-icons/Ionicons";

export default class HomeScreen extends React.Component{
  constructor(){
    super();
    
    this.state={
      todoList : [
        {title:"Sample Title",descripiton:"sample Description"},
        {title:"Sample Title1",descripiton:"sample Description"}],
    }
  }
  
  render(){
    console.log("screen redenering .. . . ");
    return(
      <SafeAreaView style={{flex:1,backgroundColor:'lightgreen'}}>
        <FlatList data={this.state.todoList} keyExtractor={(item)=>item.title} renderItem={({item})=><ToDoItem item={item}/>}/>
        <TouchableOpacity onPress={()=>{
          this.setState({
            todoList:[...this.state.todoList,{title:"Sample Title"+this.state.todoList.length,descripiton:"sample Description"}]
          });
        }}
        style={{width:60,height:60,justifyContent:'center',alignItems:'center',background:'red',width:60,position:'absolute',bottom:60,right:60,borderRadius:30,elevation:5,elevation:5,backgroundColor:'white'}}>
          <Icon name='add-outline' size={34} color='black'/>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}