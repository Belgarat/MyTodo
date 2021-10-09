export interface TodoModel {
  id: number;
  todo: string;
  checked: boolean;
}
export interface TodoEmitModel {
  element: TodoModel;
  event: MouseEvent|TouchEvent;
}
