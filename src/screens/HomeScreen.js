import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
//import { todoDB,createDummyTodos, closeDb } from '../database/db';
import Realm from 'realm';
import ToDoItem from '../widgets/ToDoItem';

export let HomeName = "Home";

const HomeScreen= (props) => {
  const [titleInput,setTitleInput] = useState("");
  const [descInput,setDescInput] = useState("");
  const [modalVisible,setModalVisible] = useState(false);
  const [toDoList,setToDoList] = useState([]);  
  const [realm,setRealmDB] = useState();
  const descRef = useRef();
  const TodoSchema = {
      name: "Todo",
      properties: {
      _id: "int",
      title: "string",
      description: "string?",
      status:"int"
      },
      primaryKey: "_id",
  };
  //line one take 20 sec await async future 
  //line two take 3 sec
  //line three take 4 sec
  const createDummyTodo = ()=>{ 
    var todos = realm.objects("Todo");
    var id = todos.length==0? 0: todos[todos.length-1]['_id'];
    console.log("Last inserted id : ",todos.length);
    realm.write(() => {
        realm.create("Todo", {
          _id: ++id,
          title: titleInput,
          description: descInput,
          status:0,
        });
        console.log(`created two todos`);
    });
}
  useEffect(()=>{
    async function createRealm(){
      const realm = await Realm.open({
        schema: [TodoSchema],
      });
      setRealmDB(realm);
      console.log("Database created...");
      setToDoList(realm.objects("Todo"));
      console.log("Data has been initialized...")
    }
    createRealm();
    
    return async function (){
      realm.close();
      setRealmDB();
      console.log("Database connection closed...")
    };
  },[]);

  // const addingNewItme=(newItem)=>{
  //     var newId = 0;
  //     if(toDoList.length>0){
  //       var lastTodo = toDoList[toDoList.length-1];
  //       newId = lastTodo._id+1;
  //     }
  //     var newTodo = {...newItem,id:newId};
  //     setToDoList([...toDoList,newTodo]);
  // } 
  const updateTodoItem = (id) =>{
    const todos = realm.objects("Todo");
    const todo = todos.filtered(`_id ==${id}`);

    console.log("The following item is likely to be updated ...\n",JSON.stringify(todo));
    
    realm.write(()=>{
      todo.status = 0
    });
    setToDoList( realm.objects("Todo"));
  }
  const deleteToDoItem = (item) =>{
    const todos = realm.objects("Todo");
    const todo = todos.filtered(`_id ==${item._id}`);
    console.log("The following item is likely to be updated ...\n",JSON.stringify(todo));
    realm.write(()=>{
      realm.delete(todo);
    });
    setToDoList( realm.objects("Todo"));
    
    // Snackbar.show({
    //   text: 'Item Deleted',
    //   duration: Snackbar.LENGTH_SHORT,
    //   action: {
    //     text: 'UNDO',
    //     textColor: 'green',
    //     onPress: () => { addingNewItme(item); },
    //   },
    // });
    // setToDoList(toDoList.filter((todo)=>todo._id!=item._id));
    // console.log("Current length of array todo list is ",toDoList.length);
  }
    return(
      <SafeAreaView style={{flex:1}}>
        <FlatList data={toDoList} 
        keyExtractor={(item)=>item._id} 
        renderItem={({item})=><ToDoItem data={item} navigation={props.navigation} deleteToDoItem={deleteToDoItem} updateTodoItem={updateTodoItem}/>}/>
        <TouchableOpacity onPress={()=>{
          setModalVisible(true);
        }}
        style={{width:60,height:60,justifyContent:'center',alignItems:'center',width:60,position:'absolute',bottom:60,right:60,borderRadius:30,elevation:5,shadowOffset:{width:2,height:2},shadowRadius:5, backgroundColor:'white'}}>
          <Icon name='add-outline' size={34} color='black'/>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={[styles.modalText,{color: 'green'}]}>Create TODO </Text>
              <TextInput
                style={styles.input}
                returnKeyLabel='NEXT'
                value={titleInput}
                autoCapitalize='none'
                placeholder='Enter todo title'
                autoCorrect={false}
                autoFocus={true}
                keyboardType='default'
                maxLength={30}
                multiline={false}
                numberOfLines={1}
                onBlur={()=>descRef.current.focus()}
                onChangeText={(value)=>setTitleInput(value)}
              />
              <TextInput
                ref={descRef}
                style={[styles.input,styles.inputArea]}
                returnKeyLabel='GO'
                placeholder='Enter todo description.'
                value={descInput}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='default'
                maxLength={300}
                multiline={true}
                numberOfLines={6}
                onChangeText={(value)=>setDescInput(value)}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  // schema : id, title, description, status
                  createDummyTodo({title:titleInput,description:descInput,status:0});
                  setModalVisible(false);
                  setTitleInput("");
                  setDescInput("");
                  }}>
                <Text style={styles.textStyle}>SAVE</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
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

export default HomeScreen;
