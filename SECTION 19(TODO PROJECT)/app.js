let input = prompt("What would you like to do?");
const app = ["Collect Money", "Clean Box"];
while (input !== "quit" && input !== "q ") {
  if (input === "list") {
    console.log("*************");
    for (let i = 0; i < app.length; i++) {
      console.log(`${i} : ${app[i]}`);
    }
    console.log("*************");
  } else if (input === "new") {
    const newTodo = prompt("What is new to do?");
    app.push(newTodo);
    console.log(`${newTodo} added to the list`);
  }else if(input === "delete"){
      const newtodo = prompt("What do you want to delete , Enter an index : ");
      const index =parseInt(newtodo);
      const deleted = app.splice(newtodo,1);
      console.log(`Ok Deleted ${deleted[0]}`);
  }
  input = prompt("What would you like to do?");
}
console.log("Ok Quit the app");
