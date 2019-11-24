var databaseHandler = {
    db: null,
    createDatabase: function () {
        this.db = window.openDatabase(
            "user.db",
            "1.0",
            "user database",
            1000000);
        this.db.transaction(
            function (tx) {
                //Run SQL Here
                tx.executeSql(
                    "create table if not exists product(_id int primary key, name text, user text)",
                [],
                    function (tx, results) { },
                    function (tx, error) {
                        console.log("Error while creating the table: " +
                            error.message);
                    }
 );
    },
    function(error) {
        console.log("Transaction error:" + error.message);
    },
    function() {
        console.log("Create DB transaction completed successfully:");
    },
 );
 }
}