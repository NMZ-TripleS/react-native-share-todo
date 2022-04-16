import React from 'react';
import {SafeAreaView,FlatList,Text,View,TouchableOpacity} from 'react-native';
import ToDoItem from '../widgets/ToDoItem';
import Icon from "react-native-vector-icons/Ionicons";
import Snackbar from 'react-native-snackbar';
export let HomeName = "Home";
export default class HomeScreen extends React.Component{
  constructor(props){
    super();
    //console.log("Home Screen >>>>>>",props);
    //status : 0 ( pending )
    //status : 1 ( done )
    this.state={
      todoList : [
        {id:0,title:"Sample Title",description:"Lorem ipsum dolor sit amet",status:0},
        {id:1,title:"Sample Title1",description:"sample Description",status:1}
      ],
    }
  }
  deleteToDoItem = (item) =>{
    //use set state to modify state variable 
    //this.state.todoList.pop();

    Snackbar.show({
      text: 'Item Deleted',
      duration: Snackbar.LENGTH_SHORT,
      action: {
        text: 'UNDO',
        textColor: 'green',
        onPress: () => { this.addingNewItme(item); },
      },
    });
    this.setState({
      todoList:this.state.todoList.filter((todo)=>todo.id!=item.id)
    });
    console.log("Current length of array todo list is ",this.state.todoList.length);
  }
  addingNewItme=(newItem)=>{
    this.setState({
      todoList:[...this.state.todoList,newItem]
    });
  }
  render(){
    //console.log("screen redenering .. . . ");
    
    return(
      <SafeAreaView style={{flex:1}}>
        <FlatList data={this.state.todoList} 
        keyExtractor={(item)=>item.title} 
        renderItem={({item})=><ToDoItem data={item} navigation={this.props.navigation} deleteToDoItem={this.deleteToDoItem}/>}/>
        <TouchableOpacity onPress={this.addingNewItme}
        style={{width:60,height:60,justifyContent:'center',alignItems:'center',width:60,position:'absolute',bottom:60,right:60,borderRadius:30,elevation:5,shadowOffset:{width:2,height:2},shadowRadius:5, backgroundColor:'white'}}>
          <Icon name='add-outline' size={34} color='black'/>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}