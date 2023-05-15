import { useState } from 'react';
import { AddTodo } from 'components/Todo/AddTodo';
import { TodoList } from 'components/Todo/TodoList';
import { IItem } from 'components/Todo/types';

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos(prevTodos => {
      return [...prevTodos, { id: Math.random(), title: text }];
    });
  };

  const handleRemove = (id: number) => {
    setTodos(prevTodos => {
      return prevTodos.filter(item => {
        return item.id !== id;
      });
    });
  };

  return (
    <div>
      <AddTodo addTodo={addTodoHandler} />
      <TodoList todos={todos} onRemoveTodo={handleRemove} />
    </div>
  );
};

export default Todo;
