// import Realm from "realm";

// const TodoSchema = {
//     name: "Todo",
//     properties: {
//     id: "int",
//     title: "string",
//     description: "string?",
//     status:"int"
//     },
//     primaryKey: "id",
// };
// const realm = await Realm.open({
//   schema: [TodoSchema],
// });
// export const createDummyTodos = ()=>{ 
//     realm.write(() => {
//         realm.create("Todo", {
//           id: 1,
//           title: "go grocery shopping",
//           description: "Open",
//           status:0,
//         });
//         realm.create("Todo", {
//           id: 1,
//           title: "go grocery shopping",
//           description: "Open",
//           status:0,
//         });
        
//         console.log(`created two tasks`);
//     });
// }
// export const closeDb = ()=>{realm.close();}