// import express from 'express';
// import { createRequestHandler } from '@remix-run/express';
// import { createServer as createViteServer } from 'vite';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const app = express();

// async function createServer() {
//   // Получаем путь к текущей директории
//   const __dirname = path.dirname(fileURLToPath(import.meta.url));

//   // Запуск Vite в режиме разработки
//   const vite = await createViteServer({
//     server: { middlewareMode: 'html' },
//     appType: 'custom',
//   });

//   app.use(vite.middlewares);

//   // Укажите статические файлы
//   app.use(express.static(path.resolve(__dirname, 'public')));

//   // Обработчик запросов Remix
//   app.all(
//     '*',
//     createRequestHandler({
//       getLoadContext() {
//         return null;
//       },
//     })
//   );

//   const port = process.env.PORT || 3000;
//   app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
//   });
// }

// createServer().catch((error) => {
//   console.error(error);
//   process.exit(1);
// });
