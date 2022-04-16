import React,{Component} from 'react';
import {SafeAreaView,FlatList,Dimensions,View,ScrollView,Image,Text} from 'react-native';
export let ToDoDetailName = "ToDoDetail";
export default class ToDoItemDetail extends Component{
    constructor(props){
        super(props);
        this.params = this.props.route.params;
        console.log("ToDoItemDetail screen >>>>>>>",this.params);
    }
        
    
      render(){ return(
        <SafeAreaView>
          <ScrollView style={{padding:10}}>
            <Text>{this.params.title}</Text>
            <View style={{height:20}}/>
            <Image style={{width:Dimensions.get('screen').width,maxHeight:400}} source={require('../assets/images/fruit.jpg')} />
            <View style={{height:20}}/>
            <Text style={{textAlign:'justify'}}>{this.params.description}</Text>
          </ScrollView>
        </SafeAreaView>
      );
      }
}