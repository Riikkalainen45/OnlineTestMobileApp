var userHandler = {
    //Add the record in database, it adds record or row in Web SQL (SQLite)
    addUser: function (name, user) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into product(name, user) values(?, ?)",
                    [name, user],
                    function (tx, results) { },
                    function (tx, error) {
                        console.log("add user error: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    },
}