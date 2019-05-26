/** Shared config for application; can be req'd many places. */

require('dotenv').config();

const SECRET = process.env.SECRET_KEY || 'grumpy_if_told';

const PORT = +process.env.PORT || 3001;

let DB_URI;

if (process.env.NODE_ENV === 'test') {
  DB_URI = 'phrases-test';
} else {
  DB_URI = process.env.DATABASE_URL || 'phrases';
}

// eslint-disable-next-line no-console
console.log('Using database', DB_URI);

export default {
  SECRET,
  PORT,
  DB_URI,
};
