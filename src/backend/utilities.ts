var util = require('util');
var { Router } = require('express');



export function robots(req, res) {
  res.type('text/plain');
  res.send("User-agent: *\nDisallow: /");
}
