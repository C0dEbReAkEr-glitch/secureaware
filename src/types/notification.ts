export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'alert' | 'info' | 'update';
  read: boolean;
  date: string;
}