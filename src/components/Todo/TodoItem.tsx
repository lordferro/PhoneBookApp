import { IItem } from "./types"

interface IProps {
    todo: IItem
    onRemoveTodo: (id:number) => void
}
export const TodoItem: React.FC<IProps> = (props) => {
    const handleClick = () => {
        props.onRemoveTodo(props.todo.id)
    }
    return <>{props.todo.title} <button type="button" onClick={handleClick}>Delete</button></>
}