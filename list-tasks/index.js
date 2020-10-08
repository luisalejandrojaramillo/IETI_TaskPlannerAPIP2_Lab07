module.exports = async function (context, req) {
    context.log("Post and Get method implements");

    const task = req.body;

    if(req.method=="POST"){
      alltasks.push(task)
      task.id=uuidv4()
      context.res = {
          status: 200,
          body: alltasks,
      };
    }
    else{
      context.res = {
          status: 200,
          body: alltasks,
      };
    }

}
const { v4: uuidv4 } = require('uuid');
var alltasks = [
    {
        id:uuidv4(),
        text:"Hope",
        status: "Ready",
        dueDate:new Date(),
        responsible: "gg@mail.com"
    },
    {
        id:uuidv4(),
        text:"Prueba",
        status: "Done",
        dueDate:new Date(),
        responsible: "luis@mail.com"
    },
    {
        id:uuidv4(),
        text:"Otra Prueba",
        status: "In progress",
        dueDate:new Date(),
        responsible: "alejo@mail.com"
    },
    {
        id:uuidv4(),
        text:"Final",
        status: "In progress",
        dueDate:new Date(),
        responsible: "zeus@mail.com"
    }
];
