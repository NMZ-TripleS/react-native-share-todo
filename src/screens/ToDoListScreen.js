import React,{Component} from 'react';
import {SafeAreaView,FlatList,View,Text} from 'react-native';

export default class ToDoListScreen extends Component{
    constructor(props){
        super(props);
        this.data=[
            {
              description: 'Sample description',
              title: 'First Item',
            },
            {
              description: 'Sample description',
              title: 'Second Item',
            },
            {
              description: 'Sample description',
              title: 'Third Item',
            },
          ];
          console.log(props.navigation);
    }
    
    renderItem = ({item})=>{
        return (<View style={{backgroundColor:'lightgreen',margin:4}}>        
    <Text>{item.title}</Text>
    <Text numberOfLines={2}>{item.description}</Text>
    </View>)};
        
    
      render(){ return(
        <SafeAreaView>
          <FlatList
            data={this.data}
            renderItem={this.renderItem}//(item)=>renderItem(item)}
            keyExtractor={item => item.title}
          />
        </SafeAreaView>
      );
      }
}