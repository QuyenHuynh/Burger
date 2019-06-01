const mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    //Database is JawsDB on Heroku
   connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    //Database is local
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
    });
};

//Connect to database
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;