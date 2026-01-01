import type { ChangeEvent } from "react";

export type Props = {
    newTodoString: string;
    onNewTodoChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onAddingBtnClick: () => void;
}