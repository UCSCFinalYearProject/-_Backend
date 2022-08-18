const mysql = require('mysql');
const conn = mysql.createConnection({
 host: "localhost",
 user: "root", // your my sql user name. By default it's 'root'
 password: "", //your my mysql password. By default it's '' (empty string)
 database: "maw_thurula", // here your database name
});

conn.connect();

module.exports = conn;


// host: "mawthurula-do-user-12259647-0.b.db.ondigitalocean.com",
//     user: "doadmin", // your my sql user name. By default it's 'root'
//     password: "AVNS_kFMBdimTFShKuqp1Jyt", //your my mysql password. By default it's '' (empty string)
//     database: "defaultdb", // here your database name,
//     port: 25060
