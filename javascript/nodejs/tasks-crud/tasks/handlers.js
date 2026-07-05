import * as data from "../data/index.js";
import { AppError } from "../errors/AppError.js";

const getTasksHandler = (req, res) => {
  const { query } = req;
  const { status } = query;
  const tasks = data.findAllTasks(status);
  res.status(200).json(tasks);
};

const postTaskHandler = (req, res) => {
  const { body } = req;
  const { title } = body;
  if (!title || typeof title !== "string") {
    throw new AppError(400, "title is required to update a task");
  }

  const task = data.createNewTask({ title });

  res.status(200).json(task);
};

const getTaskHandler = (req, res) => {
  const { params } = req;
  const { id } = params;

  const task = data.findTaskById(Number(id));

  if (!task) {
    throw new AppError(404, "task not found");
  }

  res.status(200).json(task);
};

const patchTaskHandler = (req, res) => {
  const { body, params } = req;
  const { title } = body;
  const { id: paramId } = params;
  const id = Number(paramId);

  if (!title || typeof title !== "string") {
    throw new AppError(400, "title is required to update a task");
  }

  const task = data.findTaskById(id);

  if (!task) {
    throw new AppError(404, "task not found");
  }

  const updatedTask = data.updateTaskField({
    id,
    field: "title",
    value: title,
  });

  res.status(200).json(updatedTask);
};

const deleteTaskHandler = (req, res) => {
  const { params } = req;
  const { id: paramId } = params;
  const id = Number(paramId);

  const task = data.findTaskById(id);

  if (!task) {
    throw new AppError(404, "task not found");
  }

  data.deleteTask(id);
  res.status(204).end();
};

// 1. Cambia el status a processing y responde inmediatamente con 202 Accepted (no bloquees la respuesta esperando a que termine).
// 2. El procesamiento es una función asíncrona que simula trabajo con un retardo aleatorio entre 1 y 3 segundos (setTimeout envuelto en Promesa).
// 3. Al terminar, la tarea pasa a done. Simula un fallo aleatorio (~20% de probabilidad): en ese caso pasa a failed.
// 4. Implementa un mecanismo de reintentos: una tarea en failed reintenta hasta 3 veces antes de quedarse en failed definitivamente.
const processTaskHandler = (req, res) => {
  const { id: paramId } = req.params;
  const id = Number(paramId);

  const task = data.findTaskById(id);

  if (!task) {
    throw new AppError(404, "task not found");
  }

  data.updateTaskField({ id, field: "status", value: "processing" });

  res.status(202).json({
    message: "task accepted",
    id,
  });

  processTask(id).catch((err) => {
    console.error(`processTask failed for id=${id}:`, err);
  });
};

const randomBetween = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const processTask = async (id, attempt = 1) => {
  const waitMs = randomBetween(1, 3) * 1000;
  await delay(waitMs);

  const didFail = Math.random() < 0.2;

  if (didFail) {
    if (attempt < 3) {
      data.updateTaskField({ id, field: "status", value: "failed" });
      return processTask(id, attempt + 1);
    }
    return data.updateTaskField({ id, field: "status", value: "failed" });
  }

  return data.updateTaskField({ id, field: "status", value: "done" });
};

// Además, expón GET /tasks/process-all (o el verbo que consideres correcto y justifícalo) que procese todas las tareas pending en paralelo, esperando a que todas terminen, y devuelva un resumen con cuántas terminaron en done y cuántas en failed. Maneja correctamente el caso en que algunas fallen sin que una falla individual rompa el resto.
const processAllTasksHandler = async (req, res) => {
  const pendingTasks = data
    .findAllTasks("pending")
    .map((t) => processTask(t.id));

  const result = await Promise.allSettled(pendingTasks);

  const summary = result.reduce(
    (acc, curr) => {
      acc[curr.value.status] = (acc[curr.value.status] || 0) + 1;
      return acc;
    },
    { done: 0, failed: 0 },
  );

  res.status(200).json({ ...summary });
};

export {
  getTasksHandler,
  postTaskHandler,
  getTaskHandler,
  patchTaskHandler,
  deleteTaskHandler,
  processAllTasksHandler,
  processTaskHandler,
};
