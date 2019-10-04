const router = require('express').Router();
let Article = require('../models/articles.model');

router.route('/').get((req, res) => {
  Article.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title
  const canonical_url = req.body.canonical_url
  const date_published = req.body.date_published;
  const domain = req.body.domain;
  const number_of_tweets = req.body.number_of_tweets;
  const score = req.body.score;
  const site_type = req.body.site_type;
  const wallet_address = req.body.wallet_address;
  const seed_amount = req.body.seed_amount;
  const date_published = req.body.date_published;

  const newArticle = new Article({
   	title,
  	canonical_url,
  	date_published,
  	domain,
  	number_of_tweets,
  	score,
  	site_type,
  	wallet_address,
  	seed_amount,
 	date_published
  });

  newExercise.save()
  .then(() => res.json('Article added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Article.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(() => res.json('Article deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/setamount/:id').post((req, res) => {
  Article.findById(req.params.id)
    .then(article => {
      article.seed_amount = req.body.seed_amount;

      article.save()
        .then(() => res.json('Article updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
