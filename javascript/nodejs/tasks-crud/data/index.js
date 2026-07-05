// with the form id, title, status (pending | processing | done | failed), createdAt.
let tasks = [
  {
    id: 1,
    title: "hacer tareas",
    status: "pending",
    createdAt: "2026-06-30T23:20:34.692Z",
  },
  {
    id: 2,
    title: "comprar comida",
    status: "pending",
    createdAt: "2026-06-30T23:20:35.692Z",
  },
  {
    id: 3,
    title: "limpiar",
    status: "pending",
    createdAt: "2026-06-30T23:20:36.692Z",
  },
  {
    id: 4,
    title: "mejorar",
    status: "pending",
    createdAt: "2026-06-30T23:20:37.692Z",
  },
];

export const findAllTasks = (status = "") => {
  const filteredTasks = status
    ? tasks.filter((t) => t.status === status)
    : tasks;
  return filteredTasks;
};

export const createNewTask = (body) => {
  const newId = Math.max(...tasks.map((t) => t.id)) + 1;

  const task = {
    ...body,
    id: newId,
    status: "pending",
    createdAt: new Date(),
  };

  tasks = [...tasks, task];
  return task;
};

export const findTaskById = (id) => {
  return tasks.find((t) => t.id === id);
};

export const updateTaskField = ({ id, value, field }) => {
  tasks = tasks.map((t) => {
    if (t.id === id) {
      t[field] = value;
    }
    return t;
  });

  const task = tasks.find((t) => t.id === id);

  return task;
};

export const deleteTask = (id) => {
  tasks = tasks.filter((t) => t.id !== id);
  return tasks;
};
