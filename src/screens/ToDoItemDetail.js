import React,{Component} from 'react';
import {SafeAreaView,FlatList,View,Text} from 'react-native';
export let ToDoDetailName = "ToDoDetail";
export default class ToDoItemDetail extends Component{
    constructor(props){
        super(props);
        this.params = this.props.route.params;
        console.log("ToDoItemDetail screen >>>>>>>",this.params);
    }
        
    
      render(){ return(
        <SafeAreaView>
          <Text>{this.params.title}</Text>
          <Text>{this.params.description}</Text>
        </SafeAreaView>
      );
      }
}