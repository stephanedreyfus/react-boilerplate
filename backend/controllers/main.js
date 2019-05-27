/* eslint-disable no-unused-vars */
// Controllers: server queries
// FIXME: Using this simplified method for now. Eventually use Saga.

const addPhrase = (req, res, db) => {
  const { phrase } = req.body;
  const added = new Date();
  db('phrases')
    .insert(phrase, added)
    .returning('*')
    .then(item => {
      res.json(item);
    })
    .catch(err => res.status(400).json({ dbError: `db error: ${err}` }));
};

const getPhrases = (req, res, db) => {
  db.select('*')
    .from('phrases')
    .then(items => {
      if (items.length) {
        res.json(items);
      } else {
        res.json({ phrasesExist: 'false' });
      }
    })
    .catch(err => res.status(400).json({ dbError: `db error: ${err}` }));
};

module.exports = {
  addPhrase,
  getPhrases,
};
