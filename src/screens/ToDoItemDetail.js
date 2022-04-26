import React from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import TodoButton from '../widgets/TodoButton';
export let ToDoDetailName = "ToDoDetail";
const ToDoItemDetail = (props)=>{
      const screen = Dimensions.get('screen');  
    
      return(
        <SafeAreaView style={{flex:1}}>
          <Image style={{width:screen.width,maxHeight:screen.height*0.3}} source={require('../assets/images/fruit.jpg')} />
          <View style={{
            backgroundColor:'white',
            padding:10,
            elevation:5,
            width:screen.width,
            height:screen.height*0.65,
            position:'absolute',
            borderTopRightRadius:25,
            borderTopLeftRadius:25,
            bottom:0}}>
            <ScrollView style={{padding:10}}>
              <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                <Text>{props.route.params.title}</Text>
                <TodoButton onPress={()=>console.log("hello")} icon={"pencil-outline"} title="Helo" backgroundColor={"orange"}/>
              </View>
              <View style={{height:20}}/>
              <View style={{height:20}}/>
              <Text style={{textAlign:'justify'}}>{props.route.params.description}</Text>
            </ScrollView>
          </View>
        </SafeAreaView>
      );
}
export default ToDoItemDetail;