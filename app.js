import express from 'express';
// import React from 'react';
// import { renderToString } from 'react-dom/server'
// import { match, RouterContext } from 'react-router'
//import routes from './app/config/routes';
const app = express();
const path = require('path');
const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 3000;

// app.use((req, res) => {
//   // Note that req.url here should be the full URL path from
//   // the original request, including the query string.
//   match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
//     if (error) {
//       res.status(500).send(error.message);
//     } else if (redirectLocation) {
//       res.redirect(302, redirectLocation.pathname + redirectLocation.search);
//     } else if (renderProps) {
//       // You can also check renderProps.components or renderProps.routes for
//       // your "not found" component or route respectively, and send a 404 as
//       // below, if you're using a catch-all route.
//       res.status(200).send(renderToString(<RouterContext {...renderProps} />));
//     } else {
//       res.status(404).send('Not found');
//     }
//   });
// });

app.use(express.static('./build'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(() => {
  console.log(`Server running on port ${port}`);
});
