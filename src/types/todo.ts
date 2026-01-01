export type TodoType = {
  id: string;
  name: string;
  isCompleted: boolean;
  updateIsCompleted: (todoId: string) => void;
}