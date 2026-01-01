import { CreateNewTodo } from "./components/CreateNewTodo"
import { useEffect, useState, type ChangeEvent } from "react"
import type { TodoType } from "../src/types/todo";
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from "./components/TodoList";

// type Todo = {id: string; name: string };

function App() {
  const [todoList, setTodoList] = useState<TodoType[]>(() => {
    const savedTodoList = JSON.parse(localStorage.getItem('todoList') ?? '[]');
    if (savedTodoList?.length) {
      return savedTodoList;
    }
    
    return [];
  });
  const [newTodoString, setNewTodoString] = useState('');

  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoString(e.target.value);
  }

  const onAddingBtnClick = () => {
    const newTodoItem: TodoType = {
        id: uuidv4(),
        name: newTodoString,
        isCompleted: false,
        updateIsCompleted: updateIsCompleted
    }

    setTodoList([newTodoItem, ...todoList]);
    setNewTodoString('');
  };

  const updateIsCompleted = (todoId: string) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === todoId) {
          return {...todo, isCompleted: !todo.isCompleted}
        }

        return todo;
      })
    })
  }

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  console.log({newTodoString})
  


  return (
    <>
      <p>Todo App</p>
      <CreateNewTodo 
        newTodoString={newTodoString}
        onNewTodoChange={onNewTodoChange}
        onAddingBtnClick={onAddingBtnClick}
      />
      <TodoList todoList={todoList} updateIsCompleted={updateIsCompleted} />
    </>
  )
}
export default App
