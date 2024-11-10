var mysql = require('mysql');
var connection = mysql.createConnection({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  port: 3306,
});

connection.connect((err) => {
  if (err) {
      console.log('Error connecting to Db', err);
      return;
  }
  console.log('Connection established');
});
module.exports= connection;