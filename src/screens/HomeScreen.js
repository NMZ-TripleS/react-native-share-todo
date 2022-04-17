import React from 'react';
import {SafeAreaView,FlatList,Text,View,TextInput,Pressable,TouchableOpacity,Modal,StyleSheet} from 'react-native';
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
      titleInput:"",
      descInput:"",
      modalVisible:false,
      todoList : [
        {id:0,title:"Sample Title",description:"Lorem ipsum dolor sit amet",status:0},
        {id:1,title:"Sample Title1",description:"sample Description",status:1}
      ],
    }
    this.descRef = React.createRef();
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
    // if(newItem.id!=null){
    //   this.setState({
    //  todoList:[...this.state.todoList,newItem]
    // });
    // }else{
     
      var newId = 0;
      if(this.state.todoList.length>0){
        var lastTodo = this.state.todoList[this.state.todoList.length-1];
        newId = lastTodo.id+1;
      }
      var newTodo = {...newItem,id:newId};
      this.setState({
       todoList:[...this.state.todoList,newTodo]
      });
    //}
    
  }
  render(){
    //console.log("screen redenering .. . . ");
    
    return(
      <SafeAreaView style={{flex:1}}>
        <FlatList data={this.state.todoList} 
        keyExtractor={(item)=>item.id} 
        renderItem={({item})=><ToDoItem data={item} navigation={this.props.navigation} deleteToDoItem={this.deleteToDoItem}/>}/>
        <TouchableOpacity onPress={()=>{
          
          this.setState({modalVisible:true});
        }}
        style={{width:60,height:60,justifyContent:'center',alignItems:'center',width:60,position:'absolute',bottom:60,right:60,borderRadius:30,elevation:5,shadowOffset:{width:2,height:2},shadowRadius:5, backgroundColor:'white'}}>
          <Icon name='add-outline' size={34} color='black'/>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Create TODO</Text>
              <TextInput
                style={styles.input}
                returnKeyLabel='NEXT'
                value={this.state.titleInput}
                autoCapitalize='none'
                placeholder='Enter todo title'
                autoCorrect={false}
                autoFocus={true}
                keyboardType='default'
                maxLength={30}
                multiline={false}
                numberOfLines={1}
                onBlur={()=>this.descRef.current.focus()}
                onChangeText={(value)=>this.setState({titleInput:value})}
              />
              <TextInput
                ref={this.descRef}
                style={[styles.input,styles.inputArea]}
                returnKeyLabel='GO'
                placeholder='Enter todo description.'
                value={this.state.descInput}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='default'
                maxLength={300}
                multiline={true}
                numberOfLines={6}
                onChangeText={(value)=>this.setState({descInput:value})}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  this.addingNewItme({title:this.state.titleInput,description:this.state.descInput,status:0});

                  this.setState({modalVisible:false,titleInput:"",descInput:""});
                  }}>
                <Text style={styles.textStyle}>SAVE</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input: {
    height: 40,
    width:200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputArea:{
    height:100,
    textAlignVertical:'top'
  }
});
