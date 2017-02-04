 /*global localStorage */
 /*global $ */
 function User (options) {
        this.id= options.id;     
        this.email= options.email;
        this.password= options.password;
        this.name= options.name;
        this.age= options.age;
        this.gender= options.gender;
    }
    User.prototype.createAccount= function (formData) {
    
    // var that = this;
     $.ajax ({
        url: "https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/api/users/createaccount",
        type: "POST",
        data: formData, 
        processData: false,
        contentType: false,
        success: function (resp) {
        
             console.log("Your account was created");
           
        },
        error: function (xhr, status, error) {
            alert ("Oops! Something went wrong");
        }
    });
}; 
User.prototype.login= function () {
     var dataLogin= {
     email: this.email,
     password: this.password
 } ;
//  var that = this;
    return $.ajax ({
        url: "https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/api/users/login",
        type: "POST",
        data: dataLogin,
      
        success: function (resp) {
        
        },
       
        error: function (xhr, status, error) {
            // alert ("Oops! Something went wrong");
            
        }
    });
    
};

User.prototype.editAccount = function () {
    // var that = this;
     var dataToSend = {
      id: this.id,     
      name: this.name,
      password: this.password
    
  };
     $.ajax ({
    url: "https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/api/users/edit",
    type: "PUT",
    contentType: "aplication/json",
    data: JSON.stringify(dataToSend),
    
    success: function (resp) {

          
    },
    error: function (xhr, status, error) {
        // alert ("Something went wrong!");
        console.log("You can't edit this account: " + status);
    }
    
    });
};
// User.prototype.deleteAccount = function () {
//     // var that = this;
//     var userData = {
//       id: this.id  
//     };
//      return $.ajax ({
//      url: "https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/api/users/delete",
//     type: "DELETE",
//     data: JSON.stringify(userData),
    
//     success: function (resp) {
    
//     },
//     error: function (xhr, status, error) {
//         // alert ("Something went wrong!");
//         console.log("You can't delete this account: " + status);
//     }
    
//     });
// };
