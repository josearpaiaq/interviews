# Prueba tecnica 

This is a technical test to get a backend javascript semi senior job.

## Install

To install this project and start test the api run the following commands

```bash
node -v
```

should be node >24 or superior

```bash
npm install
```

```bash
npm run dev
```

go to [localhost:3000](localhost:3000) and get a hello world endpoint

## Test

You can visit all these routes in this project

Get all tasks
GET /tasks

Create a new task
POST /tasks { title: "tarea de mate" }

Get a single task
GET /tasks/:id

Update the title of a task
PATCH /tasks/:id { title: "tarea de biologia" }

Delete a task
DELETE /tasks/:id

Start processing a task
GET /tasks/:id/process

Start processing all the pending tasks
POST /tasks/process/all

## Questions

1. ¿Por qué elegiste Promise.all o Promise.allSettled en process-all? ¿Qué cambia entre ambos ante un fallo?
Promise.all will stop when one or the promises fails, Promise.allSettled will not fail in case of a faildure, will drop a summary of the promises fulfilled or failed with the value returned of the promises in the form of [{status: 'fulfilled' | 'failed', value: any}]
2. ¿Cómo escalarías el procesamiento asíncrono si en producción hubiera miles de tareas y un solo proceso Node? Menciona al menos una alternativa al enfoque in-process.
An idea for this could be the used of workers because we know that node is not multithreading but with workers to we can delegate responsabilities with many threads working at the same time and responding when done