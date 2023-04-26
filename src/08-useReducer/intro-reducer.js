
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

const todoReducer = ( state = initialState, action = {}) => {

    if( action.type === '[TODO] add todo' ){
        return [ ...state, action.payload ]
    }

    return state;//Siempre  retornar un estado(nuevo, porque fue modificado)
}

let todos = todoReducer();

console.log(todos);

const newTodo = { 
        id:2,
        todo:'Recolectar la piedra del tiempo',
        done: false,
    }

// todos.push({ 
//     id:2,
//     todo:'Recolectar la piedra del tiempo',
//     done: false,
// })
// es una mala practica, la mutacion del estado arreglo no se redibuja en React

const addTodoAction = {
    type: '[TODO] add todo',//accion
    payload: newTodo,//contenido de la accion
}

 todos = todoReducer(todos, addTodoAction );

 console.log({state: todos});
