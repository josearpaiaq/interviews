# Prueba Técnica — Back-End con Node.js

**Nivel:** Semi-senior
**Duración estimada:** 1–2 horas
**Entrega:** Repositorio Git (público o comprimido) con un README de instrucciones para ejecutar.

## Contexto

Vas a construir una pequeña API REST para gestionar **tareas** (`tasks`) y simular el procesamiento asíncrono de las mismas. No necesitas base de datos: puedes usar almacenamiento en memoria. El foco está en el diseño de la API, el manejo correcto de operaciones asíncronas y el control de errores.

Puedes usar el framework que prefieras (Express, Fastify, o `http` nativo). No uses ORMs ni servicios externos.

## Parte 1 — API RESTful (50%)

Implementa los siguientes endpoints sobre el recurso `task`. Cada tarea tiene: `id`, `title`, `status` (`pending` | `processing` | `done` | `failed`), `createdAt`.

- `POST /tasks` — crea una tarea con `status: pending`. Valida que `title` exista y sea string no vacío; responde `400` si no.
- `GET /tasks` — lista las tareas. Soporta filtro opcional por query `?status=`.
- `GET /tasks/:id` — devuelve una tarea; `404` si no existe.
- `PATCH /tasks/:id` — permite actualizar `title`. `404` si no existe.
- `DELETE /tasks/:id` — elimina una tarea; responde `204`.

Requisitos: usa los códigos de estado HTTP correctos, devuelve JSON consistente (incluyendo un formato uniforme de error), y separa rutas, lógica de negocio y acceso a datos en módulos distintos.

## Parte 2 — Procesamiento asíncrono (40%)

Añade el endpoint `POST /tasks/:id/process` que dispara el "procesamiento" de una tarea:

1. Cambia el `status` a `processing` y responde **inmediatamente** con `202 Accepted` (no bloquees la respuesta esperando a que termine).
2. El procesamiento es una función asíncrona que simula trabajo con un retardo aleatorio entre 1 y 3 segundos (`setTimeout` envuelto en Promesa).
3. Al terminar, la tarea pasa a `done`. Simula un fallo aleatorio (~20% de probabilidad): en ese caso pasa a `failed`.
4. Implementa un mecanismo de **reintentos**: una tarea en `failed` reintenta hasta 3 veces antes de quedarse en `failed` definitivamente.

Además, expón `GET /tasks/process-all` (o el verbo que consideres correcto y justifícalo) que procese **todas** las tareas `pending` en paralelo, esperando a que todas terminen, y devuelva un resumen con cuántas terminaron en `done` y cuántas en `failed`. Maneja correctamente el caso en que algunas fallen sin que una falla individual rompa el resto.

## Parte 3 — Calidad (10%)

- Manejo centralizado de errores (un error no controlado no debe tumbar el proceso).
- Al menos 2–3 tests automatizados sobre la lógica asíncrona o las validaciones (el runner que prefieras).
- README con cómo instalar, ejecutar y probar.

## Criterios de evaluación

Se valorará: corrección del modelo REST y los códigos de estado; uso idiomático de `async/await` y Promesas (evitar callback hell, no mezclar estilos); manejo de concurrencia y errores en operaciones paralelas (`Promise.all` vs `Promise.allSettled` y por qué); separación de responsabilidades; y claridad del código y del README.

## Preguntas de cierre (responde brevemente en el README)

1. ¿Por qué elegiste `Promise.all` o `Promise.allSettled` en `process-all`? ¿Qué cambia entre ambos ante un fallo?
2. ¿Cómo escalarías el procesamiento asíncrono si en producción hubiera miles de tareas y un solo proceso Node? Menciona al menos una alternativa al enfoque in-process.
