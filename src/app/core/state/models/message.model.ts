export type MessageType = 'Error' | 'Success' | '';
export interface MessageModel {
  type: MessageType;
  value: string;
}
