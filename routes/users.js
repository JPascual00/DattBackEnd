var express = require('express');
var router = express.Router();
var conn = require('../views/connection');


router.get('/', (res, req, next) => {
  const { id } = req.params;
  const sql = `SELECT * FROM ds_club WHERE id = '${id}'`;

  conn.query(sql, (res, req) => {

    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    
    return res.json(result[0]);

  });
});

module.exports = router;
