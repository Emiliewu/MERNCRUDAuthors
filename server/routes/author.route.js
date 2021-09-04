const AuthorController = require('../controllers/author.controller');

module.exports = function(app) {
  app.get('/api/authors', AuthorController.findAllAuthors);
  app.post('/api/authors', AuthorController.createAuthor);
  app.get('/api/author/:id([0-9a-f]{24})', AuthorController.getAuthor);
  app.put('/api/author/:id([0-9a-f]{24})', AuthorController.updateAuthor);
  app.delete('/api/author/:id([0-9a-f]{24})', AuthorController.deleteAuthor);
}