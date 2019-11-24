$(document).on("ready", function () {
    databaseHandler.createDatabase();
});
function addUser() {
    var name = $("#txtName").val();
    var user = $("#txtuser").val();
    userHandler.addUser(name, user);
    $("#txtName").val("");
    $("#txtuser").val("");
}