/*global $ */
/*global User, Users, localStorage */
function Users () {
 
    this.models=[];
}

Users.prototype.deleteAccount = function () {
    // var that = this;
    var userData = {
      id: this.id  
    };
     return $.ajax ({
     url: "https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/api/users/delete",
    type: "DELETE",
    data: JSON.stringify(userData),
    
    success: function (resp) {
    
    },
    error: function (xhr, status, error) {
        // alert ("Something went wrong!");
        console.log("You can't delete this account: " + status);
    }
    
    });
};




