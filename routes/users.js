const express = require('express');

const router = express.Router();

/**
 * Set username of active user.
 * @name POST/api/users/signin
 */
router.post('/signin', (req, res) => {
  res.status(501).end(); // not implemented
});

module.exports = router;
