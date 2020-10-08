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
        descripcion:"Hope",
        dueDate:new Date(),
        status: "Ready",
        responsable: "gg@mail.com"
    },
    {
        id:uuidv4(),
        descripcion:"Prueba",
        dueDate:new Date(),
        status: "Done",
        responsable: "luis@mail.com"
    },
    {
        id:uuidv4(),
        descripcion:"Otra Prueba",
        dueDate:new Date(),
        status: "In progress",
        responsable: "alejo@mail.com"
    },
    {
        id:uuidv4(),
        descripcion:"Final",
        dueDate:new Date(),
        status: "In progress",
        responsable: "zeus@mail.com"
    }
];
