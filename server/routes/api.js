const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/tenants', (req, res) => {
  // res.send('api works');
  res.json([
    {id:1, username: "dccestari" ,pass: "daniel"},
    {id:2, username: "rcestari" ,pass: "roxana"},
    {id:3, username: "mlorint" ,pass: "mircea"},
    {id:4, username: "nlorint" ,pass: "nely"}
  ]);
});

module.exports = router;
