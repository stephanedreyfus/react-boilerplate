/** A simple back end Express server to connect to a Postrgesql database.
 * As I am still assimilating much of the Express information I have
 * recently been taught I am pattern matching a great deal from the
 * following article: https://medium.com/@olinations/build-a-crud-template-using-react-bootstrap-express-postgres-9f84cc444438
 *  ---
 * db name = phrases
 * Test db name = phrases-test */

const express = require('express');

// Express Middleware
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Bring in db port and db url
const { PORT, DB_URI } = require('./config');

// db connection: : DB_URI has to come first so that it can be properly declared.
// eslint-disable-next-line import/order
const db = require('knex')({
  client: 'pg',
  connection: {
    connectionSting: DB_URI,
    ssl: true,
  },
});

// Controllers
const main = require('./controllers/main');

// App
const app = express();

// App Middleware
const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(morgan('combined'));

// Routes
app.post('/', (req, res) => main.addPhrase(req, res, db));
app.get('/phrases', (req, res) => main.getPhrases(req, res, db));

// App server connection
app.listen(PORT || 3001, () => {
  // eslint-disable-next-line no-console
  console.log(`Party has started on port ${PORT || 3001}`);
});
