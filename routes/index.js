const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  console.log('Everything is good here, carry on as you were')
  res.status(404).send("<h1>Error, something went wrong</h1><h1> Error status- 404</h1>");
});

module.exports = router;