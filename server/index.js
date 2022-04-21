require('dotenv/config');
const express = require('express');
const ClientError = require('../server/client-error');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const db = require('../server/db');

const app = express();
app.use(staticMiddleware);

app.get('/api/users', (req, res, next) => {
  const sql = `
      select "userId",
             "firstName",
             "lastName",
             "email",
             "age",
             "currentLocation",
             "profilePictureUrl"
        from "users"
        `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/posts', (req, res, next) => {
  const sql = `
      select "postId",
             "photoUrl",
             "note",
             "userId",
             "mood"
        from "posts"
  `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/posts/:postId', (req, res, next) => {
  const postId = Number(req.params.postId);
  if (!postId) {
    throw new ClientError(400, 'postId must be a positive integer');
  }
  const sql = `
      select "postId",
             "photoUrl",
             "note",
             "userId",
             "mood"
        from "posts"
       where "postId" =$1
       `;

  const params = [postId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(404, `cannot find post with postId ${postId}`);
      }
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.get('/api/mood-posts/:mood', (req, res, next) => {
  const mood = req.params.mood;
  if (!mood) {
    throw new ClientError(400, 'mood must be a word');
  }
  const sql = `
      select  "postId",
              "mood",
              "photoUrl",
              "note",
              "userId"
         from "posts"
        where "mood" =$1
       `;

  const params = [mood];
  db.query(sql, params)
    .then(result => { res.json(result.rows); })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
