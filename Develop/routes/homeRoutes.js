const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');

router.engine('handlebars', exphbs());
router.set('view engine', 'handlebars');

router.get('/', (req, res) => {
    res.render('home', {title: 'Homepage'});
});

module.exports = router;