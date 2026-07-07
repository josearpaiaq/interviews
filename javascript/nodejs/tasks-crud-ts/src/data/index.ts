import { AppError } from "@/src/errors/AppError.ts";
import type { Task, TaskStatus } from "@/src/types/task.types.ts";

let tasks: Task[] = [
  {
    id: 1,
    title: "hacer tareas",
    status: "pending",
    createdAt: "2026-06-30T23:20:34.692Z",
  },
  // {
  //   id: 2,
  //   title: "comprar comida",
  //   status: "pending",
  //   createdAt: "2026-06-30T23:20:35.692Z",
  // },
  // {
  //   id: 3,
  //   title: "limpiar",
  //   status: "pending",
  //   createdAt: "2026-06-30T23:20:36.692Z",
  // },
  // {
  //   id: 4,
  //   title: "mejorar",
  //   status: "pending",
  //   createdAt: "2026-06-30T23:20:37.692Z",
  // },
];

export const findAllTasks = (status: TaskStatus): Task[] => {
  const filteredTasks = status
    ? tasks.filter((t) => t.status === status)
    : tasks;
  return filteredTasks;
};

export const createNewTask = (body: Pick<Task, 'title'>): Task => {
  const newId = Math.max(...tasks.map((t) => t.id), 0) + 1;

  const task: Task = {
    ...body,
    id: newId ?? 1,
    status: "pending",
    createdAt: new Date(),
  };

  tasks = [...tasks, task];
  return task;
};

export const findTaskById = (id: number): Task | undefined => {
  return tasks.find((t) => t.id === id);
};

export const updateTaskField = <K extends keyof Task>(
  {
    id,
    value,
    field
  }: {
    id: number;
    field: K;
    value: Task[K];
}): Task => {
  tasks = tasks.map((t) => {
    if (t.id === id) {
      t[field] = value;
    }
    return t;
  });

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    throw new AppError(404, "Task not found")
  }

  return task;
};

export const deleteTask = (id: number): Task[] => {
  tasks = tasks.filter((t) => t.id !== id);
  return tasks;
};
