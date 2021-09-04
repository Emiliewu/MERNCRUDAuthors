const Author = require('../models/author.model');

module.exports = {
  findAllAuthors(req, res) {
    Author.find({}).sort('name')
      .then(authors => res.json(authors))
      .catch(err => res.status(400).json(err));
  },
  createAuthor(req, res) {
    Author.create(req.body)
      .then(author => res.json(author))
      .catch(err => res.status(400).json(err));
  },
  getAuthor(req, res) {
    Author.findById(req.params.id)
      .then(author => res.json(author))
      .catch(err => res.status(400).json(err));
  },
  updateAuthor(req, res) {
    let opt = { 
      runValidators: true,
      new: true
    };
    Author.findByIdAndUpdate(req.params.id, req.body, opt)
      .then(author => res.json(author))
      .catch(err => res.status(400).json(err));
  },
  deleteAuthor(req, res) {
    Author.findByIdAndDelete(req.params.id)
      .then(author => res.json(author))
      .catch(err => res.status(400).json(err));
  }
};