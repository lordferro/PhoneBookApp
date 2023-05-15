import { TodoItem } from './TodoItem';
import { IItem } from './types';

interface IProps {
    todos: IItem[];
    onRemoveTodo: (id:number) => void
}

export const TodoList: React.FC<IProps> = props => {
  return (
    <ul>
      {props.todos.map(item => {
          return <li key={item.id}><TodoItem todo={item} onRemoveTodo={ props.onRemoveTodo} /></li>;
      })}
    </ul>
  );
};
