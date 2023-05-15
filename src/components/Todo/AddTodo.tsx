import { useState } from 'react';
interface IProps {
  addTodo: (text:string) => void;
}

export const AddTodo: React.FC<IProps> = props => {
  const [title, setTitle] = useState('');
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    };
    const handlerSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        props.addTodo(title)
        setTitle('')
    }

  return (
    <form onSubmit={handlerSubmit}>
      <label>
        Add new task {' '}
        <input type="text" value={title} onChange={handleChange} />
      </label>
    </form>
  );
};
