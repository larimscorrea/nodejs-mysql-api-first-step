const mysql      = require('mysql2');
const connection = mysql.createConnection({
  host     : 'XXX',
  port     : XXX,
  user     : 'XXX',
  password : 'XXX',
  database : 'XXX'
});

connection.connect((err) => {
  if(err) return console.log(err);
  console.log('conectou!');
})