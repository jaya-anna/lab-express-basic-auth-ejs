const router = require("express").Router();
const { isLoggedIn } = require('../middleware/route-guard')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/profile', isLoggedIn, (req, res) => {
  console.log('SESSION =====> ', req.session)

  res.render('profile', { user: req.session.user })
})

module.exports = router;
