import { Button, TextField } from '@mui/material'
import type { Props } from "../types/prop";

export const CreateNewTodo = ({
    newTodoString,
    onNewTodoChange,
    onAddingBtnClick,
} : Props) => {
  return (
    <div>
        <TextField size="small" value={newTodoString} onChange={onNewTodoChange}/>
        <Button variant="contained" onClick={onAddingBtnClick}>Add</Button>
      </div>
  )
}
