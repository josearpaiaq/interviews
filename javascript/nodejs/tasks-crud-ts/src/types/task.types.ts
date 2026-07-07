export type TaskStatus = "pending" | "processing" | "done" | "failed";

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
  createdAt: Date | string;
}
