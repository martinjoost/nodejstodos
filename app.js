const argv = require('./config/yargs').argv;
const toDo = require('./todos/todos');


let comando = argv._[0];

switch(comando) {

    case 'crear':
        let todo = toDo.crear(argv.descripcion);
        break;
    case 'list':
        let list = toDo.getList();
        break;
    case 'update':
        let updated = toDo.update(argv.descripcion, argv.completado);
        break;
    case 'delete':
        let deleteTask = toDo.deleteTask(argv.descripcion);
        break;
    default:
        console.log('Comando no reconocido');
        

}



