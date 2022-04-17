import React from 'react';
import { Text, View,Button,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ToDoDetailName } from '../screens/ToDoItemDetail';

export default class ToDoItem extends React.Component {
  constructor(props){
    super();
    this.todo = props.data;
    this.navigation = props.navigation;
    this.deleteCurrentItem = props.deleteToDoItem;
    this.state={
      status:this.todo.status
    }
    //console.log("Item of to do list >>>>>",props);
  }    
  render(){
    //console.log(this.todo.title+" > index > "+this.todo.id);
    return (
      <View style={{padding:10,backgroundColor:this.state.status==0?'lightpink':'lightgreen',margin:10,borderRadius:5,shadowColor:'black',shadowOffset:{width:2,height:2},shadowRadius:2,shadowOpacity:0.5,elevation:5}}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text>{this.todo.title}</Text>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>{
              this.deleteCurrentItem(this.todo);}} 
              style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',padding:6,width:70,backgroundColor:'#d8392b',borderRadius:25}}>
              <Icon name='trash-outline' type='ionicon' size={16} style={{color:'white'}}/>
              <Text style={{color:'white',fontWeight:'bold',fontSize:12}}>Delete</Text>
            </TouchableOpacity>
            {/* adding space btween undefined main axis measurement element */}
            <View style={{width:10}}/>
            {this.state.status==0 &&
              <TouchableOpacity 
                onPress={()=>{this.setState({status:1});}} 
                style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',padding:6,width:70,backgroundColor:'green',borderRadius:25}}>
                  <Icon name='checkmark-outline' type='ionicon' size={16} style={{color:'white'}}/>
                  <Text style={{color:'white',fontWeight:'bold',fontSize:12}}>DONE</Text>
              </TouchableOpacity>}
          </View>
        </View>
        <Text numberOfLines={2}>{this.todo.description}</Text>
          <View style={{flexDirection:'row-reverse'}}>
            <TouchableOpacity 
              onPress={()=>this.navigation.navigate(ToDoDetailName,this.todo)}>
                <Text style={{color:'orange',textDecorationLine:'underline'}}>{"Read Detail  >>"}</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}