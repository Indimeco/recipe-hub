var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    createBook(con, 'testUser', 'testBook');
});

function createBook(con, user, bookName){
    try {
        con.query(`
            CREATE TABLE mydb.${bookName} (
                recipe_index INT NOT NULL,
                name VARCHAR(45) NOT NULL,
                ingredients TEXT NULL,
                method TEXT NULL,
                categories TEXT NULL,
                ready_time INT NULL,
                active_time INT NULL,
                preview_image TEXT NULL,
                recipe_source TEXT NULL,
            PRIMARY KEY (recipe_index),
            UNIQUE INDEX recipe_index_UNIQUE (recipe_index ASC) VISIBLE);
        `, (err, result) => console.log(result));
    }
    catch(err){
        console.log(err);
    }
}